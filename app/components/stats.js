import React from 'react';

const ClubEvents = () => {
  return (
    <div style={{width:'fit-content'}}>
      <h1 style={{fontSize:'5.5rem',fontWeight:'600'}}>
        108+<br/> </h1>
        <p style={{fontSize:'1.3rem'}}>Events organized</p>
     
      
    </div>
  );
}




const ClubImage = () => {
  return (
    <div>
      <img src="images/img5.svg" alt="Club" />
    </div>
  );
}


const ClubIntro = () => {
  return (
    <div>
      <h1 style={{fontSize:'2.5rem',fontWeight:'800'}}>
        <div  style={{ color:'#7d111c' }} >
       
          SPARKING INNOVATION
          <br/>
          AMONG STUDENTS
        </div> </h1>
       <p style={{fontSize:'1.3rem'}}> Association of Computer Engineering Students is the 
        departmental club of Department of Computer 
        Engineering at Dr.D.Y Patil Institute of Technology,
        Pimpri.</p>
     
      
    </div>
  );
}



const ClubMembers = () => {
  return (
    <div>
      <h1  style={{fontSize:'5.5rem',fontWeight:'600'}}>
        470+<br/></h1>
        <p style={{fontSize:'1.3rem'}}>Members</p>
      
      
    </div>
  );
}



const ClubParticipants = () => {
  return (
    <div>
      <h1  style={{fontSize:'5.5rem',fontWeight:'600'}}>24,000+</h1>
      <p style={{fontSize:'1.3rem'}}>  Participants</p>
   
      
    </div>
  );
}



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
