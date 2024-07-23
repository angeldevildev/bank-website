import React from 'react'
import './Button.css'

function Button({ 
  text, 
  borderRadius, 
  fontFamily, 
  padding, 
  margin, 
  backColor, 
  border,
  color,
  width,
  height
}) {
  return (
    <div className='btn-layout'>
      <button style={{ 
        borderRadius,
        fontFamily,
        padding,
        margin,
        border,
        color,
        width,
        height,
        backgroundColor: backColor,
       }}>{text}</button>
    </div>
  )
}

export default Button;
