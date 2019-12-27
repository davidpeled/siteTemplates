import React from 'react';
import './SocialMediaFooter.css'
import SocialMediaIcon from './SocialMediaIcon';

function SocialMediaFooter(){
    return(
        <div className='social-media-footer-container'>
            <div className='icons-container'>
                <SocialMediaIcon iconName='facebook' size='medium' position='first'/>
                <SocialMediaIcon iconName='spotify' size='medium'/>
                <SocialMediaIcon iconName='instagram' size='medium'/>
                <SocialMediaIcon iconName='youtube' size='medium'position='last'/>
            </div>
        </div>
    );
}

export default SocialMediaFooter;