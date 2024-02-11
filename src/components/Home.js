import React, {useState,useEffect} from 'react';
import './Home.css';
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


  
    useEffect(() => {
      setTimeout(() => {
        setIndex((index + 1)%names.length)
        setCompanyIndex((companyIndex + 1)%companyNames.length)
        setCompanyPortal((companyPortal + 1)%companyPortalLink.length)        
      }, 2500);
      if (companyNames[companyIndex]==='Google'){
        document.getElementById('image1').style.opacity='1';
        document.getElementById('image2').style.opacity='0.5';
        document.getElementById('image3').style.opacity='0.5';
      }
      if (companyNames[companyIndex]==='Microsoft'){
        document.getElementById('image1').style.opacity='0.5';
        document.getElementById('image2').style.opacity='1';
        document.getElementById('image3').style.opacity='0.5';
      }
      if (companyNames[companyIndex]==='Oracle'){
        document.getElementById('image1').style.opacity='0.5';
        document.getElementById('image2').style.opacity='0.5';
        document.getElementById('image3').style.opacity='1';
      }
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
                  <img className='w-3 h-3' id='image1' src={google} alt=""/>
                  <img className='w-3 h-3' id='image2' src={microsoft} alt=""/>
                  <img className='w-3 h-3' id='image3' src={oracle} alt=""/>
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