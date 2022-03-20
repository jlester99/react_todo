//Step 1 - Read - Create categories component, pay attention to the imports
import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import sampleToDos from '../../Utilities/sampleToDos';
import './ToDos.css';
import SingleToDo from './SingleToDo';
import axios from 'axios';
// import - create
import {useAuth} from '../../contexts/AuthContext';
import ToDoCreate from './ToDoCreate';


export default function ToDoItems() {
  //Step 2 - Read - Create the hook
  const [toDoItems, setToDoItems] = useState(sampleToDos);

  // step - create
const [showCreate, setShowCreate] = useState(false);  
const {currentUser} = useAuth();

  //Step 4 - Inject data into the component
const getToDoItems = () => {
  axios.get('http://localhost:51933/api/todo/').then(response => {
    setToDoItems(response.data);
})
}

useEffect(() => {
  getToDoItems();
}, []);

  //Step 3 - Read - Create the UI
  return (
      <section className="toDos">
          <article className="bg-info p-5">
            <h1 className="text-center">Remaining Tasks for Completing Track</h1>
                  </article>
                  {currentUser.email === 'janet.lester1@outlook.com' &&
              <div className="bg-dark p-2 mb-3 text-center">
                {showCreate ?
                <>
                <button onClick={() => setShowCreate(false)} className="btn btn-warning">Cancel</button>
                <ToDoCreate getToDoItems = {getToDoItems} setShowCreate = {setShowCreate}/>
                </> :
                <button onClick={() => setShowCreate(true)} className="btn btn-info">Create New</button>
                }
              </div>
            }

            <Container>
              <article className="toDoTiles row justify-content-center">
                {toDoItems.map(x => 
                <SingleToDo key={x.TodoId} toDoItem={x} />
                  )}  
              </article>
              {/* <table className="table table-striped table-bordered table-light mt-3 mb-3">
                <thead className="bg-info text-uppercase">
                  <tr>
                  <th>Task</th>
                  <th>Type</th>
                  <th>Date Due</th>
                  <th>Complete</th>
                  </tr>
                </thead>
                <tbody>
                  {toDoItems.map(x => 
                    <SingleToDo key={x.TodoId} toDoItem={x} />
                  )}
                </tbody>
              </table> */}
            </Container>
      
      </section>
  );
}
