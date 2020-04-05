import React from "react";
import Timeline from "./containers/Timeline";

// context providers
import { TimelineContextProvider } from "./contexts/TimelineContext";

// material-ui
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <TimelineContextProvider>
      <Container maxWidth="md">
        <Timeline />
      </Container>
    </TimelineContextProvider>
  );
};

export default App;
