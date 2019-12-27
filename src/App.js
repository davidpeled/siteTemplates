import React from 'react';
import ContactUs from './Components/ContactUs';
import SocialMediaFooter from './Components/SocialMediaFooter';
import Navbar from './Components/Navbar';
import ContantChangeBox from './Components/ContantChangeBox';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContantChangeBox/>
      <ContactUs/>
      <SocialMediaFooter/>
    </div>
  );
}

export default App;
