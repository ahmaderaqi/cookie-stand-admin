import Head from 'next/head';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import { hours } from '../data.js';
import { useState } from 'react';
import ReportTable from '../components/ReportTable';
export default function Home() {

  const [locations, setLocations] = useState([])
  const [ararys, setArrays] = useState([])
  const [summation, setSummation] = useState([])
  const [totalSummation, setTotalSummation] = useState(0)

  const [virticalSummation, setVirticalSummation] = useState([])



  function submitHandler(event) {
    event.preventDefault();

    const randomArray = [];
    const matrixArray = []
    let sum = 0
    let virtical = 0
    let k = 0
    let colArray=[]
    for (let i = 0; i < 14; i++) {
      const randomNum = parseInt(Math.floor(Math.random() * (parseInt(event.target.maximum.value) - parseInt(event.target.minimum.value) + 1)) + parseInt(event.target.minimum.value));

      randomArray.push(randomNum);
      console.log(typeof randomNum);
      sum = sum + randomNum
    }
    setTotalSummation(totalSummation + sum)
    matrixArray.push(randomArray)




    const locationObj = {
      id: locations.length + 1,
      location: event.target.location.value,

    }

    setLocations([...locations, locationObj])
    setArrays([...ararys, randomArray])
    setSummation([...summation, sum])
    // setVirticalSummation([12,1,4,5])
    // console.log(ararys[2][2]);

    
    // for (let i = 0; i < 14; i++) {

    //   for (let j = 0; j < ararys.length; i++) {
    //     virtical += ararys[j][k]
    //     console.log(ararys[j][k])
    //   }
    //   colArray.push(virtical)
    //   k++
    //   virtical = 0

    // }
    
  }
  

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>


      {/* Header */}
      <Header />
      <main className='flex flex-col min-h-screen items-center py-4 space-y-8'>
        {/* form */}
        <CreateForm handler={submitHandler} hours={hours} />
        <ReportTable locations={locations} hours={hours} ararys={ararys} summation={summation} totalSummation={totalSummation} virticalSummation={virticalSummation} />


      </main>
      <footer className="p-4 mt-auto bg-lime-900 text-gray-50 ">
        &copy; 2023
      </footer>

    </>
  )
}





