import React from 'react';

export default function SingleToDo(props) {
  return (
      // <tr>
      //     <td>{props.toDoItem.Task}</td>
      //     <td>{props.toDoItem.Category.Name}</td>
      //     <td>{props.toDoItem.DueDate}</td>
      //     <td>{props.toDoItem.Done}</td>
      // </tr>

      <div className='singleToDo col-md-5 m-4'>
          
          {props.toDoItem.Category.Name !== null ?
            <h4> {props.toDoItem.Category.Name}</h4> :  
            <h4>No Category Available</h4>}
            
        <strong className="font-weight-bold"> Date Due: {props.toDoItem.DueDate}</strong>
        
         <p> {props.toDoItem.Task}</p>

        
      </div>
  );
}
