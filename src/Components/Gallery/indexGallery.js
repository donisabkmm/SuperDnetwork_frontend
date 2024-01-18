import React from 'react'
import imageEnhancer from "../../Assets/Images/navicon/imageEnhancer.png"
import BgRemover from "../../Assets/Images/navicon/bgremove.png"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function IndexGallery() {
    const navigate = useNavigate();
    const dak = localStorage.getItem('dakToken')
    const dakUser = localStorage.getItem('user');
    useEffect(() => {
        if (!dak || !dakUser) {
            navigate("/Error");
        }
    }, [dak, dakUser, navigate]);
    const handleEnhancerGallery = () => {
        navigate('/dashboard/Gallery/SuperDResolution')
    }
    const handleBGRemoveGallery = () => {
        navigate('/dashboard/Gallery/SuperDBGR')
    }
    return (
        <div className='galleryContainer' >
            <div className="card" onClick={handleEnhancerGallery}>
                <div className="top-section">
                    <div className="border"></div>
                    <div className="icons">
                        <img className="App-logo" src={imageEnhancer} alt=" Enhancer" />
                    </div>
                </div>
                <div className="bottom-section">
                    <span className="title">Image Enhancer <br /> Gallery</span>
                </div>
            </div>
            <div className="card" onClick={handleBGRemoveGallery}>
                <div className="top-section">
                    <div className="border"></div>
                    <div className="icons">
                        <img className="App-logo" src={BgRemover} alt=" Enhancer" />
                    </div>
                </div>
                <div className="bottom-section">
                    <span className="title">BgRemover <br /> Gallery</span>
                </div>
            </div>
            <div className="card" onClick={handleBGRemoveGallery}>
                <div className="top-section">
                    <div className="border"></div>
                    <div className="icons">
                        <img className="App-logo" src={BgRemover} alt=" Enhancer" />
                    </div>
                </div>
                <div className="bottom-section">
                    <span className="title">Colorizer <br />Gallery</span>
                </div>
            </div>
        </div>
    )
}

export default IndexGallery
