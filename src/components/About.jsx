import apartment from '../assets/apartment.jpeg'
const About = () => {
    return (
        <div>
            <div className='container text-center my-5 pb-5' id='About'>
                <h1 className='fw-bolder fs-2'>About<span
                    className='fw-light fs-2 text-decoration-underline'> Our Brand</span></h1>
                <p className='text-secondary fs-6 fw-light'>Bringing Your Vision to Life, One Home <br/> at a Time</p>
                <div className='row my-5'>
                    <div className='col d-flex align-items-center justify-content-center mb-5'>
                        <img className='img rounded-5' src={apartment} alt="" id='apartment'/>
                    </div>
                    <div className=' col-sm-10 col-md-5 col-lg-5 d-flex flex-column justify-content-start align-items-start text-start mx-4'>
                        <div className='row w-100'>
                            <div className='col'>
                                <h1 className='d-flex align-items-start'>10+</h1>
                                <p className='text-secondary fs-6'>Years of Excellence</p>
                            </div>
                            <div className='col'>
                                <h1 className='d-flex align-items-start'>12+</h1>
                                <p className='text-secondary fs-6 '>Projects Completed</p>
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col'>
                                <h1 className='d-flex align-items-start'>20+</h1>
                                <p className='text-secondary fs-6'>Mn. Sq. Ft. Delivered</p>
                            </div>
                            <div className='col'>
                                <h1 className='d-flex align-items-start'>25+</h1>
                                <p className='text-secondary fs-6'>Ongoing Projects</p>
                            </div>
                        </div>
                        <div className='row text-center mt-5 me-5 me-sm-0 me-md-0 me-lg-0'>
                            <p className='text-start text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <button className='btn btn-primary mt-5'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;