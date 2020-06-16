/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

export default function Footer() {

  const styledFooter = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '160px',
    width: '100%',
    background: 'black'
  }

  // Window scroll state setup
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect())
  const [scrollY, setScrollY] = useState(bodyOffset.top)
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  const [scrollDirection, setScrollDirection] = useState()

  // update scroll state on scroll
  const footerState = () => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
    setLastScrollTop(-bodyOffset.top)
  }

  // set up effect to use scroll updater on scroll
  // effect abstracted to src/utilities.js
  useEffect(() => {
    window.addEventListener('scroll', footerState);
    return () => {
      window.removeEventListener('scroll', footerState);
    }
  })

  return(
    <div sx={styledFooter}>
      <p>hi</p>
    </div>
  )
}