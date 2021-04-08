
import React from 'react'; 
import {activeMenu} from './HeaderMenu';
function ActiveMenu(activeMenu) {

    return (
        <div>
            {activeMenu}
        </div>
    );
}

export default ActiveMenu;