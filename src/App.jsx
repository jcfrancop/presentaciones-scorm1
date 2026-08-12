import { useState, useEffect } from "react";
import {
  initializeSCORM,
  isSCORMAvailable,
  startSCORMSession,
  setProgress,
  getProgress,
  completeSCORM,
  finishSCORMSession,
} from "./scorm/scorm";

import Footer from "./components/Footer";
import Welcome from "./screens/Welcome";
import Instructions from "./screens/Instructions";
import Introduction from "./screens/Introduction";
import DragFiles from "./screens/DragFiles";
import Question1 from "./screens/Question1";
import Notebook from "./screens/Notebook";
import Question2 from "./screens/Question2";
import StoryBoard from "./screens/StoryBoard";
import Message from "./screens/Message";
import DefStoryboard from "./screens/DefStoryboard";
import Question3 from "./screens/Question3";
import FinalSteep from "./screens/FinalSteep";
import Final from "./screens/Final";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [scormLoaded, setScormLoaded] = useState(false);

  useEffect(() => {
    initializeSCORM();

    if (isSCORMAvailable()) {
      startSCORMSession();

      const savedProgress = getProgress();

      if (savedProgress) {
        setCurrentScreen(savedProgress);
      }
    }

    setScormLoaded(true);
  }, []);

  useEffect(() => {
    if (scormLoaded) {
      setProgress(currentScreen);
    }
  }, [currentScreen, scormLoaded]);

  useEffect(() => {
  if (currentScreen === "final") {
    completeSCORM();
  }
}, [currentScreen]);

useEffect(() => {
  return () => {
    finishSCORMSession();
  };
}, []);

  const screens = {
    welcome: <Welcome setCurrentScreen={setCurrentScreen} />,
    before: <Instructions setCurrentScreen={setCurrentScreen} />,
    introduction: <Introduction setCurrentScreen={setCurrentScreen} />,
    dragfiles: <DragFiles setCurrentScreen={setCurrentScreen} />,
    question1: <Question1 setCurrentScreen={setCurrentScreen} />,
    notebook: <Notebook setCurrentScreen={setCurrentScreen} />,
    question2: <Question2 setCurrentScreen={setCurrentScreen} />,
    storyboard: <StoryBoard setCurrentScreen={setCurrentScreen} />,
    message: <Message setCurrentScreen={setCurrentScreen} />,
    def_story: <DefStoryboard setCurrentScreen={setCurrentScreen} />,
    question3: <Question3 setCurrentScreen={setCurrentScreen} />,
    finalSteep: <FinalSteep setCurrentScreen={setCurrentScreen} />,
    final: <Final setCurrentScreen={setCurrentScreen} />,
  };

  return (
    <main>
      {screens[currentScreen]}
      <Footer />
    </main>
  );
}

export default App;
