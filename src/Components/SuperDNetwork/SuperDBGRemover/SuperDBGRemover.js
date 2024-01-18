import React, { useState, useEffect } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import Dloader from '../../Common/DefaultLoader/Dloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { API_BASE_URL } from '../../../Config/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function SuperDBGRemover() {
  const [showLoader, setShowLoader] = useState(true);
  const [ShowUploader, setUpLoader] = useState(false);
  const [downloadFilename, setdFilename] = useState(null);
  const [defaultFilename, setFilename] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (showLoader === false) {
      setUpLoader(true);
    }
  }, [showLoader]);
  const [imageSrc, setImageSrc] = useState(null);
  const [ResultImageA, SetResultImageA] = useState();
  const [ResultImageB, SetResultImageB] = useState();
  const handleImageChange = (e) => {
    SetResultImageA(null);
    SetResultImageB(null);
    setImageSrc(null);
    const file = e.target.files[0];
    const defaultFilename = file.name;
    const downloadFilename = file.name.replace(/\.[^/.]+$/, '');
    setFilename(defaultFilename);
    setdFilename(downloadFilename);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
    removebgProcessor(file);
  }
  const removebgProcessor = async (image) => {
    setShowLoader(true)
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('username', "commonuser");
    
    try {
      const response = await axios.post(`${API_BASE_URL}/api/removebg`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShowLoader(false)
      SetResultImageA(response.data.image1)
      SetResultImageB(response.data.image2)
      
    } catch (error) {
      toast('Error while processing Enhancer, Please Reload the page and try again with another photo....', error);
      setTimeout(() => {
            navigate("/")
    }, 3000);    }
  };
  const handleDownloadA = () => {
    if (ResultImageA) {
      const isDataUrl = ResultImageA.startsWith('data:image/jpeg;base64,');
      const base64Data = isDataUrl ? ResultImageA.split(',')[1] : ResultImageA;
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${downloadFilename}_removed_bg_A.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const handleDownloadB = () => {
    if (ResultImageA) {
      const isDataUrl = ResultImageA.startsWith('data:image/jpeg;base64,');
      const base64Data = isDataUrl ? ResultImageB.split(',')[1] : ResultImageB;
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${downloadFilename}_removed_bg_B.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div>
      <Dashboard />
      <ToastContainer/>
      <div className='mainContainer'>
      <div className='titlewrapper'>
                    <span>Background </span> Remover
      </div>
        {ShowUploader ?
          
          <div className='preview-container'>
          
            <div className='header-container'>
              <div className='headerbtn-holder'>
                <label htmlFor="fileInput" className='jellyBtn'>
                  <FontAwesomeIcon icon={faCloudUploadAlt} />
                  Upload
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className='image-preview1'>
              <div className='image-header'>
                <div className='filename-holder'>
                  Filename: <span>{defaultFilename}</span>
                </div>
                <div className='button-holder'>
                  <button className='jellyBtn' onClick={handleDownloadA}>
                    <FontAwesomeIcon icon={faDownload} />
                    Download</button>
                </div>
              </div>
              <div className='image-loader'>
                <ImgComparisonSlider>
                  <img slot="first" src={imageSrc} alt='' />
                  <img slot="second" src={`data:image/*;base64,${ResultImageA}`} alt='' />
                </ImgComparisonSlider>
              </div>
            </div>
            <div className='image-preview2'>
              <div className='image-header'>
                <div className='filename-holder'>
                  Filename: <span>{defaultFilename}</span>
                </div>
                <div className='button-holder'>
                  <button className='jellyBtn' onClick={handleDownloadB} >
                    <FontAwesomeIcon icon={faDownload} />Download</button>
                </div>
              </div>
              <div className='image-loader'>
                <ImgComparisonSlider>
                  <img slot="first" src={imageSrc} alt='' />
                  <img slot="second" src={`data:image/*;base64,${ResultImageB}`} alt='' />
                </ImgComparisonSlider>
              </div>
            </div>
          </div>
          : null}
        <div className='mainLoader'>
          {showLoader ? <Dloader /> : null}
        </div>
      </div>
    </div>
  );
}
export default SuperDBGRemover;