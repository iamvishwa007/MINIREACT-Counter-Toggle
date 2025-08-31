import { useEffect, useState } from "react"

export default function Toggle({setTheme}){

    return(
        <div className='toggle-out'>
            <button onClick={()=>setTheme("light")}>Light</button>
            <button onClick={()=>setTheme("dark")}>Dark</button>
        </div>
    )
}
