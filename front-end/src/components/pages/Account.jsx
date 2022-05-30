import React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { ClassicLayout } from '../templates';

/* Styles */
import { styled } from '../../stitches.config';

const Main = styled('main', {});

export default function Account() {
  const { user } = useSelector((state) => state.user);

  return (
    <ClassicLayout>
      <Main>
        { user.email }
      </Main>
    </ClassicLayout>
  );
}
