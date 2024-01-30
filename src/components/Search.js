import '../css/ToggleSwitch.css';
import '../css/Search.css';
import patientsData from './SamplePatients';
import React, { useState, useEffect } from 'react';

const tableHeaders = ['Name', 'Date of birth (age)', 'Address', 
'Contact Number', 'Patient ID', 'Social Security Number'];

function Search(){
    return (
        <RenderSearch />
    );
}

function RenderSearch(){    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const delayBounce = setTimeout(() => {
            setSearchResult(PerformSearch(searchTerm));
        }, 900);
        return () => clearTimeout(delayBounce);
    }, [searchTerm]);

    return (
        <div>
            <p>Patient Search</p>
            <hr/>
            <div className='search-box'>
                <input className='search-field' spellCheck='false' type='text' 
                onChange={(event) => setSearchTerm(event.target.value)}></input>
                <div className='custom-options'>
                    <ToggleSwitch/>
                    <button className='add-patient-btn'>Add Patient</button>                    
                </div>
            </div>
            <hr/>

            {/* <RenderTable data={patientsData}/> */}
        </div>
    );
}

function PerformSearch(search){
    const results = patientsData.filter((element) => element["Name"].includes(search));
    console.log(results);
    return results;

}

function RenderTable({data}){
    return (
        <div style={{overflow:'auto', height: '300px'}}>
            <table className='search-table'>
                {tableHeaders.map(header => (<th>{header}</th>))}
                {data.map((data, key) => 
                {return (
                    <tr key={key}>
                        <td>{data.Name}</td>
                        <td>{data['Date of birth (age)']}</td>
                        <td>{data.Address}</td>
                        <td>{data['Contact Number']}</td>
                        <td>{data['Patient ID']}</td>
                        <td>{data['Social Security Number']}</td>
                    </tr>
                )})}
            </table>
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