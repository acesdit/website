import React from 'react';
import ClubImage from './clubimage.js';
import ClubIntro from './clubintro.js';
import ClubEvents from './clubevent.js';
import ClubMembers from './clubmember.js';
import ClubParticipants from './clubparticipant.js';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(160,124,56,0.19)',
  };

  const horizontalContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems:'center',
  };

  const columnStyle1 = {
    flex: 1,
    margin: '0 70px 70px 70px', 
    textAlign:'center',
    
  };
  const columnStyle = {
    flex: 1,
    margin: '70px', 
    textAlign:'center',
    
  };
  const style = {
    flex: 1,
    margin: '70px',
  };
  const lineStyle = {
    borderTop: '3.5px solid black', 
    width: '80%', 
    margin: '20px 30px', 
  };


  return (
    <div>
      <div style={containerStyle}>
        <div style={horizontalContainerStyle}>
          <div style={columnStyle1}>
            <ClubImage />
          </div>
          <div style={style}>
            <ClubIntro />
          </div>
        </div>
        <div style={lineStyle}></div>
        <div style={horizontalContainerStyle}>
          <div style={columnStyle}>
            <ClubEvents />
          </div>
          <div style={columnStyle}>
            <ClubParticipants />
          </div>
          <div style={columnStyle}>
            <ClubMembers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
