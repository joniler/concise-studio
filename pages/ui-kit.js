/** @jsx jsx */
import { jsx,
  Flex,
  Heading,
  Button,
  Box,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider
} from 'theme-ui'

export default function UiKit() {
  return(
    <div sx={{'variant': 'styles'}}>
      <Heading as="h1" sx={{pl: 4, pt: 4}}>UI Kit</Heading>
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
        <Heading as="h6">Primary</Heading>
        <Button variant='primary'>Primary</Button>
        <Button variant='primary' disabled={true}>Primary</Button>

        <Heading as="h6">Secondary</Heading>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='secondary' disabled={true}>Secondary</Button>

        <Heading as="h5" sx={{textDecoration: 'underline'}}>Form Fields</Heading>
        <Box
          as='form'
          onSubmit={e => e.preventDefault()}>
          <Label htmlFor='username'>Username</Label>
          <Input
            name='username'
            id='username'
            mb={3}
          />
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            mb={3}
          />
          <Box>
            <Label mb={3}>
              <Checkbox />
              Remember me
            </Label>
          </Box>
          <Label htmlFor='sound'>Sound</Label>
          <Select name='sound' id='sound' mb={3}>
            <option>Beep</option>
            <option>Boop</option>
            <option>Blip</option>
          </Select>
          <Label htmlFor='comment'>Comment</Label>
          <Textarea
            name='comment'
            id='comment'
            rows='6'
            mb={3}
          />
          <Flex mb={3}>
            <Label><Radio name='letter' /> Alpha</Label>
            <Label><Radio name='letter' /> Bravo</Label>
            <Label><Radio name='letter' /> Charlie</Label>
          </Flex>
          <Label>Slider</Label>
          <Slider/>
          <Button>Submit</Button>
        </Box>
      </div>
    </div>
  )
}