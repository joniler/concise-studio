
/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import { motion } from 'framer-motion'
import Wrap from '../basic/Wrap'
import Logo from '../../src/assets/svg/clogo.svg'


export default function HeroHome() {

  const heroStyles = {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 80px)'
  }

  const heroLeft = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'primary',
    color: 'secondary',
    clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
  }

  const heroRight = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'background',
    color: 'tertiary',
    clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
  }

  const textLeft = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    color: 'background',
    position: 'absolute',
    left: 0,
    top: '50%',
    bottom: '50%',
    transform: `translateY(-50%)`,
    textAlign: 'right',
    m: 0,
    fontSize: 80,
    maxWidth: '340px',
    direction: 'rtl'
  }

  const textRight = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: '50%',
    bottom: '50%',
    transform: `translateY(-50%)`,
    textAlign: 'left',
    m: 0,
    fontSize: 80,
    maxWidth: '340px'
  }

  const logoDarkStyles = {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    left: '50%',
    right: '50%',
    width: '20%',
    transform: `translate(-50%,-50%)`,
    fill: 'primary'
  }

  const logoLightStyles = {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    left: '50%',
    right: '50%',
    width: '20%',
    transform: `translate(-50%,-50%)`,
    fill: 'background'
  }

  const messageBoxStyles = {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    left: '50%',
    right: '50%',
    transform: `translate(-50%,-50%)`,
    width: '100%',
    height: '20%'
  }

  const heroLEnter = {
    visible: {
      opacity: 1,
      clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
    },
    hidden: {
      opacity: 1,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
    }
  }

  const heroREnter = {
    visible: {
      opacity: 1,
      clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
    },
    hidden: {
      opacity: 0,
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
    }
  }

  const textEnter = {
    visible: {
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  }

  return(
    <Flex sx={heroStyles}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroLEnter}
        transition={{
          duration: 1,
          ease: "backIn"
        }}
        sx={heroLeft}>
        <Logo sx={logoLightStyles}/>
      </motion.div>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={heroREnter}
        transition={{
          duration: 1,
          ease: "backIn"
        }}
        sx={heroRight}>
        <Logo sx={logoDarkStyles}/>
      </motion.div>
      <Wrap>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textEnter}
          transition={{
            delay: 1,
            duration: 1,
            ease: 'backIn'
          }}
          sx={messageBoxStyles}>
          <Styled.h1 sx={textLeft}>We build</Styled.h1>
          <Styled.h1 sx={textRight}>User Interfaces</Styled.h1>
        </motion.div>
      </Wrap>
    </Flex>
  )
}