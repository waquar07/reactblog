import React, { CreateCont } from './Createcontext'
import {useContext } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Displayimg() {


    const [data] = useContext(CreateCont);

    let store=useNavigate();

    return (
        <div className='disp1' >
            {data.filter((value) => value.Id <= 1).map(items =>
                <div key={items} className='disp2' onClick={()=>store(`/travel`)}>  

                    <img className='bigimg' src={items.imageurl} alt=''/>
                    <div className='datamove'>
                        <p> {items.title} </p>
                        {/* <p>{items.description}</p> */}
                        <p>{items.category}/{items.date}</p>
                    </div>

                </div>
            )
            }
            {data.filter((value) => value.Id ==='3' || value.Id ==='4' ).map(items =>
                <div className='imagemini' onClick={()=>store(`/travel`)}>
                    <img className='miniimg' src={items.imageurl} alt='' />
                    <div className='dataing'>
                        {/* <p> {items.title} </p> */}
                        {/* <p>{items.description}</p> */}
                        <p>{items.category}/{items.date}</p>
                    
                    </div>

                </div>
            )

            }


        </div>
    )
}