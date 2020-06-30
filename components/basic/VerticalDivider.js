/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function VerticalDivider(props) {

  const height = props.height ? props.height : '40px'
  const marginRight = props.marginRight ? props.marginRight : '4px'
  const marginLeft = props.marginLeft ? props.marginLeft : '4px'

  return(
    <div sx={{
      height: height,
      mr: marginRight,
      ml: marginLeft,
      width: '2px',
      bg: 'lightGrey'
    }}>
    </div>
  )
}