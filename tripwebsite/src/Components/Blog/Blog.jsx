import React from 'react'
import './blog.scss'
import { BsArrowRightShort } from "react-icons/bs";

//importing images
import img from '../../Assets/Blog/Hindoghosh Mountain.jfif'
import img2 from '../../Assets/Blog/Buda.jfif'
import img3 from '../../Assets/Blog/Kabul.jfif'
import img4 from '../../Assets/Blog/Shah-e-dushamshera.jfif'

// we use mapping here to avoid repetition of code


const Posts = [
    {
    id: 1,
    postImage: img,
    title: 'Beautiful Mountains',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odio!'
    },
     {
    id: 2,
    postImage: img2,
    title: 'Beautiful Mountains',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odio!'
    },
     {
    id: 3,
    postImage: img3,
    title: 'Beautiful Mountains',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odio!'
    },
     {
    id: 4,
    postImage: img4,
    title: 'Beautiful Mountains',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odio!'
    },
]



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
                {
                    Posts.map(({id, postImage, title, desc}) => {
                       return(
                    <div className="singlePost grid">
                    <div className="imgDiv">
                    <img src={postImage} alt={title} />
                    </div>

                <div className="postDetails">
                    <h3>
                        {title}
                    </h3>
                    <p>{desc}</p>
                </div>

                <a href="#" className="flex">
                    <BsArrowRightShort className='icon'/>
                    Read More!
                </a>
                </div>
                       ) 
                    })
                }
            </div>
        </div>
        </section>
    )
}

export default Blog