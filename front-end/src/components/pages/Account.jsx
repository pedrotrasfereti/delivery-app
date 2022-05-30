import React from 'react';

/* Assets */
import { useSelector } from 'react-redux';
import { BlankProfile } from '../../assets';

/* State */

/* Children */
import { Button, HorizontalRule } from '../atoms';
import { ClassicLayout } from '../templates';

/* Styles */
import { styled } from '../../stitches.config';

const Main = styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$3',

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
  },

  '& span': {
    color: '$gray700',
    fontFamily: '$sans',
    fontSize: '$3',
    fontWeight: '$4',
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
  const { user } = useSelector((state) => state.user);

  return (
    <ClassicLayout>
      <Main>
        <div className="ImageContainer">
          <img src={ BlankProfile } alt="Profile" />
        </div>

        <h2>{ user.name }</h2>

        <span id="email">{ user.email }</span>

        <HorizontalRule />

        <div className="Links">
          <Button id="edit-profile" link>
            <a
              href="http://"
              target="_blank"
              rel="noreferrer"
            >
              Edit Profile
            </a>
          </Button>
          <Button id="change-password" link>
            <a
              href="http://"
              target="_blank"
              rel="noreferrer"
            >
              Change Password
            </a>
          </Button>
          <Button id="delete" link>
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
