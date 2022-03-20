import React from 'react'
import ToDoForm from './ToDoForm';

export default function ToDoCreate(props) {
  return (
    <div className="createToDoItems m-2 text-center">
      <ToDoForm 
        getToDoItems = {props.getToDoItems} 
        setShowCreate = {props.setShowCreate} />
    </div>
  )
}
