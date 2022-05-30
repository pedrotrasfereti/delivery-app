import React from 'react';

/* Assets */
import { BlankProfile } from '../../assets';

/* Children */
import { Button, HorizontalRule } from '../atoms';
import { ClassicLayout } from '../templates';

/* Styles */
import { styled } from '../../stitches.config';

/* Utils */
import LocalStorageMethods from '../../utils/localStorage';

const Main = styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$3',

  '& header': {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'inherit',

    '& .ImageContainer': {
      border: '0',
      borderRadius: '$round',
      height: '4rem',
      objectFit: 'cover',
      width: '4rem',

      '& img': {
        border: '0',
        borderRadius: '$round',
        width: '100%',
      },
    },

    '& h2': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '$5',
      fontWeight: '$6',
      marginTop: '$3',
    },

    '& span': {
      color: '$gray700',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$4',
      marginTop: '$2',

      '@bp3': {
        fontSize: '$2',
      },
    },
  },

  '& .Links': {
    alignItems: 'center',
    color: '$primary',
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '$3',
  },
});

export default function Account() {
  const { name, email } = LocalStorageMethods.getParsedItem('user');

  return (
    <ClassicLayout>
      <Main>
        <header>
          <div className="ImageContainer">
            <img src={ BlankProfile } alt="Profile" />
          </div>

          <h2>{ name }</h2>

          <span id="email">{ email }</span>
        </header>

        <HorizontalRule />

        <div className="Links">
          <Button type="button" id="edit-profile" link>
            <a
              href="http://"
              target="_blank"
              rel="noreferrer"
            >
              Edit Profile
            </a>
          </Button>
          <Button type="button" id="change-password" link>
            <a
              href="http://"
              target="_blank"
              rel="noreferrer"
            >
              Change Password
            </a>
          </Button>
          <Button type="button" id="delete" link>
            <a
              href="http://"
              target="_blank"
              rel="noreferrer"
            >
              Logout
            </a>
          </Button>
        </div>
      </Main>
    </ClassicLayout>
  );
}
