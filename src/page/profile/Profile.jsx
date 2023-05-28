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

  function logout() {
    auth.signOut();
    navigate('/');
  }

  return (
    <div style={{ backgroundImage: `url(${SignUpSvg})`, height: '100vh', paddingTop: '5rem' }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p>{data.destination}</p>
          <button className="" onClick={logout}>
            Sign out
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
