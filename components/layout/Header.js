/** @jsx jsx */
import { jsx, Flex, NavLink } from 'theme-ui'
import { motion } from 'framer-motion'
import ThemeSwitch from '../buttons/ThemeSwitch.js'
import VerticalDivider from '../basic/VerticalDivider.js'

export default function Header() {

  const headerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    py: '8px',
    px: '24px',
    alignItems: 'center',
    justifyContent: 'space-between',
    bg: 'background',
    boxShadow: '0 0 80px rgba(0,0,0,0.05)',
  }

  const logoStyles = {
    width: '36px',
    cursor: 'pointer',
    transition: 'transform 200ms ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }

  const navStyles = {
    alignItems: 'center'
  }

  const headerAnimation = {
    visible: {
      width: '100%',
      position: 'fixed',
      top: 0,
      y: 0,
      zIndex: 100
    },
    hidden: {
      width: '100%',
      position: 'fixed',
      top: 0,
      y: -100,
      zIndex: 100
    }
  }

  return(
    <motion.div initial="hidden" animate="visible" variants={headerAnimation}>
      <Flex sx={headerStyles}>
        <img sx={logoStyles} src="/assets/images/clogo.svg" alt="Concise Studio Logo"/>
        <Flex sx={navStyles}>
          <NavLink>WORK</NavLink>
          <NavLink>SERVICES</NavLink>
          <NavLink>TEAM</NavLink>
          <VerticalDivider height="32px" marginLeft="18px" marginRight="24px"/>
          <ThemeSwitch/>
        </Flex>
      </Flex>
    </motion.div>
  )
}