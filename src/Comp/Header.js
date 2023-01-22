import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CatData from '../Data/CatData'
import Category from '../Pages/Category';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import BreakingData from '../Data/PostData';

function Header(){
    return(
        <>
        <section className='bg-dark text-light py-2'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>२१ मंसिर, २०७९Wednesday, December 7, 2022, 10:37 AM</div>
                <div className='col-lg-6 text-end'> <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
                
            </div>
            </div>
        </section>
        <div className='conatainer py-3'>
            <img src={require('../img/bbb.gif')} className="w-100"/>

        </div>
        <div className='conatainer py-2'>
            <img src={require('../img/cccc.gif')} className="w-100"/>

        </div>
        <header>
            <div className='container py-3'>
            <div className='row align-items-center'>
                <div className='col-lg-3'>
                <img src={require('../img/logo.png')} className="w-100"/>

                </div>
                <div className='col-lg-9'>
                <img src={require('../img/dddd.gif')} className="w-100"/>
            
                </div>
            </div>
    
            </div>
        </header>

        <nav className="navbar navbar-expand-lg bg-light border-top border-bottom">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        { CatData.map((a)=>(
        <li className="nav-item">
        <Link className="nav-link" to={'/cat/${a.id}'}>{a.catName}</Link>
      </li>
        ))} 
      </ul>
    </div>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cat/:cid" element={<Category/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </>
    )
}
export default Header