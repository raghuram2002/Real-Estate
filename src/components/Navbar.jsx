import logo from '../assets/logo.png'
import '../index.css'
const Navbar = () => {
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container d-flex align-items-center justify-content-between">
                <a className='navbar-brand d-flex align-items-center' href="#">
                    <img className='rounded-circle me-2' src={logo} alt="" width='40px'/>RaghuEstates
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText'
                        aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse rounded-5 text-center justify-content-between align-items-center" id="navbarText">
                    <ul className="navbar-nav mx-auto d-flex justify-content-center gap-3">
                        <li className="nav-item">
                            <a className='nav-link' href="#Header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#Testimonials">Testimonials</a>
                        </li>
                    </ul>
                    <div className='d-lg-block d-flex justify-content-center align-items-center mt-2 mt-lg-0'>
                        <button className='btn btn-light rounded-5 mb-2'>Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
      </>
  )
}

export default Navbar
