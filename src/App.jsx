import { useState } from 'react'

import Welcome from './screens/Welcome'
import Introduction from './screens/Introduction';
import DragFiles from './screens/dragFiles';

function App() {

  const [currentScreen, setCurrentScreen] =useState(0);

  const screens = [
    <Welcome setCurrentScreen={setCurrentScreen}/>,
    <Introduction setCurrentScreen={setCurrentScreen}/>,
    <DragFiles setCurrentScreen={setCurrentScreen}/>
  ]

  return (
    screens[currentScreen]  
  )
}

export default App
