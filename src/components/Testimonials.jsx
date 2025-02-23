import {star, testimonialsFolder} from "../assets/assets.js"

const Testimonials = () => {
    return (
        <div className='container mb-5' id='Testimonials'>
            <div className='text-center mt-5 py-5' id='Projects'>
                <h1 className='fw-bolder fs-2'>Customer<span
                    className='fw-light fs-2 text-decoration-underline'> Testimonials</span></h1>
                <p className='text-secondary fs-6 fw-light'>Real Stories from Those Who Found Home <br/> with Us</p>
            </div>
            <div className='row d-flex justify-content-center gap-5'>
                {
                    testimonialsFolder.map((testimonial, index) => (
                        <div className='card shadow border-1 col-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center text-center py-4 mb-5 px-1' key={index}>
                            <img className='img rounded-circle' width='75px' src={testimonial.image} alt=""/>
                            <div className='card-body'>
                                <h2 className='fs-5'>{testimonial.name}</h2>
                                <p className='fw-light text-secondary mb-2' style={{fontSize:'13px'}}>{testimonial.role}</p>
                                <div className='my-2'>
                                    {
                                        Array.from({length: testimonial.rating}, (item,index) => (
                                            <img key={index} src={star} alt=""/>
                                        ))
                                    }
                                </div>
                                <p className='fw-light text-secondary' style={{fontSize:'14px'}}>{testimonial.msg}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonials;