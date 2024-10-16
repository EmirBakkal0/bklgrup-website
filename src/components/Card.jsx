
import React from 'react'
import "./card.css"

function Card(props) {
    return (


        <div className="card-container mx-2 my-2 md:m-4 ">
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




    )
}

export default Card