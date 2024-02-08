import { useCallback, useEffect, useState } from "react";
import Task from "./task";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTaks = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/tasks");
    const tasks = await response.json();
    setTasks(tasks);
  }, []);

  useEffect(() => {
    fetchTaks();
  }, [fetchTaks]);

  console.log("tasks === ", tasks);
  return tasks.map(
    ({
      CreationDate,
      Description,
      DueDate,
      Priority,
      Status,
      Tags,
      TaskID,
      Title,
      UserID,
    }) => {
      return (
        <Task
          key={TaskID}
          Description={Description}
          TaskID={TaskID}
          Title={Title}
          fetchTaks={fetchTaks}
        />
      );
    }
  );
}

export default Tasks;
