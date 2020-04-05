import { UPDATE_TIMELINE } from "../../constants";

const updateTimeline = data => ({
  type: UPDATE_TIMELINE,
  data
});

const TimelineReducer = (timelineState, action) => {
  const { type, data } = action;

  switch (type) {
    case UPDATE_TIMELINE:
      return [...data, ...timelineState];
    default:
      return timelineState;
  }
};

export { TimelineReducer, updateTimeline };
