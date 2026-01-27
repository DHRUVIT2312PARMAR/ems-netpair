import React from 'react'
import { Bookmark } from 'lucide-react'
import '../../App.css'

const Card = (props) => {

  const handleClick = () => {
    console.log("Contact clicked");
  }

  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src={props.profile_img} alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>{props.name} <span>5 days ago</span></h3>
          <h2>{props.designation}</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.working_amount}$/hr</h3>
            <p>{props.place},Gujrat</p>
          </div>
          <button onClick={handleClick}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Card
