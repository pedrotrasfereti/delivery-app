import { createStitches } from '@stitches/react';

export const {
  // https://stitches.dev/docs/installation#available-functions
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      /* contrast colors */
      hiContrast: 'hsl(0, 0%, 7%)',
      loContrast: 'hsl(0, 100%, 100%)',

      /* main colors */
      primary: 'hsl(215, 96%, 50%)',
      secondary: 'hsl(215, 100%, 65%)',

      /* accent colors */
      tertiary: 'hsl(166, 95%, 22%)',
      quaternary: 'hsl(264, 67%, 31%)',

      /* feedback colors */
      error: 'hsl(348, 83%, 47%)',

      /* neutral colors */
      gray800: 'hsl(0, 0%, 26%)',
      gray700: 'hsl(0, 0%, 38%)',
      gray600: 'hsl(0, 0%, 46%)',
      gray500: 'hsl(0, 0%, 62%)',
      gray400: 'hsl(0, 0%, 74%)',
      gray300: 'hsl(0, 0%, 88%)',
      gray200: 'hsl(0, 0%, 93%)',
      gray100: 'hsl(0, 0%, 96%)',
      gray50: 'hsl(0, 0%, 98%)',

      /* aliases */
      background: '$gray50',
      button: '$primary',
      textLight: '$loContrast',
      textDark: '$hiContrast',
      accent1: '$tertiary',
      accent2: '$quaternary',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '96px',
      7: '128px',

      btnPadding: '.7rem 1rem',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '28px',
      7: '32px',
    },
    fonts: {
      sans: 'Inter, sans-serif',
      sans2: 'Space Grotesk, sans-serif',
    },
    fontWeights: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
    },
    lineHeights: {
      default: '1.5rem',
    },
    letterSpacings: {},
    shadows: {
      dark: 'rgba(0, 0, 0, 0.059)',
      darker: 'rgba(0, 0, 0, 0.169)',
      darkest: 'rgba(0, 0, 0, .39)',
      bright: 'rgba(255, 255, 255, 0.063)',
      brighter: 'rgba(255, 255, 255, 0.122)',
      brightest: 'rgba(255, 255, 255, 0.39)',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '96px',
      7: '128px',

      iconBarHeight: '$5',
      headerHeight: '5rem',
      sectionMinHeight: '100vh',
    },
    radii: {
      default: '.25rem',
      edge: '.1rem',
      round: '9999px',
    },
    zIndices: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
    },
    transitions: {
      default: '.25s',
    },
  },
  media: {
    bp1: '(max-width: 480px)',
    bp2: '(max-width: 640px)',
    bp3: '(max-width: 768px)',
    bp4: '(max-width: 1024px)',
  },
  utils: {},
});
