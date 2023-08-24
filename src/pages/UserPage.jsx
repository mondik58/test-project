import React from 'react';
import { useParams } from 'react-router-dom';

import { Posts } from '../components';
import Gallery from '../components/Gallery';

const UserPage = () => {
  const { userId } = useParams();

  return (
    <div className="d-flex flex-column gap-4">
      <Posts id={userId} />
      <Gallery id={userId} />
    </div>
  );
};

export default UserPage;
