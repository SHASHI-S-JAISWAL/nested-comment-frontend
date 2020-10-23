import React,{useState, useEffect} from 'react';
import './App.css';
import dummy from './dummy';
import Nestetedrender from './Nestetedrender';
import {getall, add,update} from './Api';

const populateChildren = (list, element) => {
  let comments = list.filter(item => item.parent === element._id);
  if (comments.length) {
    comments = comments.map(child => populateChildren(list, child))
    return { ...element, comments }
  }
  return element;
}

const getTreeStrucure = list => {
  const firstChildren = list.filter(x => !x.parent);
  return firstChildren.map(child => populateChildren(list, child));
}

function App() {
  const [tree, setTree] = useState([])
  const[user,setUser] = useState('shashi');
  let data = getTreeStrucure(tree);

  const getData = async () => {
    console.log('here')
    const response = await getall();
    const { data } = response;
    setTree(data)
  }
  

  useEffect(() => {
    getData();
  },[tree.length])

  const addChild = async (child) => {
    const response = await add(child);
    const { data } = response;
    setTree(data)
  }

  const addComment =( ) =>{
    let text = document.getElementById('newcom').value;
    console.log(text);
    addChild({
      text : text,
      author: user,
    })
    document.getElementById('newcom').value ='';
  }

  return (
    <div className="wrapper">
      <h1 >comment application</h1>
        <div className = "box" >
          <div className ="inputbox">
              <input type = "text" id="newcom" placeholder= "Write your comment here" maxLength ="100" 
               /> 
              <button className="addcomment" onClick = {()=>{addComment()}}>Submit</button>
          </div>
        <Nestetedrender 
          data={data} 
          updateList={update} 
          addChild={async (params) => {
            await add(params);
            getData();
          }}
          user = {user} 
        />
        </div>
    </div>
  );
}

export default App;
