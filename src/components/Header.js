import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ImageTextElement} from './Home';


function Header() {
    const navigate = useNavigate();
    return (
        <div className='App-Header'>
            <ImageTextElement onClick={() => navigate('/')} elementName='Home' imgLocation='/imgs/home.png'/>
            <ImageTextElement onClick={() => navigate('search-general')} elementName='Search' imgLocation='/imgs/search.png'/>
            <ImageTextElement onClick={() => navigate('diary')} elementName='Diary' imgLocation='/imgs/diary.png'/>
            <ImageTextElement onClick={() => navigate('back-office')} elementName='Back Office' imgLocation='/imgs/office.png'/>
            <ImageTextElement onClick={() => navigate('config')} elementName='Configuration' imgLocation='/imgs/config.png'/>
            <ImageTextElement  onClick={() => navigate('till')} elementName='Till' imgLocation='/imgs/till.png'/>
        
        </div>
    );
}


export default Header;