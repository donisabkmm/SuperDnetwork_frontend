import React from 'react'
import { useState, useEffect } from 'react';
import Dloader from '../../Common/DefaultLoader/Dloader';
import Dashboard from '../../Dashboard/Dashboard'
import { useNavigate } from 'react-router-dom';
import PhotoAlbum from "react-photo-album";
function SDBGRindex() {
    const navigate = useNavigate();
    const dak = localStorage.getItem('dakToken')
    const dakUser = localStorage.getItem('user');
    useEffect(() => {
        if (!dak || !dakUser) {
            navigate("/Error");
        }
    }, [dak, dakUser, navigate]);
    const [showLoader, setShowLoader] = useState(true);
    const [ShowSDBGRGallery, setSDBGRGallery] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (showLoader === false) {
            setSDBGRGallery(true);
        }
    }, [showLoader]);
    const photos = [
        { src: "/images/image1.jpg", width: 10, height: 10 },
        { src: "/images/image2.jpg", width: 10, height: 10 },
    ];
    return (
        <div>
            <Dashboard />
            <div className='mainContainer'>
                <div className='mainLoader'>
                    {ShowSDBGRGallery ? <PhotoAlbum layout="rows" photos={photos} /> : null}

                    {showLoader ? <Dloader /> : null}
                </div>

            </div>
        </div>
    )
}

export default SDBGRindex
