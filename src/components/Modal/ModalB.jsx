import React from 'react';
import Modalmenu from './Modalmenu';

function ModalB(props) {
    const {displayModal,onHideModal} = props;
    const displayHiddenModal = displayModal ? "modal display-block" : "modal display-none"
    return (
        <div className={displayHiddenModal}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>Us Contact</h2>
                    <Modalmenu>
                        <button onClick={onHideModal}>Close</button>
                    </Modalmenu>
                </div>
                <div className='modal-body'></div>
                <div className='modal-display'>
                    <label>
                        <input type='checkbox'/> Only even
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ModalB;