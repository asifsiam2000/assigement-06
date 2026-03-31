
import { Suspense, useState } from 'react'
import './App.css'
import Active from './component/Active/Active'
import AIdata from './component/AIdata/AIdata'
import Digital from './component/Digital/Digital'
import Banner from './component/Navbar/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Getstart from './component/Getstart/Getstart'
import Sampletransport from './component/Sampletransport/Sampletransport'
import ReadyToTrans from './component/ReadyToTrans/ReadyToTrans'
import Footer from './component/Footer/Footer'


const fetchAIdata = async () => {

  const res = await fetch("/data.json");
  return res.json();
}


function App() {
  const [count, setCount] = useState(0);
  const AIdataPromice = fetchAIdata();
  
  return (
    <>
      <Navbar count={count} ></Navbar>
      <Banner></Banner>
      <Active></Active>
      {/* <Digital></Digital> */}
      
       <Suspense fallback={<div className="flex justify-center">
            <span className="loading loading-spinner text-error"></span>
      </div>}>
        <AIdata count={count} AIdataPromice= {AIdataPromice} setCount={setCount}></AIdata>
      </Suspense>


      <ToastContainer></ToastContainer>


      <Getstart></Getstart>

      <Sampletransport></Sampletransport>
      <ReadyToTrans></ReadyToTrans>
      <Footer></Footer>
    </>
  )
}

export default App
