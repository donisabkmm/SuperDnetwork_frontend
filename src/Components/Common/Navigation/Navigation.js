import React from 'react'
// import gallary from "../../../Assets/Images/navicon/Library.png"
import imageEnhancer from "../../../Assets/Images/navicon/imageEnhancer.png"
import BgRemover from "../../../Assets/Images/navicon/bgremove.png"
import { useNavigate } from 'react-router-dom';
import "../../../Assets/Css/loader.css"

function Navigation() {
    const goToSuperDDashboard = () => {
        navigate('/')
    }
    const navigate = useNavigate();
    const goToSuperDResolution = () => {
        navigate('/Resolution');
    };
    // const goTomainGallery = () => {
    //     navigate('/dashboard/Gallery')
    // }
    const goToSuperDBGRemover = () => {
        navigate('/BGRemover')
    }

    // const handleProfile = () => {
    //     localStorage.removeItem('user');
    //     localStorage.removeItem('dakToken');
    //     localStorage.removeItem('name')
    //     navigate('/')

    // }

    return (
        <div>
            <div className='top_navigation'>
                {/* <div className='rightwrapper'>
                    <button className="jellyBtn" onClick={handleProfile}> Log Out
                    </button>
                </div> */}
                <div className='leftwrapper' onClick={goToSuperDDashboard}>
                    <span>AI</span>-Photos
                </div>
            </div>
            <div className='sidenavigation'>
                <div className='sidenavigation_logo' onClick={goToSuperDDashboard}></div>
                {/* <div className='navigation_btn' style={{ backgroundImage: `url(${gallary})`, backgroundPosition: '50% 50%', backgroundSize: 'cover' }} onClick={goTomainGallery}>
                    <span className="tooltip">Album</span>
                </div> */}
                <div className='navigation_btn' style={{ backgroundImage: `url(${imageEnhancer})`, backgroundPosition: '50% 50%', backgroundSize: 'cover' }} onClick={goToSuperDResolution} >
                    <span className="tooltip">Enhancer</span>
                </div>
                <div className='navigation_btn' style={{ backgroundImage: `url(${BgRemover})`, backgroundPosition: '50% 50%', backgroundSize: 'cover' }} onClick={goToSuperDBGRemover}>
                    <span className="tooltip">Background Remover</span>
                </div>
            </div>

        </div>
    )
}

export default Navigation
