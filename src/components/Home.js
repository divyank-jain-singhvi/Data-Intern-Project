import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  render() {
    return (
        <>
        <div className='home-backpage'>
          <div className='back-box bg-white'>
            <div className='d-flex justify-content-center detail-box'>
              <div className='text-block'> 
                <h5>Google</h5><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum voluptas? Animi tempore nihil fuga aspernatur delectus adipisci optio odio magnam assumenda, necessitatibus, repudiandae itaque dolor sapiente, iste alias possimus.</p>
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
}

export default Home