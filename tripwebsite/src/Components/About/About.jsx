import React from 'react'
import './about.scss'

// Images ================>
import Image1 from '../../Assets/icons/trIcon.png'
import Image2 from '../../Assets/icons/customerIcon.png'
import Image3 from '../../Assets/icons/feedbackIcon2.png'


const About = () => {
    return (
        <section className='about section'>
            <div className="secContainer">
                <h2 className="title">
                    Why Choose Us?
                </h2>

                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={Image1} alt="Image Name" />
                        <h3>Trust And Reliablility</h3>

                        <p>
                            We prioritize your trust by ensuring reliable services and transparent communication throughout your journey with us.
                        </p>
                 </div>

                 {/* second part */}
                        <div className="singleItem">
                        <img src={Image2} alt="Image Name" />
                        <h3>1000+ Customers</h3>

                        <p>
                            trust between us and our customers is our top priority. We are dedicated to providing reliable services and maintaining transparent communication throughout your journey with us.
                        </p>
                 </div>
                    {/* third part */}
                     <div className="singleItem">
                        <img src={Image3} alt="Image Name" />
                        <h3>Feedbacks</h3>

                        <p>
                            We value our customers' feedback and continuously strive to improve our services based on your suggestions and experiences.
                        </p>
                 </div>
                </div>

                {/* 1:33:24 */}
            </div>
        </section>
    )
}

export default About