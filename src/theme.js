import { lighten } from '@theme-ui/color'

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
    tertiary: '#4d4d4d',
    muted: '#f2f2f2'
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      minHeight: '100vh',
      position: 'relative',
      pt: '80px'
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
      fontWeight: '700',
      fontSize: 5,
      mb: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: '700',
      fontSize: 4,
      mb: 3
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: '700',
      fontSize: 3,
      mb: 3
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: '500',
      fontSize: 2,
      mb: 3,
      letterSpacing: '0.6px'
    },
    p: {
      minWidth: '10em',
      maxWidth: '35em',
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
      px: 5,
      color: 'background',
      bg: 'primary',
      fontFamily: 'heading',
      fontWeight: '500',
      fontSize: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      transition: 'background 200ms ease-in, color 200ms ease, box-shadow 200ms ease, transform 200ms ease, clip-path 200ms ease',
      '&:hover': {
        textShadow: '-0.02ex 0 white, 0.02ex 0 white',
        bg: 'tertiary',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        transform: 'translateY(-1px)'
      },
      '&:disabled': {
        background: lighten('primary', 0.75),
        '&:hover': {
          clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
          cursor: 'not-allowed',
          transform: 'none',
          boxShadow: 'none'
        }
      }
    },
    secondary: {
      mr: 3,
      mb: 3,
      px: 5,
      color: 'background',
      bg: 'secondary',
      fontFamily: 'heading',
      fontWeight: '500',
      fontSize: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      transition: 'background 200ms ease-in, color 200ms ease, box-shadow 200ms ease, transform 200ms ease, clip-path 200ms ease',
      '&:hover': {
        textShadow: '-0.02ex 0 white, 0.02ex 0 white',
        bg: 'tertiary',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        transform: 'translateY(-1px)'
      },
      '&:disabled': {
        clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        background: lighten('primary', 0.75),
        cursor: 'not-allowed',
        transform: 'none',
        boxShadow: 'none'
      }
    }
  },
  forms: {
    label: {
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: '500',
      mb: 2
    },
    input: {
      borderRadius: '2px',
      borderColor: 'gray',
      transition: 'box-shadow 200ms ease',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      fontFamily: 'body',
      borderRadius: '2px',
      borderColor: 'gray',
      transition: 'box-shadow 200ms ease',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderRadius: '2px',
      borderColor: 'gray',
      transition: 'box-shadow 200ms ease',
      resize: 'none',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
      mb: 4
    },
  }
}

export default theme