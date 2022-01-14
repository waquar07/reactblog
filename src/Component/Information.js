import React from 'react'
import { useParams } from 'react-router-dom'
import {  useContext } from 'react'
import { CreateCont } from "./Createcontext";

export default function Information() {
   
    const [data] = useContext(CreateCont);

    const { id } = useParams();


    return (
        <div>
            {data.filter((value) => value.Id === id).map((items) => {
                return (

                    <div className='deets'>
                        <h1 className='titleinfo'>{items.title}</h1>
                        <div>
                            {/* <h4 className='sharing'>{items.share}</h4> */}
                            <span className='insta'>
                                <i class="fab fa-instagram"></i>
                            </span>
                            <span className='facebook'>
                                <i class="fab fa-facebook"></i>
                            </span>
                            <span className='twitter'>
                                <i class="fab fa-twitter-square"></i>
                            </span>
                        </div>
                        <img className='extra' src={items.extra} alt='' />
                        <p className='paradeets'>{items.details}</p>
                        <img className='imagedeets' src={items.detailsimage} alt='' />
                    </div>


                )
            })}

        </div>
    )
}