import React from 'react';

import logo from '../../assets/images/barsnap_logo_only.png'

const Home = () => {
  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: '#E7493E',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
    }}>
      <img alt="logo" src={logo} style={{ height: 'auto', width: '50%'}} />
    </div>
  );
};

export default Home