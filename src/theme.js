const theme = {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: '"Lato", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
    heading: '"Montserrat", sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#181818',
    background: '#fff',
    primary: '#181818',
    secondary: '#CC008A',
    muted: '#f6f6f6'
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 7,
      mb: 3
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 6,
      mb: 3
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      mb: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      mb: 3
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      mb: 3
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
      mb: 3
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      mt: 0,
      mb: 3
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  },
  buttons: {
    primary: {
      mr: 3,
      mb: 3,
      color: 'background',
      bg: 'primary',
      borderRadius: '2px',
      transition: 'background 200ms ease-in, color 200ms ease',
      '&:hover': {
        bg: 'muted',
        color: 'primary'
      }
    },
    secondary: {
      mr: 3,
      mb: 3,
      color: 'background',
      bg: 'secondary',
      borderRadius: '2px',
      transition: 'background 200ms ease-in, color 200ms ease',
      '&:hover': {
        bg: 'text'
      }
    },
  }
}

export default theme