
import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

function Card(props) {
    return (

        <div>

            <div className="card-container mx-2 my-2 md:m-2 ">
                <div className="card">
                    <div className="img-content">
                        <img src={props.img} alt={props.name} />

                    </div>
                    <div className="content">
                        <p className="heading text-green-800">{props.name}</p>
                        <p className='text-black'>
                            {props.p}
                        </p>



                    </div>
                </div>

            </div>
            <div className='flex justify-center mb-5'>


                <button className='cursor-pointer p-2 shadow-lg bg-gray-500 text-gray-700 rounded-lg mt-2 bg-opacity-35' onClick={() => window.location.href = props.link}>
                    Siteye git
                </button>

            </div>
        </div>




    )
}

export default Card