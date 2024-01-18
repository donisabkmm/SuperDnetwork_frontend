import { React, useState } from 'react';
import plus from "../../../Assets/Images/icons/plus.png"

function Profile() {
    const dak = localStorage.getItem('user');
    const [imageSrc, setImageSrc] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className='ProfileContainer'>
                <img className='profilePic' src={imageSrc} alt='' />
                <div className='profile-form'>
                    <form>

                        <label htmlFor="fileInput" className="file-input-label">
                            <img className="plusImage" src={plus} alt=''></img>
                            <input type="file" id="fileInput" className="file-input" accept="image/*" onChange={handleImageChange} />
                        </label>
                        <div className='Profile_fields'>
                            <label className='profileIP-labal'>Username</label>
                            <input type='text' className='inputpro' value={dak} readOnly />
                        </div>
                        <div className='Profile_fields'>
                            <label className='profileIP-labal'>Current Password</label>
                            <input type='password' className='inputpro' />
                        </div>
                        <div className='Profile_fields'>
                            <label className='profileIP-labal'>New Password</label>
                            <input type='password' className='inputpro' />
                        </div>
                        <div className='Profile_fields'>
                            <label className='profileIP-labal'>Confirm Password</label>
                            <input type='password' className='inputpro' />
                        </div>
                        <div className='btn-location'>
                            <input type='submit' className='jellyBtn' value="Apply" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
