import React from 'react'

const Button = ({ text, href }) => (
  <a href={href} className="button">{text}<i className="fa fa-download"></i></a>
)

export default Button
