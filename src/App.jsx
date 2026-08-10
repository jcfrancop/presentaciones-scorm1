import { useState } from 'react'

import Welcome from './screens/Welcome'
import Instructions from './screens/Instructions';
import Introduction from './screens/Introduction';
import DragFiles from './screens/dragFiles';

function App() {

  const [currentScreen, setCurrentScreen] =useState("welcome");

  const screens = {
    welcome:<Welcome setCurrentScreen={setCurrentScreen}/>,
    before:<Instructions setCurrentScreen={setCurrentScreen}/>,
    introduction:<Introduction setCurrentScreen={setCurrentScreen}/>,
    dragfiles:<DragFiles setCurrentScreen={setCurrentScreen}/>
  }

  return (
    screens[currentScreen]  
  )
}

export default App
