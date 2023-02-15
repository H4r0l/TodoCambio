import React from "react";
import Todo from "./ToDo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((item, index) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoItemProp={(e) => removeTodoListProp(item._id)}
      editTodoItemProp={(updatedItem) =>
        editTodoListProp(item._id, updatedItem)
      }
      key={index}
    />
  ));
  return <div className="ui grid center aligned">{renderedList}</div>;
};

export default List;
