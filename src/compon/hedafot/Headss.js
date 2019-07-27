import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

class Headss extends Component {

    state ={
        drawerOpen: false


    }

    toggleDrawer = (value) => this.setState({drawerOpen: value
    })
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'black',
                    boxShadow:'none',
                    padding:'10px 10px'
                }}
                >
                <Toolbar>
                    <div className="header_logo">
                        <div className= "font_righteous header_logo_venue"> The Venue</div>
                        <div className="header_logo_title">Musichall events</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=>console.log('open')}
    >
                        <menuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={this.stae.drawer.Open}
                    >   onClose={(value)=>this.toggleDrawer(value)}

                    </SideDrawer>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Headss;

