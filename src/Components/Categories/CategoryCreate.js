import React from 'react'
import CategoryForm from './CategoryForm';

export default function CategoryCreate(props) {
  return (
    <div className="createCategory m-2 text-center">
      <CategoryForm 
        getCategories = {props.getCategories} 
        setShowCreate = {props.setShowCreate} />
    </div>
  )
}
