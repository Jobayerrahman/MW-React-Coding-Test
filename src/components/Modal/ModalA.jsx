import React, { useState } from 'react';
import Modalmenu from './Modalmenu';

function ModalA(props) {
    const {displayModal,onHideModal,contactsData} = props;
    const displayHiddenModal = displayModal ? "modal display-block" : "modal display-none";
    
    const [isEven, setIsEven] = useState(false);
    
    const handleEven = () =>{
        setIsEven(!isEven);
    }

    return (
        <div className={displayHiddenModal}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>All Contact</h2>
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
                                contactsData.filter((contact) => contact.id % 2 === 0 )
                                    .map((contact, index)=>(
                                        <tr style={{cursor:'pointer'}} key={index}>
                                            <td>{contact.phone}</td>
                                            <td>{contact.country.name}</td>
                                        </tr>
                                    ))
                            ):(
                                contactsData.map((contact, index)=>(
                                    <tr style={{cursor:'pointer'}} key={index}>
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
        </div>
    );
}

export default ModalA;