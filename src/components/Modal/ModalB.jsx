import React, { useState } from 'react';
import Modalmenu from './Modalmenu';
import ModalC from './ModalC';

function ModalB(props) {
    const {displayModal,onHideModal,contactsData} = props;
    const displayHiddenModal = displayModal ? "modal display-block" : "modal display-none";

    const [isEven, setIsEven] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayModalc, setDisplayModalC] = useState(false);
    const [contactDetails, setContactDetails] = useState({});
    const [countryDetails, setCountryDetails] = useState({});


    const filterContactsData = contactsData.filter(contactData =>{
        return contactData.phone.toLowerCase().includes(searchQuery.toLowerCase());
    })
    
    const handleEven = () =>{
        setIsEven(!isEven);
    }

    const handleModalC =(contactID)=>{
        setDisplayModalC(true)
        const contact =  filterContactsData.find((contact) => contact.id  === contactID)
        setContactDetails(contact);
        setCountryDetails(contact.country);
    }

    const handleHideModalC = () =>{
        setDisplayModalC(false)
    }

    return (
        <div className={displayHiddenModal}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>Us Contact</h2>
                    <input className='searchInput' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='Search here ...' />
                    <Modalmenu>
                        <button className='btn modal-buttonC' onClick={onHideModal}>Close</button>
                    </Modalmenu>
                </div>
                <div className='modal-body'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Country Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isEven ? (
                                filterContactsData.filter((contact) => contact.country.name  === 'United States')
                                    .filter((contact) => contact.id % 2 === 0 )
                                        .map((contact, index)=>(
                                            <tr style={{cursor:'pointer'}} key={index} onClick={()=> handleModalC(contact.id)}>
                                                <td>{contact.phone}</td>
                                                <td>{contact.country.name}</td>
                                            </tr>
                                        ))
                            ):(
                                filterContactsData.filter((contact) => contact.country.name  === 'United States')
                                    .map((contact, index)=>(
                                        <tr style={{cursor:'pointer'}} key={index} onClick={()=> handleModalC(contact.id)}>
                                            <td>{contact.phone}</td>
                                            <td>{contact.country.name}</td>
                                        </tr>
                                    ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='modal-footer'>
                    <label>
                        <input type='checkbox' name="evenCheckBox" checked={isEven} onChange={handleEven}/> Only even
                    </label>
                </div>
            </div>
            <ModalC
                displayModal ={displayModalc}
                onHideModal  ={handleHideModalC}
                contactDetail={contactDetails}
                countryDetail={countryDetails}/>
        </div>
    )
}

export default ModalB;