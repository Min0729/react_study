import React from "react";

function TodoItem(props){
    return(
        <div className="todo-item">
            {props.item}
            <button onClick={()=>{
                props.onDelete();
            }}>삭제</button>
        </div>
    );
}

export default TodoItem;