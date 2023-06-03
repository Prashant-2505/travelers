import React, { useEffect, useState } from 'react';
import SignUpSvg from '../../assets/svg/signUp.svg';
import './style.css';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from '../../components/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const auth = getAuth();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = auth.currentUser.uid;

    const fetchData = async () => {
      try {
        const docRef = doc(db, 'Bookings', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log('No such document!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [auth.currentUser, auth.currentUser.uid]);

 
//  console.log(image)
  function logout() {
    auth.signOut();
    navigate('/');
  }

  return (
<div style={{ backgroundImage: `url(${data.image})`, height: '500px', paddingTop: '3rem' }}>
      {loading ? (
        <Spinner />
      ) : 
      (
        <div id='main' style={{ backgroundImage: `url(${data.image})` }} >
          <div className="profile_card_wrapper">
            <div className="profile_card">
              <div className="profile_data">
                <h4>USER DETAILS</h4>
                <h3>{auth.currentUser.displayName}</h3>
                <p>{auth.currentUser.email}</p>
              </div>
              <div className="signOut_btn">
                <button className="" onClick={logout}>
                  Sign out
                </button>
              </div>
            </div>
            <div className='package_data'>
              <h4>PACKAGE DETAILS</h4>
              <h3>{data.destination}</h3>
              <p> <span>Duration :</span> {data.duration}</p>
              <p><span>Start date :</span> {data?.starting_date}</p>
              <p><span>Price :</span> {data.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;





