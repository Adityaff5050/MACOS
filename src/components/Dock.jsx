import React from 'react'
import"./dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img src="/Dockicon/github.svg" alt="" /></div>
        <div className="icon note"><img src="/Dockicon/notes.svg" alt="" /></div>
        <div className="icon pdf"><img src="/Dockicon/pdf.svg" alt="" /></div>
        <div className="icon calender"><img src="/Dockicon/calender.svg" alt="" /></div>
        <div className="icon spotify"><img src="/Dockicon/spotify.svg" alt="" /></div>
        <div className="icon calender"><img src="/Dockicon/mail.svg" alt="" /></div>
        <div className="icon link"><img src="/Dockicon/link.svg" alt="" /></div>
        <div className="icon github"><img src="/Dockicon/cli.svg" alt="" /></div>
    </footer>
  )
}

export default Dock