/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Wrap from '../components/basic/Wrap'
import HeroHome from '../components/sections/HeroHome.js'

export default function Home() {
  return (
    <div sx={{height: '300vh'}}>
      <HeroHome/>
      <Wrap></Wrap>
    </div>
  )
}
