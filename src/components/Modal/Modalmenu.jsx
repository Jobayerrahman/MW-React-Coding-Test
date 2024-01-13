import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuContext from '../libs/MenuContext';

function Modalmenu({children}) {
    const context = useContext(MenuContext);
    const { displayModalA, displayModalB } = context;
    return (
        <div className='model-menu'>
            <Link to='/problem-2/all-contacts' onClick={displayModalA} className="btn modal-buttonA" type="button">All Contact</Link>
            <Link to='/problem-2/us-contacts' onClick={displayModalB} className="btn modal-buttonB" type="button">US Contact</Link>
            {children}
        </div>
    );
}

export default Modalmenu;