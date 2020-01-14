import React, { Component } from 'react';

import Toolbar from '../demonavbar/DemoToolbar/DemoToolbar';
import SideDrawer from '../demonavbar/DemoSideDrawer/DemoSideDrawer';
import Backdrop from '../demonavbar/DemoBackdrop/DemoBackdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          {/* <p>This is the page content!</p> */}
        </main>
        
      </div>
    );
  }
}

export default App;
