import { useState, useEffect } from "react";

import menu from "../src/assets/images/menu.png";
import profile from "../src/assets/images/profile.png";
import checklist from "../src/assets/images/checklist.png";
import trash from "../src/assets/images/trash.png";

const STORAGE_KEY = "tasks";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, text: "Learn React", status: "todo", description: "" },
          { id: 2, text: "Push to Github", status: "complete", description: "" },
        ];
  });

  const [filter, setFilter] = useState("all");

  const [selectedTask, setSelectedTask] = useState(null);
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: task,
        status: "todo",
        description: "",
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "complete" ? "todo" : "complete",
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-white min-h-screen w-[260px] shadow-lg border-r flex flex-col">

  {/* Top Menu */}
  <div className="p-4 flex items-center justify-between">
    <img className="w-8 h-8 cursor-pointer" src={menu} alt="menu" />
  </div>

  {/* Profile */}
  <div className="flex flex-col items-center mt-6 px-4">
    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
      <img className="w-10 h-10" src={profile} alt="profile" />
    </div>

    <p className="font-semibold mt-3">Kunthea</p>
    <p className="text-xs text-gray-500">kunthea@gmail.com</p>
  </div>
  <div className="my-6 border-t border-gray-100 mx-4"></div>
  <div className="px-3 space-y-2">

    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 text-black cursor-pointer hover:bg-gray-200 transition">
      <img className="w-6 h-6" src={checklist} alt="checklist" />
      <span className="font-medium">To-do List</span>
    </div>
  </div>
  {/* Footer */}
  <div className="mt-auto p-4 text-xs text-gray-400">
    Task Member 
  </div>

</div>
      {/* Content */}
      <div className="bg-gray-100 min-h-screen flex-1 flex justify-center">
        <div className="w-[700px] pt-12">
          <h1 className="text-4xl font-bold text-center mb-10">
            To-Do List
          </h1>

          {/* input */}
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-[400px] h-12 px-4 rounded-lg border"
              placeholder="Type your task here.."
            />

            <button onClick={addTask} className="bg-black text-white px-8 rounded-lg">
              Add
            </button>
          </div>

          {/* filter */}
          <div className="flex gap-2 text-sm mt-6">
            <span onClick={() => setFilter("all")}>All |</span>
            <span onClick={() => setFilter("todo")} className="text-red-500">
              To Do |
            </span>
            <span onClick={() => setFilter("in-progress")} className="text-blue-500">
              In Progress |
            </span>
            <span onClick={() => setFilter("complete")} className="text-green-500">
              Complete
            </span>
          </div>

          {/* tasks */}
          <div className="space-y-4 pt-4">
            {filteredTasks.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedTask(item);
                  setEditDescription(item.description || "");
                }}
                className={`bg-white rounded-lg shadow-sm h-16 flex items-center justify-between px-4 border-l-4 ${
                  item.status === "todo"
                    ? "border-red-500"
                    : item.status === "complete"
                    ? "border-green-500"
                    : "border-blue-500"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={item.status === "complete"}
                    onChange={() => handleToggleComplete(item.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <p>{item.text}</p>
                </div>

                <div className="flex gap-4">
                 <img
                  src={trash}
                  alt="delete"
                  className="w-5 h-5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(item.id);
                  }}
/>
                </div>
              </div>
            ))}
          </div>

          {/* EDIT MODAL */}
          {selectedTask && (
            <div className="fixed inset-0 bg-gray-100 flex flex-col p-10">
              <div className="mb-6">
                <button
                  onClick={() => setSelectedTask(null)}
                  className="text-sm bg-black text-white px-4 py-2 rounded"
                >
                  Back
                </button>
              </div>

              <h1 className="text-3xl font-bold mb-6">
                {selectedTask.text}
              </h1>

              <textarea
                className="w-full h-[300px] p-4 border rounded-lg outline-none"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />

              <button
                className="mt-6 bg-black text-white px-6 py-2 rounded w-fit"
                onClick={() => {
                  setTasks((prev) =>
                    prev.map((t) =>
                      t.id === selectedTask.id
                        ? { ...t, description: editDescription }
                        : t
                    )
                  );

                  setSelectedTask(null);
                }}
              >
                Save Change
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;