import React from 'react';

const Home = () => {
  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: '#E7493E',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
    }}>
      <img alt="logo" src={require('../../assets/images/barsnap_logo_only.png')} style={{ height: 'auto', width: '50%'}} />
    </div>
  );
};

export default Home;
