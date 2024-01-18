import React from 'react'
import { useState, useEffect } from 'react';
import Dloader from '../Common/DefaultLoader/Dloader';
import Dashboard from '../Dashboard/Dashboard'
import IndexGallery from './indexGallery';
import { useNavigate } from 'react-router-dom';
function MainGallery() {
    const navigate = useNavigate();
    const dak = localStorage.getItem('dakToken')
    const dakUser = localStorage.getItem('user');
    useEffect(() => {
        if (!dak || !dakUser) {
            navigate("/Error");
        }
    }, [dak, dakUser, navigate]);
    const [showLoader, setShowLoader] = useState(true);
    const [ShowMainGallery, setMainGallery] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (showLoader === false) {
            setMainGallery(true);
        }
    }, [showLoader]);
    return (
        <div>
            <Dashboard />
            <div className='mainContainer'>
                <div className='mainLoader'>
                    {ShowMainGallery ? <IndexGallery /> : null}

                    {showLoader ? <Dloader /> : null}
                </div>

            </div>
        </div>
    )
}

export default MainGallery
