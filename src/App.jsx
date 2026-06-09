import menu from '../src/assets/images/menu.png';
import profile from '../src/assets/images/profile.png';
// import checked from '../src/assets/images/checked.png';
import checklist from '../src/assets/images/checklist.png';
// import circle from '../src/assets/images/circle';
// import edit from '../src/assets/images/edit.png';
// import square from '../src/assets/images/square.png';
// import trash from '../src/assets/images/trash.png';

function App() {
  
  return (
    <div className="w-full h-auto flex">
        {/* Sidebar */}

        <div className='bg-pink-300 h-full w-[25%]'>
            <div className='bg-gray-400 w-full h-8 '>
              <img className='w-8 h-8 ml-4' src={menu} alt="menu" />
            </div>
            <div className='bg-blue-300 w-full h-30 place-items-center '>
              <img className='w-12 h-12 mt-4' src={profile} alt="profile" />
              <p className='text-bold mt-2'>M Kunthea</p>
              <p className='text-sm'>abc@gmail.com</p>
            </div>
            <div className='border-b border-gray-800 '></div>
            <div className='bg-gray-400 w-full h-12 flex items-center justify-center gap-6 pl-4'>
              <img className='w-8 h-8 ' src={checklist} alt="checklist" />
              <p>To-do list</p>
            </div>
        </div>

        {/* Content page */}
        {/* <div className='bg-gray-600 '>
          <div className='bg-pink-400 w-full h-20'>To Do List</div>
          <div className=''>
            <button><input type="text" />Type your task here...</button>
          </div>
          <div></div>
        </div> */}
    </div>
  )
}

export default App
