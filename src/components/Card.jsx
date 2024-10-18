
import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

function Card(props) {
    return (

        <div>

            <div className="card-container mx-2 my-2 md:m-2 ">
                <div className="card">
                    <div className="img-content">
                        <img className='p-12' src={props.img} alt={props.name} />

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


                <button className='cursor-pointer p-2  bg-gradient-to-br from-[#fc00ff] to-[#00dbde] hover:bg-gradient-to-tr from-[#fc00ff] to-[#00dbde] text-white rounded-lg mt-2 bg-opacity-35 shadow-xl' onClick={() => window.location.href = props.link}>
                   
                    Siteye git
                </button>

            </div>
        </div>




    )
}

export default Card