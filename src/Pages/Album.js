import React from 'react';
import SingleAlbum from './SingleAlbum';

const Album = ({ match }) => {
    
    const { params: { albumName } } = match;
  
    return (
        < SingleAlbum name={albumName}/>
    );
  };

  export default Album;
