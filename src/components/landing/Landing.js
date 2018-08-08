import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
  <div className='container'>
    <div className='section'>
      <div className='columns is-multiline is-centered'>
        <div className='column is-4'>
          <div className='content'>
            <h1 className="title is-2">sizzlingPlate</h1>
            <p className="subtitle is-4">go out for dinner. lots.</p>
            <Link to="/home">
              <Button variant="contained" style={{
                backgroundColor: "#25CCF7"
              }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
)}

export default About
