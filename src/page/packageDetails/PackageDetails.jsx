import React, { useEffect, useState } from 'react';
import './style.css';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from '../../components/spinner/Spinner';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const PackageDetails = () => {
  const params = useParams();
  const { state, city } = params;

  // Define a state variable for the data
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    if(currentIndex != 0)
    {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
    else
    {
      setCurrentIndex(2);
    }
  };

  const handleRight = () => {
    if(currentIndex != 2)
    {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
    else
    {
      setCurrentIndex(0)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, state, city);
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
  }, [state, city]);

  return (
    <div id='mainDiv'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Welcome to {data?.Destination}</h1>
          <h3>Your journey Your story</h3>

          <div id='cardWrapper'>
            <div id='cardCraousel'>
              <img src={data?.Craousel[currentIndex]} alt="" />
              <div className="Cbtn">
                <div onClick={handleLeft} className='CLicon'>
                  <div className='left'> <AiFillLeftCircle /></div>
                </div>
                <div onClick={handleRight} className='CRicon'>
                 <div className="right"> <AiFillRightCircle /></div>
                </div>
              </div>
            </div>

            <div id='cardData'>
              <p>Tour Destination {data?.Destination}</p>
              <p>Duration {data?.Duration}</p>
              <p>Price {data?.Price}</p>
              <div className="CBtn">
                <button>book now</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PackageDetails;
