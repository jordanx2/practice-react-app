import '../css/ToggleSwitch.css';
import '../css/Search.css';
import patientsData from './SamplePatients';
import Highlighter from 'react-highlight-words';
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
        }, 100);
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

            <RenderTable data={searchResult} searchTerm={searchTerm}/>
        </div>
    );
}

function PerformSearch(search){
    const results = patientsData.filter((element) => element["Name"].toLowerCase().includes(search.toLowerCase()));
    return results;

}

function RenderTable({ data, searchTerm }) {
    return (
      <div style={{ overflow: 'auto', height: '300px' }}>
        <table className='search-table'>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>
                  <Highlighter
                    highlightClassName="search-highlight"
                    searchWords={[searchTerm]}
                    autoEscape={true}
                    textToHighlight={item.Name}
                  />
                </td>
                <td>{item['Date of birth (age)']}</td>
                <td>{item.Address}</td>
                <td>{item['Contact Number']}</td>
                <td>{item['Patient ID']}</td>
                <td>{item['Social Security Number']}</td>
              </tr>
            ))}
          </tbody>
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