import React from 'react'
import './dropDownContent.css'



function DropDownContent({ content, classContent, display }) {
  return (
    <div className={`body_content ${display}`}>
      {Array.isArray(content) ? (
        <ul className="list_content">
          {content.map((item, index) => (
            <li key={index} className={classContent}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className={classContent}>{content}</p>
      )}
    </div>
  )
}
export default DropDownContent