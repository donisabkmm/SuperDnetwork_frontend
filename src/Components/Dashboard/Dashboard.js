import React from 'react'
import Navigation from '../Common/Navigation/Navigation'

function Dashboard() {
    // const navigate = useNavigate();
    // const dak = localStorage.getItem('dakToken')
    // const dakUser = localStorage.getItem('user');
    // useEffect(() => {
    //     if (!dak || !dakUser) {
    //         navigate("/Error");
    //     }
    // }, [dak, dakUser, navigate]);

    // if (dak && dakUser) {

        return (
            <div className='dashboard'>
                <Navigation />

            </div>
        )
    }


export default Dashboard
