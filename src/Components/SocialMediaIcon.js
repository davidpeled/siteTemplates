import React from 'react';
import './SocialMediaIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faFacebook,
    faInstagram,
    faYoutube,
    faSpotify
} from '@fortawesome/free-brands-svg-icons';



function SocialMediaIcon(props){
    let icon;
    let iconSize = '3x';
    let link = '#';
    let cssClass = 'social-media-icon';
    if(props.iconName !== undefined){
        if(props.iconName === 'facebook'){
            icon = faFacebook;
        }
        if(props.iconName === 'instagram'){
            icon = faInstagram;
        }
        if(props.iconName === 'youtube'){
            icon = faYoutube;
        }
        if(props.iconName === 'spotify'){
            icon = faSpotify;
        }
        library.add(icon);
    }
    else{
        console.log('Scocial-Media-Icon did was not able to render');
        return (<div className='broken-social-media-icon'></div>);
    }
    if(props.size !== undefined){
        if(props.size === 'small'){
            iconSize='2x';
        }
        if(props.size === 'big'){
            iconSize='4x';
        }
    }
    if(props.position !== undefined){
        if(props.position === 'first'){
            cssClass = 'social-media-icon-first';
        }
        if(props.position === 'last'){
            cssClass = 'social-media-icon-last';

        }
    }
    return(
        <div className={cssClass}>
            <a href={link}>
                <FontAwesomeIcon icon={icon} size={iconSize}/>
            </a>
        </div>
    );
}

export default SocialMediaIcon;