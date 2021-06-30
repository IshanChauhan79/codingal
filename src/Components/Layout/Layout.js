import { props } from 'bluebird';
import React from 'react';
import NavBar from '../NavBar/NavBar';

function Layout(props) {
    return (
      <div>
          <NavBar timer={props.timer} />
          {props.children} 
      </div>
    );
  }
  
  export default Layout;
  