/** @jsx jsx */
import { jsx, Flex, NavLink } from 'theme-ui'
import ThemeSwitch from '../buttons/ThemeSwitch.js'
import VerticalDivider from '../basic/VerticalDivider.js'

export default function Header() {

  const headerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    p: '8px',
    alignItems: 'center',
    justifyContent: 'space-between',
    bg: 'background',
    boxShadow: '0 0 80px rgba(0,0,0,0.05)'
  }

  const logoStyles = {
    width: '66px',
    cursor: 'pointer',
    transition: 'transform 200ms ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }

  const navStyles = {
    alignItems: 'center'
  }

  return(
    <Flex sx={headerStyles}>
      <img sx={logoStyles} src="/assets/images/clogo.png" alt="Concise Studio Logo"/>
      <Flex sx={navStyles}>
        <NavLink>WORK</NavLink>
        <NavLink>SERVICES</NavLink>
        <VerticalDivider height="32px" marginLeft="8px" marginRight="16px"/>
        <ThemeSwitch/>
      </Flex>
    </Flex>
  )
}