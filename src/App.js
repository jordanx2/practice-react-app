import './App.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (data) => toast('just clicked: ' + data);

function Header(){
  return (
    <div className='App-Header'>
      <ImageTextElement elementName='Search' imgLocation='/imgs/search.png'/>
      <ImageTextElement elementName='Diary' imgLocation='/imgs/diary.png'/>
      <ImageTextElement elementName='Back Office' imgLocation='/imgs/office.png'/>
      <ImageTextElement elementName='Configuration' imgLocation='/imgs/config.png'/>
      <ImageTextElement elementName='Till' imgLocation='/imgs/till.png'/>
    </div>
  );
}

function ImageTextElement({elementName, imgLocation}){
  return (
    <div className='image-text-container' onClick={() => notify(elementName)}>
      <img src={imgLocation} alt={elementName + 'function'}></img>
      <p> {elementName} </p>
    </div>
  );
}

function HomeItemsContainer({containerName, containerItems}){
  return (
    <div className='home-row-outer'>
      <p className='home-row-container-name'>{containerName}</p>
      <div className='home-row-inner'>
        {containerItems.map(item => (
          <ImageTextElement className='home-row-item' elementName={item} imgLocation='/imgs/testing.png'/>
        ))}
      </div>
    </div>
  );
}

function HomeRowContainer({containers}){
  return (
    <div className='home-row-container'>
      { Object.entries(containers).map(([name, items]) => (
        <HomeItemsContainer key={name} containerName={name} containerItems={items}/>
      ))}
      
    </div>
  );
}

function App() {
  const row1 = {
    'Patent Management' : ['Book Appointment', 'Find Patent', 'Web Patent Approval'],
    'Examinations': ['Clinical Visit', 'Images and Documents', 'Referrals'],
    'Sales': ['New Sale', 'Sales Worklists', 'Outstanding Payments', 'Reports'],
    'Orders': ['Orders List', 'Orders Pickup']
  };

  const row2 = {
    'End of Day' : ['Close Shift', 'Till Balancing', 'Reports', 'Outstanding Payments', 'Business Performance'],
    'Product Management': ['Product Search', 'Product Update', 'Price Update'],
    'Campaigns': ['Recall Maintainence', 'Templates', 'Programs'],
    'NHS Claims': ['Claims List']
  };

  return (
    <div className="App">
      <Header/>
      <HomeRowContainer containers={row1} />
      <HomeRowContainer containers={row2} />

      <ToastContainer />
    </div>
  );
}

export default App;
