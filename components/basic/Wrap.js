/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Wrap(props) {
  return(
    <div sx={{maxWidth: '1440px', m: '0 auto', px: 4}}>
      {props.children}
    </div>
  )
}