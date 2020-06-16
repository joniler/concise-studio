/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Header() {

  const headerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    background: 'black'
  }

  return(
    <div sx={headerStyles}>
      <p>stuff</p>
    </div>
  )
}