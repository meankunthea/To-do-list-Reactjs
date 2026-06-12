import { useState, useEffect } from "react";

import menu from "../src/assets/images/menu.png";
import profile from "../src/assets/images/profile.png";
import checklist from "../src/assets/images/checklist.png";
import trash from "../src/assets/images/trash.png";

const STORAGE_KEY = "tasks";

function App() {
  const [task, setTask] = useState("");

  // Data Storage store on localStorage

  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem(STORAGE_KEY);
  console.log("RAW localStorage:", savedTasks);
  if (!savedTasks) {
    console.log("No localStorage found → using default tasks");

    return [
      { id: 1, text: "Learn React", status: "todo", description: "" },
      { id: 2, text: "Push to Github", status: "complete", description: "" },
    ];
  }

  try {
    const parsed = JSON.parse(savedTasks);
    console.log("PARSED tasks:", parsed);
    return parsed;
  } catch (err) {
    console.log("JSON ERROR:", err);
    return [];
  }
});

  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);
  const [editDescription, setEditDescription] = useState("");

  // save to localStorage
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

  const handleToggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        let newStatus = "todo";

        if (task.status === "todo") {
          newStatus = "in-progress";
        } else if (task.status === "in-progress") {
          newStatus = "complete";
        } else {
          newStatus = "todo";
        }

        return {
          ...task,
          status: newStatus,
        };
      })
    );
  };
   // search tasks
  const [search, setSearch] = useState("");
  const filteredTasks = tasks.filter((task) => {
  const matchFilter =
    filter === "all" ? true : task.status === filter;

  const matchSearch =
    task.text.toLowerCase().includes(search.toLowerCase());

  return matchFilter && matchSearch;
  });


  // to-do-list button popup
  // const [showTodoOptions, setShowTodoOptions] = useState(false);
  const [mode, setMode] = useState("personal"); 
  const [showTodoMenu, setShowTodoMenu] = useState(false);

  const handleAddTask = (category) => {
  if (!task.trim()) return;

  setTasks((prev) => [
    ...prev,
    {
      id: Date.now(),
      text: task,
      status: "todo",
      category,
      description: "",
    },
  ]);

  setTask("");
  setShowAddMenu(false);
};

  // show popup on add button
  const [showAddMenu, setShowAddMenu] = useState(false);
  const addTaskWithCategory = (category) => {
  if (!task.trim()) return;

  setTasks((prev) => [
    ...prev,
    {
      id: Date.now(),
      text: task,
      status: "todo",
      category,
      description: "",
    },
  ]);
  setTask("");
  setShowAddMenu(false);
};

// sidebar categories

// const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-white min-h-screen w-[260px] shadow-lg border-r flex flex-col">

        <div className="p-4 flex items-center justify-between">
          <img className="w-8 h-8 mt-4 cursor-pointer" src={menu} alt="menu" />
          {/* Search tasks  */}

        <div className="px-4 mt-4">
          <div className="relative">
            
            {/* search icon */}
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
              🔍
            </span>

            {/* input */}
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2 border rounded-lg text-sm outline-none focus:border-black"
            />

            {/* clear button */}
            {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-1 top-1 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            )}
          </div>
        </div>
        </div>

        <div className="flex flex-col items-center mt-6 px-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
            <img className="w-10 h-10" src={profile} alt="profile" />
          </div>

          <p className="font-semibold mt-3">Kunthea</p>
          <p className="text-xs text-gray-500">kunthea@gmail.com</p>
        </div>

        <div className="my-6 border-t border-gray-100 mx-4"></div>

        <div className="px-3 space-y-2">

  {/* To-do List main button */}
  <div
    onClick={() => setShowTodoMenu((prev) => !prev)}
    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 text-black cursor-pointer hover:bg-gray-200 transition"
  >
    <img className="w-6 h-6" src={checklist} alt="checklist" />
    <span className="font-medium">To-do List</span>
  </div>

  {/* Personal button */}
  {showTodoMenu && (
    <div
      onClick={() => setMode("personal")}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ml-4 ${
        mode === "personal"
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200 text-black"
      }`}
    >
      <span className="font-medium">Personal</span>
    </div>
  )}

  {/* Group button */}
  {showTodoMenu && (
    <div
      onClick={() => setMode("group")}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ml-4 ${
        mode === "group"
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200 text-black"
      }`}
    >
      <span className="font-medium">Group</span>
    </div>
  )}

</div>

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

          <div className="flex items-center gap-3 justify-center mt-6 relative">
  
            {/* INPUT */}
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a new task..."
              className="w-80 px-4 py-2 border border-gray-300 rounded-lg 
                        shadow-sm focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:border-blue-500 
                        transition-all"
            />

            {/* ADD BUTTON */}
            <button
              onClick={() => setShowAddMenu((prev) => !prev)}
              className="px-5 py-2 bg-blue-500 text-white rounded-lg 
                        shadow-md hover:bg-blue-700 hover:shadow-lg 
                        active:scale-95 transition-all duration-200 
                        flex items-center gap-2 font-medium"
            >
              <span className="text-lg"></span>
              Add +
            </button>

            {/* POPUP MENU */}
            {showAddMenu && (
              <div className="absolute top-14 right-0 w-44 bg-white border 
                              shadow-lg rounded-xl z-50 overflow-hidden">

                <div
                  onClick={() => addTaskWithCategory("personal")}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer 
                            transition"
                >
                  Personal
                </div>

                <div
                  onClick={() => addTaskWithCategory("group")}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer 
                            transition"
                >
                  Group
                </div>

              </div>
            )}
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
                    onChange={() => handleToggleStatus(item.id)}
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