import React, { useContext } from 'react';
import MenuContext from '../libs/MenuContext';

function Modalmenu({children}) {
    const context = useContext(MenuContext);
    const { displayModalA, displayModalB } = context;
    return (
        <div className='model-menu'>
            <button onClick={displayModalA}>All Contact</button>
            <button onClick={displayModalB}>US Contact</button>
            {children}
        </div>
    );
}

export default Modalmenu;