import './App.css';
import data from './data'
import List from './List';
import {useState} from 'react'

function App() {
const [people,setPeople]=useState(data)

  return (
    <main>
      <div className="container">
        <div className="card">
          <h3>{people.length} Birthdays Today</h3>
          <List className='analist' people={people}></List>
          <button className='btn' onClick={()=>{setPeople([])}}>Clear All</button>
        </div>
      </div>
      
    </main>
  );
}

export default App;
