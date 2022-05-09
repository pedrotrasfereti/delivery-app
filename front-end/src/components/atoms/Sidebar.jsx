import * as React from 'react';

/* Children */
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
      padding: '1rem 1.5rem',
      borderBottom: '1px solid lightgray',

      '& h3': {
        color: '$textDark',
        fontFamily: '$sans2',
        fontSize: '$4',
        fontWeight: '$5',
      },

      '& .Icon': {
        color: '$textDark',
        fontSize: '$3',
      },
    },

    '&>.Categories': {
      display: 'flex',
      flexFlow: 'column nowrap',

      '&>li>div': {
        cursor: 'pointer',
        color: '$gray700',
        display: 'flex',
        fontFamily: '$sans',
        fontSize: '$3',
        fontWeight: '$4',
        padding: '.8rem 1.5rem',

        '&.Selected': {
          backgroundColor: '$secondary',
          color: '$textLight',
          fontWeight: '$5',
        },

        '&:hover:not(.Selected)': {
          backgroundColor: '$gray200',
          color: '$textDark',
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
      </section>
    </StitchesComponent>
  );
}

export default Sidebar;
