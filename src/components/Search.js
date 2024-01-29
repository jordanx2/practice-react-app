import '../css/ToggleSwitch.css';
import '../css/Search.css';
import React, { useState } from 'react';

function Search(){
    return (
        <RenderSearch />
    );
}

function RenderSearch(){
    return (
        <div>
            <p>Patient Search</p>
            <hr/>
            <div className='search-box'>
                <input className='search-field' spellCheck='false' type='text'></input>
                <div className='custom-options'>
                    <ToggleSwitch/>
                    <button className='add-patient-btn'>Add Patient</button>                    
                </div>
            </div>
        </div>
    );
}

function ToggleSwitch() {
    const [isToggled, setIsToggled] = useState(false);
  
    const toggle = () => setIsToggled(!isToggled);
  
    return (
        <div className='toggle-container'>
        <label style={{margin: '10px'}}>Show Inactive</label>
        <label className="toggle-switch">
            <input
            type="checkbox"
            checked={isToggled}
            onChange={toggle}
            />
            <span className="slider round"></span>
        </label>
      </div>
    );
  }

export default Search;