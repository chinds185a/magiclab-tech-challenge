import React, { createContext, useReducer } from "react";
import { TimelineReducer } from "../../reducers/TimelineReducer";

const TimelineContext = createContext([]);

const TimelineContextProvider = ({ children }) => {
  const [timelineState, timelineDispatch] = useReducer(TimelineReducer, []);

  return (
    <TimelineContext.Provider value={{ timelineState, timelineDispatch }}>
      {children}
    </TimelineContext.Provider>
  );
};

const TimelineContextConsumer = TimelineContext.Consumer;

export { TimelineContext, TimelineContextProvider, TimelineContextConsumer };
