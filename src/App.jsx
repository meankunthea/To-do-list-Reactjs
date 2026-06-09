
import notification from './assets/images/notification.png';
import today from './assets/images/today.png';
// import schedule from './assets/images/schedule.png';
// import all_task from './assets/images/all_task.png';
// import overtime from './assets/images/overtime.png';
import circle from './assets/images/circle.png';
import dot from './assets/images/dot.png';
// import dots from './assets/images/dots.png';



function App() {
  
  return (
    <div className="w-full h-auto bg-gray-400 justify-center">

        {/* Navbar */}
        <div className="w-full bg-pink-200 h-16 px-6 flex items-center justify-between">         
          <div className="flex flex-col">
            <p className="text-xl font-semibold text-gray-800">
              Hello Jack,
            </p>
            <p className="text-sm text-gray-500">
              You have work today
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <img className="w-8 h-8 cursor-pointer"src={notification} alt="notification"/>

            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full text-white text-[10px] flex items-center justify-center">
              3
            </span>
          </div>
        </div>

      {/* Content card */}
      <div className="bg-green-200 w-full h-[500px] grid grid-cols-2 grid-rows-2 gap-4 p-4">

        <div className="bg-purple-200 rounded-xl flex items-center justify-center overflow-hidden">
          <img className="w-80 h-80" src={today} />
        </div>

        <div className="bg-yellow-200 rounded-xl flex items-center justify-center overflow-hidden">
          <img className="w-20 h-20" src={today} />
        </div>

        <div className="bg-blue-200 rounded-xl flex items-center justify-center overflow-hidden">
          <img className="w-12 h-12" src={today} />
        </div>

        <div className="bg-pink-200 rounded-xl flex items-center justify-center overflow-hidden">
          <img className="w-10 h-10" src={today} />
        </div>

      </div>

      {/* Today's task */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Today's Task</h2>
      
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div className=''>
              <img className='w-2 h-2' src={circle} alt="circle" />
              <p className="font-medium">Project retrospective</p>
              <p className="text-sm text-gray-500">
                Today 
                <img className='w-8 h-8' src={dot} alt="dot" />
                4:50 PM
              </p>
            </div>
            <button>•••</button>
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Evening team meeting</p>
              <p className="text-sm text-gray-500">
                Today • 4:50 PM
              </p>
            </div>
            <button>•••</button>
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Create monthly deck</p>
              <p className="text-sm text-gray-500">
                Today
              </p>
            </div>
            <button>•••</button>
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Create monthly deck</p>
              <p className="text-sm text-gray-500">
                Today
              </p>
            </div>
            <button>•••</button>
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Create monthly deck</p>
              <p className="text-sm text-gray-500">
                Today
              </p>
            </div>
            <button>•••</button>
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Create monthly deck</p>
              <p className="text-sm text-gray-500">
                Today
              </p>
            </div>
            <button>•••</button>
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Create monthly deck</p>
              <p className="text-sm text-gray-500">
                Today
              </p>
            </div>
            <button>•••</button>
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Create monthly deck</p>
              <p className="text-sm text-gray-500">
                Today
              </p>
            </div>
            <button>•••</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App
