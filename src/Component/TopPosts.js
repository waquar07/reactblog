import React, { CreateCont } from './Createcontext'
import {useContext } from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom';

export default function TopPosts() {
  
    const [data] = useContext(CreateCont);
    let store = useNavigate();

    return (
        <div className='up'>
            <h1 className='headingoftoppost'>Top Posts</h1>
            <div className='tophead'>
                {data.filter((value) => value.Id <= 3).map((items, index) =>
                    // <div className={index == 0 ? "left" : "right"}>
                    <div key={items.Id} className='spacing' onClick={() => store(`/category/${items.Id}`)}>
                        <img className='imagetoppost' src={items.imageurl} alt='' />
                        <div className='move'>
                            <p> {items.title}{index} </p>
                            <p>{items.description}</p>
                            <p>{items.category}/{items.date}</p>


                            <span className='hori'> <hr /></span>
                        </div>


                    </div>
                    // <div/>
                )
                }
            </div>
        </div>

    )
}