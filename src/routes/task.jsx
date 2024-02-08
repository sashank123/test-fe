import React from "react";

function Task({
  CreationDate,
  Description,
  DueDate,
  Priority,
  Status,
  Tags,
  TaskID,
  Title,
  UserID,
  fetchTaks,
}) {
  return (
    <div>
      <div>Title: {Title}</div>
      <div>Description: {Description}</div>
      <button
        onClick={() => {
          console.log(TaskID);
          fetch(process.env.REACT_APP_BACKEND_URL + "/tasks/" + TaskID, {
            method: "DELETE",
          }).then(() => {
            fetchTaks();
          });
        }}>
        Delete
      </button>
    </div>
  );
}

export default React.memo(Task);
