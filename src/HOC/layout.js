import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

 function Layout(props) {
  return (
    <div>
        <Header />
      <div className='pt-5 pb-5'>
      hello
      </div> 
      <Footer />
      
    </div>
  )
}

export default Layout;