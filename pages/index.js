/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Wrap from '../components/basic/Wrap'

export default function Home() {
  return (
    <div sx={{height: '300vh'}}>
      <Wrap>
        <Styled.h1 sx={{textTransform: 'uppercase'}}>Concise</Styled.h1>
      </Wrap>
    </div>
  )
}
