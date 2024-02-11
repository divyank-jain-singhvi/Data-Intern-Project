import React, {useState,useEffect} from 'react';
import './Home.css';
import '../asserts/image 3.png'
import '../asserts/image 4.png'
import '../asserts/image 5.png'
const names = [
  "Whether it's business or engineering & technology, we're here to help get you to your future.\nIf you are early in your college career and looking to prepare you for a future in business or technology, we got you.\nWhether you've just started in university or getting your PhD, we have programs, events, and more.", 
  "Every year, thousands of university students from every corner of the world join Microsoft. You bring your aspirations, talent, potential—and excitement for the journey ahead. Our internship experience brings interns from around the world together to connect, collaborate and co-create virtually to make a difference and impact the world.",
   "See first-hand what it takes to build the technologies of tomorrow, today. Expect priceless exposure to our massive scale, highly sophisticated systems that run the modern world.Grow your skills through a quarter-long internship program for veterans and military spouses. You’ll gain hands-on training in a variety of business areas, such as technology, data, logistics, HR and sales, alongside a dedicated onboarding guide and military community."
]
const companyNames = [
  "Google", 
  "Microsoft",
   "Oracle"
]
const companyPortalLink = [
  "https://buildyourfuture.withgoogle.com/internships", 
  "https://careers.microsoft.com/v2/global/en/students",
   "https://www.oracle.com/careers/students-grads/internships/"
]

export default function Component(){

  const [companyPortal, setCompanyPortal] = useState(0)
  const [index, setIndex] = useState(0)
  const [companyIndex, setCompanyIndex] = useState(0)


  
    useEffect(() => {
      setTimeout(() => {
        setIndex((index + 1)%names.length)
        setCompanyIndex((companyIndex + 1)%companyNames.length)
        setCompanyPortal((companyPortal + 1)%companyPortalLink.length)
      }, 3000);
    }, [index,companyIndex,companyPortal])


    return (
        <>
        <div className='home-backpage'>
          <div className='back-box bg-white'>
            <div className='d-flex justify-content-center detail-box'>
              <div className='text-block'> 
                <h5>{companyNames[companyIndex]}</h5><br />
                <p id='company-details'>{names[index]}</p>
                <div className='link-button'><button onClick={()=>window.open(companyPortalLink[companyPortal],'_blank')}>Read More</button></div>
                <div>
                  {/* <img className='w-100 h-100' src='' alt=""/> */}
                </div>
              </div>
              <div className='form-box'>
                <form action="">
                  <input type="text" name="" id="" className='mt-5' placeholder='Role Type'/>
                  <input type="text" name="" id="" placeholder='Company Name'/>
                  <input type="link" name="" id="" placeholder='Link'/>
                  <div className='d-flex form-date'>
                    <p>Filled Date :</p>
                    <p>End Date :</p>
                  </div>
                  <div className=''>
                    <input type="date" name="" id=""/>
                    <input type="date" name="" id=""/>
                  </div>
                  <input type="text" name="" id="" placeholder='Skill'/>
                  <input type="text" name="" id="" placeholder='Job Role'/>
                  <div className='d-flex justify-content-end submit-form'>
                    <input type="submit" name="" id="" />
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
        <div className='background-box'></div>
        
        </>
    )
  }