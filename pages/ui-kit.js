/** @jsx jsx */
import { jsx, Heading, Button } from 'theme-ui'

export default function UiKit() {
  return(
    <div sx={{'variant': 'styles'}}>
      <Heading as="h1" sx={{pl: 4, pt: 4}}>UI Kit</Heading>
      <hr/>
      <div sx={{p: 4}}>
        <Heading as="h5" sx={{textDecoration: 'underline'}}>Headings</Heading>
        <Heading as="h1">Heading H1</Heading>
        <Heading as="h2">Heading H2</Heading>
        <Heading as="h3">Heading H3</Heading>
        <Heading as="h4">Heading H4</Heading>
        <Heading as="h5">Heading H5</Heading>
        <Heading as="h6">Heading H6</Heading>

        <Heading as="h5" sx={{textDecoration: 'underline'}}>Paragraphs</Heading>
        <div>
          <p>Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.</p>

          <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
        </div>

        <Heading as="h5" sx={{textDecoration: 'underline'}}>Buttons</Heading>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>

        <Heading as="h5" sx={{textDecoration: 'underline'}}>Disabled Buttons</Heading>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
      </div>
    </div>
  )
}