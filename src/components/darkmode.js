import React, {useEffect, useState} from 'react'

const DarkMode = ({}) => {
    const isdark = localStorage.getItem("darkmode")?JSON.parse(localStorage.getItem("darkmode")):false;
    const [ darkMode, setDarkMode ] = useState(isdark);

    const darkHandle = () => {
        localStorage.setItem("darkmode", !darkMode);
        setDarkMode(!darkMode)       
    }
    useEffect(() => {
        const body = document.body
        const toggle = document.querySelector('.toggle-inner')
        if( darkMode === true ) {
          body.classList.add('dark-mode')
          toggle.classList.add('toggle-active')
        } else {
          body.classList.remove('dark-mode')
          toggle.classList.remove('toggle-active')
        }
        const overlayEvt = new CustomEvent("DarkmodeHandle", {detail: darkMode});
          document.dispatchEvent(overlayEvt);
    }, [darkMode])
    
    return (
            <div
                id="toggle"
                onClick={() => darkHandle()}
            >
              <span id="bulb">	
              &#128161;
              </span>
                <div className="toggle-inner"/>
            </div>
    )
}


export default DarkMode;