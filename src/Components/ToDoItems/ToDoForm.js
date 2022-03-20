import React, {useState, useEffect} from 'react';
import {Formik, Form, Field} from 'formik';
import {toDoSchema} from '../../Utilities/validationSchema';
import axios from 'axios';


export default function ToDoForm(props) {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        axios.get('http://localhost:51933/api/categories/').then(response => {
          setCategories(response.data);
      })
    }

    const handleSubmit = (values) => {
        console.log(values);
        //before we write the rest of this function, test to make sure it logs the values in the console window
        if(!props.toDoItem) {//doesn't exist - run create code
            //create code
            console.log("create code");
            const toDoItemToCreate = {
                Task: values.Task,
                DueDate: values.DueDate,
                CategoryId: values.CategoryId
            }
            console.log(toDoItemToCreate);
  
            axios.post("http://localhost:51933/api/todo/", toDoItemToCreate).then(() => {
                props.getToDoItems();
                props.setShowCreate(false)
      })
      }
      else {
          //edit code
          console.log("Edit To Dos")
      }
    }
//useEffect is written so the component will gather the categories as this form is loaded to the UI
useEffect(() => {
    getCategories();
  }, []);

  return (
        <Formik
            initialValues = {{
                Task: "",
                DueDate: "",
                CategoryId: "0"
            }}
            validationSchema={toDoSchema}
            onSubmit={(values) => handleSubmit(values)}>
                {({errors, touched}) => (
                    <div className="container">
                        <Form id="toDoForm" className="row text-center m-auto">
                            <div className="form-group m-1 p-1">
                                <Field name="Task" className="form-control" placeholder = "Task Name" />
                                {errors.Task && touched.Task ?
                                (
                                    <div className="text-danger">{errors.Task}</div>
                                ) : null}
                            </div>
                            <div className="form-group m-1 p-1">
                                <Field name="DueDate" className="form-control" placeholder = "Date Due" />
                                {errors.DueDate && touched.DueDate ?
                                (
                                    <div className="text-danger">{errors.DueDate}</div>
                                ) : null}
                            </div>
            <div className="form-group m-1 p-1">
              <Field as="select" name="CategoryId" className="form-control">
                <option value ="0" disabled>[--Please Choose--]</option>
                {/* Below we map the categories hook to an option element for each category.  Because we map these, we need to add a key attribute that is unique (ID) and a value which will capture what the user selects from the list */}
                {categories.map(cat =>
                  <option key={cat.CategoryId} value={cat.CategoryId}>{cat.Name}</option>)}
                </Field>
              </div>    

                            <div className="form-group m-3">
                                <button className="btn btn-success" type="submit">Submit New Task</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
  )
}
