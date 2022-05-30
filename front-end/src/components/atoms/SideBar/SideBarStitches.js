/* Assets */
import {
  Beverages,
  Dessert,
  FastFood,
  HealthyFood,
  IcedCoffee,
  MexicanFood,
  Milkshake,
  Sushi,
  ThaiFood,
  VeggieFood,
} from '../../../assets/food';

/* Styles */
import { styled } from '../../../stitches.config';

const backgroundProperties = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const gradient = `
linear-gradient(0deg, hsla(215, 100%, 65%, .5) 0%, hsla(0, 100%, 100%, .5) 50%)
`;

export default styled('aside', {
  backgroundColor: '$loContrast',
  borderRight: '1px solid lightgray',
  width: '250px',

  '& header': {
    alignItems: 'center',
    display: 'flex',
    gap: '$2',
    padding: '.75rem 1.5rem',
    borderBottom: '1px solid lightgray',

    '& h3': {
      color: '$textDark',
      fontFamily: '$sans2',
      fontSize: '$4',
      fontWeight: '$4',
    },

    '& .Icon': {
      color: '$gray800',
      fontSize: '$4',
    },
  },

  '& .Categories': {
    display: 'flex',
    flexFlow: 'column nowrap',

    // Background Images
    '#beverages': {
      backgroundImage: `url(${Beverages})`,
      ...backgroundProperties,
    },

    '#dessert': {
      backgroundImage: `url(${Dessert})`,
      ...backgroundProperties,
    },

    '#fast-food': {
      backgroundImage: `url(${FastFood})`,
      ...backgroundProperties,
    },

    '#healthy': {
      backgroundImage: `url(${HealthyFood})`,
      ...backgroundProperties,
    },

    '#iced-coffee': {
      backgroundImage: `url(${IcedCoffee})`,
      ...backgroundProperties,
    },

    '#mexican': {
      backgroundImage: `url(${MexicanFood})`,
      ...backgroundProperties,
    },

    '#milkshake': {
      backgroundImage: `url(${Milkshake})`,
      ...backgroundProperties,
    },

    '#sushi': {
      backgroundImage: `url(${Sushi})`,
      ...backgroundProperties,
    },

    '#thai': {
      backgroundImage: `url(${ThaiFood})`,
      ...backgroundProperties,
    },

    '#veggie': {
      backgroundImage: `url(${VeggieFood})`,
      ...backgroundProperties,
    },

    '& li': {
      cursor: 'pointer',
      display: 'flex',
      padding: '.8rem 1.5rem',
      position: 'relative',
      transition: 'padding ease .25s',

      // Text
      '& span': {
        color: '$gray800',
        fontFamily: '$sans',
        fontSize: '$3',
        fontWeight: '$4',
        zIndex: '3',
      },

      // Selected
      '&.Selected': {
        backgroundColor: '$secondary',

        '& span': {
          color: '$loContrast',
          fontWeight: '$5',
        },
      },

      // Hover
      '&:not(:hover)': {
        backgroundImage: 'none !important',
      },

      '&:hover': {
        padding: '3rem 1.5rem',

        '& span': {
          fontSize: '$4',
          fontWeight: '$5',
        },

        '&:not(.Selected) span': {
          color: '$textDark',
        },

        '&::before': {
          background: gradient,
          content: '',
          height: '100%',
          left: '0',
          position: 'absolute',
          top: '0',
          width: '100%',
          zIndex: '1',
        },
      },

      '&.Selected:hover::before': {
        background: '$primary',
        width: '.5rem',
        zIndex: '9',
      },
    },
  },

  '@bp3': {
    '.simplebar-scrollbar::before': {
      background: '$gray800',
    },

    alignItems: 'center',
    border: '0',
    display: 'flex',
    height: '$5',
    width: '100%',

    '&>.Filters': {
      width: '100%',

      '& .Heading': {
        display: 'none',
      },

      '& .Categories': {
        width: '100%',
        flexFlow: 'row nowrap',
        gap: '$2',
        padding: '$3',

        '&>li': {
          backgroundColor: '$gray200',
          display: 'flex',
          padding: '$2 $3',
          border: '0',
          borderRadius: '$round',
          whiteSpace: 'nowrap',
        },
      },
    },
  },
});
