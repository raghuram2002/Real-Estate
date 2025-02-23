import {projectFolder} from "../assets/assets.js";
import {useEffect, useState} from "react";


const Projects = () => {

    const [slide, setSlide] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCards = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectFolder.length);
            }
            else{
                setCardsToShow(1);
            }
        }
        updateCards();

        window.addEventListener("resize", updateCards);
        return () => window.removeEventListener("resize", updateCards);
    })


    const nextSlide = () => {
        setSlide((prev) => prev + 1 % projectFolder.length);
    }
    const prevSlide = () => {
        setSlide((prev) => prev === 0 ? projectFolder.length - 1 : prev -1 );
    }

    return (
        <div className='container'>
            <div className='text-center mt-5' id='Projects'>
                <h1 className='fw-bolder fs-2'>Projects<span
                    className='fw-light fs-2 text-decoration-underline'> Completed</span></h1>
                <p className='text-secondary fs-6 fw-light'>Crafting Spaces, Building Legacies—Explore <br/> Our Portfolio</p>
            </div>

            <div className='d-flex justify-content-end align-items-center mb-4'>
                <button onClick={nextSlide} className='btn btn-dark p-2 rounded m-1 text-primary'>
                    <i className="bi bi-chevron-right"></i>
                </button>
                <button onClick={prevSlide} className='btn btn-dark p-2 rounded m-1 text-primary'>
                    <i className="bi bi-chevron-left"></i>
                </button>
            </div>

            <div className='overflow-hidden'>
                <div className='d-flex gap-5' style={{transition:'transform 500ms ease-in-out', transform: `translateX(-${(slide * 100) / cardsToShow}%)`}}>
                    {
                        projectFolder.map((project, index) => (
                            <div className='position-relative col-4' key={index} style={{width: '18rem'}}>
                                <img className='w-100 h-auto mb-5 rounded' src={project.image} alt=""/>
                                <div className='d-flex justify-content-center' style={{
                                    position: 'absolute',
                                    top: '350px',
                                    width: '100%',
                                }}>
                                    <div className='d-inline-block bg-white w-75 px-2 py-1 rounded shadow-sm'>
                                        <h4 className='fs-5 fw-bolder'>{project.title}</h4>
                                        <h6 className='text-secondary fw-light' style={{fontSize:'15px'}}>{project.price} | {project.location}</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;