import React, {useState,useEffect} from 'react';
import './Services.css';
import google from '../components/asserts/image 3.png'
import microsoft from '../components/asserts/image 4.png'
import oracle from '../components/asserts/image 5.png'
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
  const [opacity1, setOpacity1] = useState(0)
  const [opacity2, setOpacity2] = useState(0)
  const [opacity3, setOpacity3] = useState(0)


  
    useEffect(() => {
      setTimeout(() => {
        setIndex((index + 1)%names.length)
        setCompanyIndex((companyIndex + 1)%companyNames.length)
        setCompanyPortal((companyPortal + 1)%companyPortalLink.length)        
      }, 2500);
      if (companyNames[companyIndex]==='Google'){
          setOpacity1(1);
          setOpacity2(0.5);
          setOpacity3(0.5);
          // console.log(opacity1,opacity2,opacity3)
      }
      if (companyNames[companyIndex]==='Microsoft'){
          setOpacity1(0.5);
          setOpacity2(1);
          setOpacity3(0.5);
      }
      if (companyNames[companyIndex]==='Oracle'){
          setOpacity1(0.5);
          setOpacity2(0.5);
          setOpacity3(1);
    }
    console.log(companyNames[companyIndex])
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
                <div className='d-flex justify-content-center company-logo'>
                  <img className='w-3 h-3' id='image1' style={{opacity:opacity1}} src={google} alt=""/>
                  <img className='w-3 h-3' id='image2' style={{opacity:opacity2}} src={microsoft} alt=""/>
                  <img className='w-3 h-3' id='image3' style={{opacity:opacity3}} src={oracle} alt=""/>
                </div>
              </div>
              <div className='form-box'>
                <form action="">
                  <input type="text" name="" id="" className='mt-5 form' placeholder='Role Type'/>
                  <input type="text" name="" id="" className='form' placeholder='Company Name'/>
                  <input type="link" name="" id="" className='form' placeholder='Link'/>
                  <div className='d-flex form-date'>
                    <p>Filled Date :</p>
                    <p>End Date :</p>
                  </div>
                  <div>
                    <input type="date" name="" className='form' id=""/>
                    <input type="date" name="" className='form' id=""/>
                  </div>
                  <input type="text" name="" id="" className='form' placeholder='Skill'/>
                  <input type="text" name="" id="" className='form' placeholder='Job Role'/>
                  <div className='d-flex justify-content-end submit-form'>
                    <input type="submit" name="" id="submit-data" />
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