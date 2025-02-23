
const Contact = () => {
    return (
        <div className='container w-50' id='contact'>
            <div className='text-center mt-5 py-5' id='Projects'>
                <h1 className='fw-bolder fs-2'>Contact <span
                    className='fw-light fs-2 text-decoration-underline'> With Us</span></h1>
                <p className='text-secondary fs-6 fw-light'>Ready to Make a Move? Let’s Build Your <br/> Future Together</p>
            </div>

            <form className='form px-3'>
                <div className='d-flex align-items-center justify-content-center my-5 row'>
                    <div className='col-md-6'>
                        <label className='' htmlFor="yourname">Your Name</label>
                        <input className='form-control fw-light text-secondary fs-6' type="text" id='yourname' placeholder='Your Name' required/>
                    </div>
                    <div className='col-md-6'>
                        <label className='' htmlFor="youremail">Your Email</label>
                        <input className='form-control fw-light fs-6 text-secondary' type="email" id='youremail' placeholder='Your Email' required/>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="message">Message</label>
                        <textarea className='form-control text-secondary fs-6 fw-light' id='message' rows='6' placeholder='Message'></textarea>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary w-25 mt-5'>Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;