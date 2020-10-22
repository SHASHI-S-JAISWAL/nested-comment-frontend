import React from 'react';
import './App.css';
import dummy from './dummy';
import list from './list';
import Nestetedrender from './Nestetedrender';

const populateChildren = element => {
  let comments = list.filter(item => item.parentId === element._id);
  if (comments.length) {
    comments = comments.map(child => populateChildren(child))
    return { ...element, comments }
  }
  return element;
}

const getTreeStrucure = list => {
  const firstChildren = list.filter(x => !x.parentId);
  return firstChildren.map(child => populateChildren(child));
}

function App() {
  let data = getTreeStrucure(list);


  return (
    <div className="wrapper">
      <h1 >comment application</h1>
        <div className = "box" >
          <div className ="inputbox">
              <input type = "text" placeholder= "Write your comment here" maxLength ="100" 
              onClick = {()=>{}} /> 
              <button className="addcomment">Submit</button>
          </div>
        <Nestetedrender data={data}></Nestetedrender>
        </div>
    </div>
  );
}

export default App;
