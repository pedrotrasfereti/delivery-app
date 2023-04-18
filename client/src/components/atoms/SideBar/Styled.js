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
  backgroundSize: '120%',
};

const gradient = `
linear-gradient(0deg, hsla(215, 100%, 65%, .5) 0%, hsla(0, 100%, 100%, .3) 50%)
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
    cursor: 'pointer',

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

    '& svg.Icon.active': {
      transform: 'rotate(0)',
      transition: 'transform ease .3s',
    },

    '& svg.Icon.disabled': {
      transform: 'rotate(180deg)',
      transition: 'transform ease .3s',
    },
  },

  '& ul.Categories.active': {
    opacity: '1',
    transform: 'translateY:(-20px)',
    transition: '.3s ease',
  },

  '& ul.Categories.disabled': {
    opacity: '0',
    transform: 'translateY:(0)',
    transition: '.3s ease',
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
        padding: '6.5vh 1.5rem',

        '& span': {
          fontFamily: '$sans',
          fontSize: '$4',
          fontWeight: '$6',
        },

        '&:not(.Selected) span': {
          color: '$textDark',
        },

        '&::after': {
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
        content: '',
        height: '100%',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '.4rem',
        zIndex: '9',
      },
    },
  },

  '@bp3': {
    alignItems: 'center',
    border: '0',
    display: 'flex',
    height: '$5',
    width: '100%',

    '& header': {
      display: 'none',
    },

    '& .Categories': {
      flexFlow: 'row nowrap',
      gap: '$2',
      padding: '$3',
      width: '100%',
      overflowX: 'scroll',

      '&>li, &>li:hover': {
        backgroundImage: 'none !important',
        display: 'flex',
        padding: '$2 $3',
        border: '0',
        borderRadius: '$round',
        whiteSpace: 'nowrap',

        '& span': {
          fontSize: '$3',
          fontWeight: '$4 !important',
        },

        '&::after': {
          display: 'none',
        },

        '&::before': {
          display: 'none',
        },
      },

      '&>li': {
        backgroundColor: '$gray200',
      },
    },
  },
});
