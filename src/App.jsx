
import { Suspense } from 'react'
import './App.css'
import Active from './component/Active/Active'
import AIdata from './component/AIdata/AIdata'
import Digital from './component/Digital/Digital'
import Banner from './component/Navbar/Banner/Banner'
import Navbar from './component/Navbar/Navbar'


const fetchAIdata = async () => {
  const res = await fetch("/data.json");
  return res.json();
}


function App() {
  
  const AIdataPromice = fetchAIdata();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Active></Active>
      {/* <Digital></Digital> */}
      
       <Suspense fallback={<div className="flex justify-center">
            <span className="loading loading-spinner text-error"></span>
      </div>}>
        <AIdata AIdataPromice= {AIdataPromice}></AIdata>
      </Suspense>
    </>
  )
}

export default App
