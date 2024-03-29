import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/LestItem';



const SideDrawer = (props) => {
    
        return (
            <Drawer
                anchor="right"
                open={props.open}
                onClose={()=>props.onClose('false')}> 
                </Drawer>
        )
    }


export default SideDrawer;