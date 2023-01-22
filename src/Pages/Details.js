import react from 'react'
import { useParams,Link } from 'react-router-dom'
import BreakingData from '../Data/PostData'
export default function Details(){
    let{id} =useParams();
   let Post= BreakingData.find((d)=> d.id==id)
    return(
        <div className='container'>
        <h2> Details</h2>
        <h3> {Post.title}</h3>
        <img src={Post.img}/>
        <p> {Post.desc}</p>

    </div>
    )
}