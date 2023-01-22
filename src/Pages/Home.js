import react from 'react'
import {Link} from 'react-router-dom'
import BreakingData from '../Data/PostData'
export default function Home (){
    return(
        <>
        <div className='container'>
          {BreakingData.map((a)=>(
         <div className='shadow py-3 text-center'>
           <h1 className='fw-bold'> <Link className="link-dark text-decoration-none"to= {'/details/${a.id}'}> {a.title}</Link></h1>
           <img src={a.img}/>
           </div>
    
            ))} 

        </div>
        
        </>
    )
}
