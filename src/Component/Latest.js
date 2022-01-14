import React, { CreateCont } from './Createcontext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Latest() {
    // const [start] = useState([]);
    const [data] = useContext(CreateCont);
    let store=useNavigate();

    const [load, setLoad] = useState(false);
    const click=()=>{
     
        setLoad(true)

    }
    return (
        <div>
            <h1 className='latest'>Latest</h1>
            <div className='boxmain'>
                    {
                        data.filter((value) => load? value.Id <= 6 : value.Id<4 ).map((items) => {
                            return(
                                <div key={items} className='boxlatest'  onClick={() => store(`/category/${items.Id}`)}>
                                <img className='imageslatest' src={items.imageurl} alt='' />
                                <div className='space'>
                                    <p className='titlelatest'> {items.title} </p>
                                    <p className='descriptionlatest'>{items.description}</p>
                                    <p className='categorylatest,datelatest'>{items.category}/{items.date}</p>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
            <button className='button' onClick={click}>Load More</button>
        </div>
    )
}