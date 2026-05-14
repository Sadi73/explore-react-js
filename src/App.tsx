import './App.css';
import ThemeToggle from './erp/shared/components/ThemeToggle';

function App() {

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-2xl font-bold underline'>Learn - Learn - Learn</p>
      <p className='text-xl text-danger'>This is an empty react project</p>

      <ThemeToggle />
    </div>
  )
}

export default App
