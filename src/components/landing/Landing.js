import React from 'react'
import Button from '@material-ui/core/Button';
import { css } from 'emotion'

const rootStyles = css`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`

const buttonStyles = css`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`

const Landing = () => {
  return (
    <div className={rootStyles}>
      <div>
        <h1 className="title is-2">sizzlingPlate</h1>
        <p className="subtitle is-4">keep a dinner log. nail quantities</p>
        <Button variant="contained">
          Get Started
        </Button>
      </div>
    </div>
)}

export default Landing
