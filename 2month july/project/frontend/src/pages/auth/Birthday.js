import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Birthday() {

  const [month, setmonth] = useState("");
  const [date, setdate] = useState("")
  const [year, setyear] = useState("")

const dates= Array.from({length:31 },(_,i)=>i+1);
const years= Array.from({length:50 },(_,i)=>1980+i);
  const months =[
        "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

  ];


//    const handleSubmit=()=>{
// try {
//   console.log(month,"months==>");
  
// } catch (error) {
//   console.log(error);
// }
  
  const handleSubmit=()=>{
try {
  console.log( date,month,year ,"months==>, days==>");
  
} catch (error) {
  console.log(error);
}
  }
  return (
    <div>
      <div className='container birth-main-con text-center'>
        <h4 className='birth-text text-center py-3 mt-5'>Add Yours Birthday</h4>
        <div className='row'>
          <div className='col-md-4'>
             <label className="form-label">Date</label>
                 <select className="form-select"
                 value={date}
                 onChange={(e)=>setdate(e.target.value)}>
              <option value="">select Date </option>
              {dates.map((each,index)=>(
                <option key={index} value={each}>{each}</option>
              ))}
            </select>
          </div>
           <div className='col-md-4'>
                   <label className="form-label">month</label>
                   <select className="form-select "
                   value={month}
                   onChange={(e)=>
                    setmonth(e.target.value)
                   }
                    >
              <option value="">select month </option>
             
              {months.map((each, index) => (
                <option key={index} value={each}>
                  {each}
                </option>

              ))}
              
              
            </select>
                   
          </div>
           <div className='col-md-4'>
              <label className="form-label">year</label>
              <select className="form-select"
              value={year}
              onChange={(e)=>setyear(e.target.value)}>
              <option value="">select year </option>
              {years.map((each,index)=>(
                <option key={index} value={each}>{each}</option>
              ))}
              </select>
          </div>
         
        </div>
           <button className="btn btn-primary my-4 "onClick={handleSubmit}>
         <Link to="/Home"> Submit</Link>
        </button>
      </div>
    </div>
  )
}

export default Birthday
