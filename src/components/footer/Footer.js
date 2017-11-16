import React from 'react'
import Button from '../utility/Button'

const styles = {
  position:'absolute',
  bottom:'0',
  width:'100%',
  height:'60px'
}

const Footer = () => (
  <footer style={styles} className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <Button href="https://github.com/michael-lowe-nz" text="Find me on Github" />
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
