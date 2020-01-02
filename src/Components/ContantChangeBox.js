import React from 'react';
import './ContantChangeBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronLeft);
library.add(faChevronRight);

class ContantChangeBox extends React.Component{
    constructor(props){
        super(props);
        this.state.itemIndex = 0;
    }

    componentDidMount(){
        
    }

    render(props){
        return(
            <div className='change-box-container'>
                <div className='arrow-left' onClick={LeftArrowClick}><FontAwesomeIcon icon={faChevronLeft} size='4x'/></div>
                <div className='change-box-contant'>
                </div>
                <div className='arrow-right' onClick={RightArrowClick}><FontAwesomeIcon icon={faChevronRight} size='4x'/></div>
            </div>
        );
    }
}

function RightArrowClick(){
    console.log('move right');
}

function LeftArrowClick(){
    console.log('move leeft');
}

export default ContantChangeBox;