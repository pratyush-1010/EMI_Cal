import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faIndianRupee, faIndianRupeeSign, faRupee, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import RangeSlider from 'react-bootstrap-range-slider';
import { Row,Col } from 'react-bootstrap';
import { Pie,Bar} from 'react-chartjs-2';
import {Chart as Chartjs,ArcElement,Tooltip,Legend,BarElement,CategoryScale,LinearScale,PointElement,LineElement} from 'chart.js';
import BarChart from './BarChart'
Chartjs.register(
  Tooltip,Legend,ArcElement,BarElement,CategoryScale,LinearScale,PointElement,LineElement
)
const PerLoan = () => {
  const [data,setData]=useState(750000)
// const [ value, setValue ] = useState(0); 
const [int,setInt]=useState(11);
const [mnts,setMnts]=useState(6);
// const [yrs,setYrs]=useState(mnts/12);

const intr=int/1200;
const emi=mnts ? Math.round(data*intr/(1-(Math.pow(1/(1+intr),mnts)))):0;
const totalAmt=mnts*emi;
const totalCredit=Math.round((emi/intr)*(1-Math.pow((1+intr),(-mnts))));
const totalInt=Math.round(totalAmt-totalCredit);
const yrs=mnts*12
// console.log(yrs)

  return (
    <div className='container border p-4 w-50'>
      <h1>EMI Calculator For Personal Loan</h1>

    <p className=''>Personal Loan Amount</p> <input type='number' value={data} disabled></input><button><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon></button>
    <br></br>
    <br></br>
    {/* <input type="range" min="0" max="20000000" step="100000" className='range1' value={data} onChange={(e)=>setData(e.target.value)}></input> */}
  
<RangeSlider
value={data}
// onChange={changeEvent => setValue(changeEvent.target.value)}
onChange={(e)=>setData(e.target.value)}
min={10000}
max={3000000}
step={10000}
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
max={25}
step={0.5}
// className='range1'

/>  

<p className=''>Loan Tenure</p> <input type='number' value={mnts} disabled></input> <button>Months</button>
<br></br>
<br></br>
<RangeSlider
value={mnts}
// onChange={changeEvent => setValue(changeEvent.target.value)}
onChange={(e)=>setMnts(e.target.value)}
min={3}
max={60}
step={3}

// className='range1'
/>  
<Row className='border p-3'>
<Col md={6} className=''>
<Row>
  <Col md={12} className='border p-3'>
  <h5>Loan EMI</h5>
<h3>
  <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>
  {emi.toLocaleString("en-In")}
  </h3>
  </Col>
  <Col md={12} className='border p-3'>
    <h5>Total Interest Payable</h5>
    <h3><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>
        {totalInt.toLocaleString("en-In")}
       </h3>
  </Col>
  <Col md={12} className='border p-3'>
    <h5>Total Payment<br></br>(Principal+Interest)</h5>
    <h3><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>
      {totalAmt.toLocaleString("en-In")}
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
  width={100} height={100}
  />
  
</Col>
</Row>

 </div>
  )
}

export default PerLoan


