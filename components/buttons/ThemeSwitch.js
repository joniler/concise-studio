/** @jsx jsx */
import { useState } from 'react'
import { jsx, Flex, IconButton } from 'theme-ui'

export default function ThemeSwitch() {

  const [darkMode, setDarkMode] = useState(false)

  const buttonStyles = {
    cursor: 'pointer',
    p: 0,
    width: 'auto',
    height: 'auto'
  }

  return(
    <Flex>
      <IconButton sx={buttonStyles}
        aria-label='Toggle dark mode'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='currentcolor'>
          <circle
            r={11}
            cx={12}
            cy={12}
            fill='none'
            stroke='currentcolor'
            strokeWidth={2}
          />
        </svg>
      </IconButton>
    </Flex>
  )
}