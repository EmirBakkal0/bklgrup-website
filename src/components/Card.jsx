
import React from 'react'
import "./card.css"

function Card(props) {
    return (
        <a href={props.link}>

        <div className="card-container mx-2 my-2 md:m-4 ">
            <div className="card">
                <div className="img-content">
                    <img src={props.img} alt={props.name} />
                    
                </div>
                <div className="content">
                    <p className="heading text-green-800">{props.name}</p>
                    <p className='text-black'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis obcaecati ratione nesciunt, dolor repudiandae dolores harum ut quam.
                    </p>
                </div>
            </div>
        </div>
        </a>



    )
}

export default Card