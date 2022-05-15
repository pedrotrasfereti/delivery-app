import * as React from 'react';
import 'simplebar/dist/simplebar.min.css';

/* Children */
import SimpleBar from 'simplebar-react';
import { BsArrowUp as ArrowUp } from 'react-icons/bs';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('aside', {
  backgroundColor: '$loContrast',
  borderRight: '1px solid lightgray',
  width: '250px',

  '&>.Filters': {
    '& .Heading': {
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

      '&>li>div': {
        cursor: 'pointer',
        color: '$gray800',
        display: 'flex',
        fontFamily: '$sans',
        fontSize: '$3',
        fontWeight: '$4',
        padding: '.8rem 1.5rem',

        '&.Selected': {
          backgroundColor: '$secondary',
          color: '$loContrast',
          fontWeight: '$5',
        },

        '&:hover:not(.Selected)': {
          backgroundColor: '$gray200',
          color: '$textDark',
        },
      },
    },
  },

  '@bp3': {
    '.simplebar-scrollbar::before': {
      background: '$hiContrast',
      borderRadius: '0',
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

        '&>li>div': {
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

function Sidebar() {
  return (
    <StitchesComponent>
      <section className="Filters">
        <div className="Heading">
          <h3>Filters</h3>
          <ArrowUp className="Icon" />
        </div>

        <SimpleBar scrollbarMaxSize={ 65 }>
          <ul className="Categories">
            <li><div className="Selected">Beverages</div></li>
            <li><div>Desert</div></li>
            <li><div>Fast Food</div></li>
            <li><div>Healthy</div></li>
            <li><div>Iced Coffee</div></li>
            <li><div>Mexican</div></li>
            <li><div>Milkshake</div></li>
            <li><div>Sushi</div></li>
            <li><div>Thai</div></li>
            <li><div>Veggie</div></li>
          </ul>
        </SimpleBar>
      </section>
    </StitchesComponent>
  );
}

export default Sidebar;
