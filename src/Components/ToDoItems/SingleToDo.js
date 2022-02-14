import React from 'react';

export default function SingleToDo(props) {
  return (
      <tr>
          <td>{props.toDoItem.Task}</td>
          <td>{props.toDoItem.Category.Name}</td>
          <td>{props.toDoItem.DueDate}</td>
          <td>{props.toDoItem.Done}</td>
      </tr>
  );
}
