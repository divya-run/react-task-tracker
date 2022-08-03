import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Pay Ayman 100dhs",
      day: "Aug 3rd at 4:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Call Mohammed Park Assist",
      day: "Aug 4th at 4:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Viadirect follow up ",
      day: "Aug 4th at 9am",
      reminder: true,
    },
  ]);

  //Del task

  const deleteTask = (id) => {
    console.log("delete", id);
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
