import React from 'react'
import './blog.scss'

const Blog = () => {
    return (
        <section className='blog container section'>
        <div className="secContainer">

            <div className="secIntro">
                <h2 className='secTitle'>
                    Our Best Blog?
                </h2>
                <p>
                    An insight to the incredible experiences in the world.
                </p>
            </div>

            <div className="mainContainer grid">
                <div className="singlePost grid">
                    <div className="imgDiv">
                    <img sec="" alt='Image Name' />
                </div>

                <div className="postDetails">
                    <h3>
                        Title
                    </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odio!</p>
                </div>

                <a href="#" className="flex">
                    
                    Read More!
                </a>
                
                </div>
            </div>
        </div>
        </section>
    )
}

export default Blog