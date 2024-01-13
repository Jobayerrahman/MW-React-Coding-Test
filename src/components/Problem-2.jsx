import axios from 'axios';
import ModalA from './Modal/ModalA';
import ModalB from './Modal/ModalB';
import MenuContext from './libs/MenuContext';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Problem2 = () => {
    const [displayAllContact, setDisplayAllContact] = useState(false);
    const [displayUsContact, setDisplayUsContact] = useState(false);
    const [contacts, setContacts ] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=> getContact(),[]);

    useEffect(()=>{
        if(location.pathname === "/problem-2/all-contacts"){
            setDisplayAllContact(true)
            setDisplayUsContact(false)
        }else if(location.pathname === "/problem-2/us-contacts"){
            setDisplayUsContact(true)
            setDisplayAllContact(false)
        }
    },[location])

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
        navigate('/problem-2')
    }

    const handleHideUsContact = () =>{
        setDisplayUsContact(false)
        navigate('/problem-2')
    }

    const getContact = () =>{
        axios.get('https://contact.mediusware.com/api/contacts/').then((response) => {
            const contacts = response.data.results;
            setContacts(contacts);
        });
    }

    console.log(contacts);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <Link to='/problem-2/all-contacts' onClick={handleAllContact} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</Link>
                <Link to='/problem-2/us-contacts' onClick={handleUsContact}  className="btn btn-lg btn-outline-warning" type="button" >US Contacts</Link>
                </div>
                
            </div>
            <MenuContext.Provider value={{ displayModalA: handleAllContact, displayModalB:handleUsContact}}>
                <ModalA
                    contactsData={contacts} 
                    displayModal={displayAllContact} 
                    onHideModal={handleHideAllContact}/>
                <ModalB 
                    contactsData={contacts}
                    displayModal={displayUsContact} 
                    onHideModal={handleHideUsContact}/>
            </MenuContext.Provider>
        </div>
    );
};

export default Problem2;