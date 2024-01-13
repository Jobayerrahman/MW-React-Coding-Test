import React from 'react';

function ModalC(props) {
    const {displayModal,onHideModal,contactDetail,countryDetail} = props;
    const displayHiddenModal = displayModal ? "modal display-block" : "modal display-none";
    return (
        <div className={displayHiddenModal}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>{contactDetail.phone}</h2>
                    <button className='btn modal-buttonC' onClick={onHideModal}>Close</button>
                </div>
                <div className='modal-body'>
                    <p><b>Contact Id: </b> {contactDetail.id}</p>
                    <p><b>Contact Number: </b> {contactDetail.phone}</p>
                    <p><b>Country Id: </b> {countryDetail.id}</p>
                    <p><b>Country Name: </b> {countryDetail.name}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalC;