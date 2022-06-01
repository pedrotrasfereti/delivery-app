import React from 'react';

/* Assets */
import { BlankProfile } from '../../../assets';

/* Children */
import { Button, HorizontalRule } from '../../atoms';

/* Utils */
import LocalStorageMethods from '../../../utils/localStorage';

/* Styles */
import { ClassicLayout } from '../../templates';
import Styled from './Styled';

export default function Account() {
  const { name, email } = LocalStorageMethods.getParsedItem('user');

  return (
    <ClassicLayout>
      <Styled>
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
      </Styled>
    </ClassicLayout>
  );
}
