import { gray, red } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...red,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      3: 1.6,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      6: '64px',
      10: '300px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '2px',
    },
    shadows: {
      card: '0px 5px 5px 0px rgba(0,0,0,0.3)',
    },
    zIndices: {},
    transitions: {},
  },
});
