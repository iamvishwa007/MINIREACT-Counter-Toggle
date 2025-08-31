import { useState } from 'react'
import './App.css'
import Count from './components/count'
import Toggle from './components/toggle'

function App() {
  const[theme,setTheme]=useState("light");
  return (
    <div className={`body-ctn ${theme}`}>
     <div className="toggle">
      <Toggle setTheme={setTheme}/>
     </div> 
     <div className="counterr">
      <Count/>
     </div>
    
    </div>
  )
}

export default App
