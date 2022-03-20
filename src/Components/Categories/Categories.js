//Step 1 - Read - Create categories component, pay attention to the imports
import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import sampleCategories from '../../Utilities/sampleCategories';
import './Categories.css';
import SingleCategory from './SingleCategory';
import axios from 'axios';
// import - create
import {useAuth} from '../../contexts/AuthContext';
import CategoryCreate from './CategoryCreate';

export default function Categories() {
  //Step 2 - Read - Create the hook
  const [categories, setCategories] = useState(sampleCategories);
// step - create
const [showCreate, setShowCreate] = useState(false);  
  const {currentUser} = useAuth();


  //Step 4 - Inject data into the component
const getCategories = () => {
  axios.get('http://localhost:51933/api/categories/').then(response => {
    setCategories(response.data);
})
}

useEffect(() => {
  getCategories();
}, []);

  //Step 3 - Read - Create the UI
  return (
      <section className="categories">
          <article className="bg-info p-5">
            <h1 className="text-center">Category Information</h1>
                  </article>

            {currentUser.email === 'janet.lester1@outlook.com' &&
              <div className="bg-dark p-2 mb-3 text-center">
                {showCreate ?
                <>
                <button onClick={() => setShowCreate(false)} className="btn btn-warning">Cancel</button>
                <CategoryCreate getCategories = {getCategories} setShowCreate = {setShowCreate}/>
                </> :
                <button onClick={() => setShowCreate(true)} className="btn btn-info">Create New</button>
                }
              </div>
            }

            <Container>
              <table className="table table-striped table-bordered table-light mt-3 mb-3">
                <thead className="bg-info text-uppercase">
                  <tr>
                  <th>Name</th>
                  <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(x => 
                    <SingleCategory key={x.CategoryId} category={x} />
                  )}
                </tbody>
              </table>
            </Container>
      
      </section>
  );
}
