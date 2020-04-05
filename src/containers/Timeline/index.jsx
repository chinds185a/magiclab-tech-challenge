import React, { useEffect, useContext, useState } from "react";

// hooks
import useInterval from "../../utils/useInterval";

// context consumers
import { TimelineContext } from "../../contexts/TimelineContext";

// actions
import { updateTimeline } from "../../reducers/TimelineReducer";

// components
import Tweet from "../../components/Tweet";

const API_BASE_URL =
  "https://magiclab-twitter-interview.herokuapp.com/chrishinds";

const Timeline = () => {
  const [latestTweetId, setLatestTweetId] = useState(null);
  const { timelineState, timelineDispatch } = useContext(TimelineContext);

  // fetch first batch of tweets on ititial render
  useEffect(() => {
    fetchData();
  }, []);

  // custom hook to handle fetching of of data on a set interval
  useInterval(() => {
    fetchData();
  }, 2000);

  const resetApiDatabase = async () => {
    const response = await fetch(`${API_BASE_URL}/reset`);
    const data = await response.json();

    return data;
  };

  const fetchData = async () => {
    const count = 10;

    const urlPath = !latestTweetId
      ? `/api?count=${count}`
      : `/api?count=${count}&afterId=${latestTweetId}`;

    try {
      const response = await fetch(`${API_BASE_URL}${urlPath}`);
      const data = await response.json();

      if (latestTweetId >= 10000) {
        resetApiDatabase();
        return;
      }

      if (data.length > 0) {
        const [latestTweet] = data;
        setLatestTweetId(latestTweet.id);
        timelineDispatch(updateTimeline(data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>{timelineState.length} - Tweet's</h1>
      {timelineState && timelineState.map(tweet => <Tweet tweet={tweet} />)}
    </>
  );
};

export default Timeline;
