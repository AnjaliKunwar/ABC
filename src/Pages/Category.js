import react from 'react'
import { useParams,Link } from 'react-router-dom'
import BreakingData from '../Data/PostData'
export default function Category(){
   let{cid} =useParams();
   let Post= BreakingData.filter((d)=>d.cat==cid)
    return(
        <div className='container'>
            <h2>Category</h2>
            <div className='row'>
                {Post.map ((g)=>(
                 <div className ='col-lg-4'>
                    <img src={g.img} className="w-100"/>
                    <p className='fw-bold'> <Link className="link-dark text-decoration-none py-2"to= {'/details/${g.id}'}> {g.title}</Link></p>
                 </div>

                ))}
            </div>

        </div>
    )
}