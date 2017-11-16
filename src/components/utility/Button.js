import React from 'react'

const Button = ({ text, href }) => (
  <a href={href} className="button">{text}</a>
)

export default Button
