import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

interface PlayerParams {
  id: string;
  [key: string]: string | undefined;
}

const Player = () => {
  const { id } = useParams<PlayerParams>();

  if (!id) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div>
      Player
      {id}
    </div>
  );
};

export default Player;
