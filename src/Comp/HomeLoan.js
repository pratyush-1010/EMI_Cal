import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faIndianRupee, faIndianRupeeSign, faRupee, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import RangeSlider from 'react-bootstrap-range-slider';
import { Row,Col } from 'react-bootstrap';
// import{Button} from 'react-bootstrap'
import { Pie,Bar} from 'react-chartjs-2';
import {Chart as Chartjs,ArcElement,Tooltip,Legend,BarElement,CategoryScale,LinearScale,PointElement,LineElement} from 'chart.js';
import BarChart from './BarChart'
import { Chart } from "react-google-charts";
Chartjs.register(
  Tooltip,Legend,ArcElement,BarElement,CategoryScale,LinearScale,PointElement,LineElement
)
const HomeLoan = () => {
  const [data,setData]=useState(5000000)
// const [ value, setValue ] = useState(0); 
const [int,setInt]=useState(9);
const [mnts,setMnts]=useState(10);
const[tenure,setTenure]=useState('Months')
const[min,setMin]=useState(6)
const[max,setMax]=useState(360)
const [step,setStep]=useState(6)

// const [yrs,setYrs]=useState(mnts/12);
const data2=data.toLocaleString('en-IN')
const intr=int/1200;
const emi=mnts ? data*intr/(1-(Math.pow(1/(1+intr),mnts))):0;
const totalAmt=mnts*emi;
 const totalCredit=(emi/intr)*(1-Math.pow((1+intr),(-mnts)));
 const totalInt=totalAmt-totalCredit;

// const yrs=mnts*12
// const months=()=>{
//   if(tenure=="Years"){
//     setMnts(mnts*12);
//     setTenure("Months")
//     setMin(6)
//     setMax(360)
//     setStep(6)


//   }
  

// }
// const years=()=>{
//   if(tenure=="Months"){
//     setMnts(mnts/12);
//     setTenure("Years")
//     setMin(0.5)
//     setMax(30)
//     setStep(0.5)
    

//   }
  
// }
// console.log(yrs)

  return (
    
    <div className='container border p-4 w-50 '>
      <h1>EMI Calculator For Home Loan</h1>
    <p className=''>Home Loan Amount</p> 
    <input  value={data} disabled></input>
    <button><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon></button>
    <br></br>
    <br></br>
    {/* <input type="range" min="0" max="20000000" step="100000" className='range1' value={data} onChange={(e)=>setData(e.target.value)}></input> */}
  
<RangeSlider
value={data}
// onChange={changeEvent => setValue(changeEvent.target.value)}
onChange={(e)=>setData(e.target.value)}
min={0}
max={20000000}
step={100000}
className='range1'
/>  

<p className=''>Rate of interest</p> <input type='number' value={int} disabled></input><button>%</button>
<br></br>
<br></br>
<RangeSlider
value={int}
// onChange={changeEvent => setValue(changeEvent.target.value)}
onChange={(e)=>setInt(e.target.value)}
min={5}
max={20}
step={0.5}
// className='range1'

/>  

<p className=''>Loan Tenure</p> 
<input type='number' value={mnts} disabledn></input>
{/* <p>{mnts}</p> */}
 <button  className='conbut' >Months</button> 
<br></br>
<br></br>
<RangeSlider

value={mnts}
// onChange={changeEvent => setValue(changeEvent.target.value)}
onChange={(e)=>setMnts(e.target.value)}
min={min}
max={max}
step={step}

// className='range1'
/>  
<Row className='border p-3'>
<Col md={6} className=''>
<Row>
  <Col md={12} className='border p-3'>
  <h5>Loan EMI</h5>
<h3>
  <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>
  {emi.toLocaleString("en-IN")}
  </h3>
  </Col>
  <Col md={12} className='border p-3'>
    <h5>Total Interest Payable</h5>
    <h3><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>
        {totalInt.toLocaleString("en-IN")}
       </h3>
  </Col>
  <Col md={12} className='border p-3'>
    <h5>Total Payment<br></br>(Principal+Interest)</h5>
    <h3><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>
      {totalAmt.toLocaleString("en-IN")}
      </h3>
  </Col>
</Row>
</Col>
<Col md={6} className=''>
<h5>Break-Up of Total Payment</h5>

   <Pie 
  data={{
    labels:["Total Interest(in Rupees)","Loan Amount(in Rupees)"],
    datasets:[{
      data:[totalInt,totalCredit],
      backgroundColor:['Skyblue',"Blue"]
    }]
  }}


  width={200} height={200}
  />
  
</Col>
</Row>
{/* <BarChart></BarChart> */}

 </div>
  )
}

export default HomeLoan


