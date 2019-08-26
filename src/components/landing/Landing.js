import React from 'react'
import Button from '@material-ui/core/Button'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

const rootStyles = css`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`

const linkStyles = css`
  text-decoration: none;
`

const Landing = () => {
  return (
    <div className={rootStyles}>
      <div>
        <h1 className="title is-2">sizzlingPlate</h1>
        <p className="subtitle is-4">keep a dinner log. nail quantities</p>
        <Link className={linkStyles} to="/home">
            <Button variant="contained">
                Get Started
            </Button>
        </Link>
      </div>
    </div>
)}

export default Landing
