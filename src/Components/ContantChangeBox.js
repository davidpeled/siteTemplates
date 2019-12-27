import React from 'react';
import './ContantChangeBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronLeft);
library.add(faChevronRight);

function ContantChangeBox(props){
    return(
        <div className='change-box-container'>
            <div className='arrow-left'><FontAwesomeIcon icon={faChevronLeft} size='4x'/></div>
            <div className='change-box-contant'></div>
            <div className='arrow-right'><FontAwesomeIcon icon={faChevronRight} size='4x'/></div>
        </div>
    );
}

export default ContantChangeBox;