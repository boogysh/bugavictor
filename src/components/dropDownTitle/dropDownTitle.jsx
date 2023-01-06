import React from 'react'
import arrowBottom from '../../assets/arrowBottom.png'
import './dropDownTitle.css'

function DropDownTitle({ toggle, title, classTitle, arrow }) {
  return (
    <div className="title_content">
      <h3 className={classTitle}>{title}</h3>
      <button onClick={toggle}>
        <img className={arrow} src={arrowBottom} alt="arrow dropdown" />
      </button>
    </div>
  )
}
export default DropDownTitle