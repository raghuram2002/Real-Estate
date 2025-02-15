import banner from '../assets/banner2.jpg'
import Navbar from "./Navbar.jsx";

const Header = () => {
    return (
        <div className="min-vh-100 w-100" style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>

            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} // Adjust opacity (0 = fully transparent, 1 = fully visible)
            ></div>

            <Navbar/>
            <div className='d-flex flex-column justify-content-center container position-relative text-center text-white ' style={{height:'595px'}} id='mainHead'>
                <h2 className='h1 fw-bolder mb-5' id='slogan'>Find homes that match your dreams</h2>
                <div className='d-flex justify-content-center gap-4'>
                    <button className='btn border text-white' style={{width:'110px'}}>Projects</button>
                    <button className='btn btn-primary' style={{width: '110px'}}>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Header;