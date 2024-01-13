import React, { useState } from 'react';
import ModalA from './Modal/ModalA';
import ModalB from './Modal/ModalB';
import MenuContext from './libs/MenuContext';

const Problem2 = () => {
    const [displayAllContact, setDisplayAllContact] = useState(false);
    const [displayUsContact, setDisplayUsContact] = useState(false);

    const handleAllContact =()=>{
        setDisplayAllContact(true)
        setDisplayUsContact(false)
    }
    const handleUsContact =()=>{
        setDisplayUsContact(true)
        setDisplayAllContact(false)
    }

    const handleHideAllContact = () =>{
        setDisplayAllContact(false)
    }

    const handleHideUsContact = () =>{
        setDisplayUsContact(false)
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={handleAllContact} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={handleUsContact}  className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>
            <MenuContext.Provider value={{ displayModalA: handleAllContact, displayModalB:handleUsContact}}>
                <ModalA displayModal={displayAllContact} onHideModal={handleHideAllContact}/>
                <ModalB displayModal={displayUsContact} onHideModal={handleHideUsContact}/>
            </MenuContext.Provider>
        </div>
    );
};

export default Problem2;