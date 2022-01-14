import React, { CreateCont } from './Createcontext'
import {useContext } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TheLatest() {
    
    const [data] = useContext(CreateCont);
    let store=useNavigate();

    return (

        <div>
            <h1 className='thelatest'>The Latest</h1>
            <div className='box'>
                {data.filter((value) => value.Id <= 3).map(items =>
                    <div key={items.Id} className='box2' onClick={() => store(`/category/${items.Id}`)}>
                        <img className='image1' src={items.imageurl} alt='' />
                        <p className='title'> {items.title} </p>
                        <p className='description'>{items.description}</p>
                        <p className='category,date'>{items.category}/{items.date}</p>
                        {/* <p className='date'>{items.date}</p> */}

                    </div>)}
            </div>
        </div>
    )
}