import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { AiTwotoneStar } from 'react-icons/ai'
import './style.css'

const Packages = () => {
  const { state } = useParams();
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityRef = collection(db, state);
        const snapshot = await getDocs(cityRef);
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        console.log(data);
        setCity(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state]);

  return (
    <div className='mainDiv'>
      <h2 style={{textAlign:'center',marginTop:'1rem'}}>{state} Packages</h2>
     
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="cardWrapper">
          {city.map((doc) =>
            <div className='packageCard'>
              <div className="cardImg">
                <img className='CardIMG' src={doc.Image} alt="" />
              </div>
              <div className="cardData">
                <p key={doc.id}>{doc.Duration}</p>
                <p>{doc.Destination}</p>
                <div className="star">
                  <AiTwotoneStar className='star' />
                  <AiTwotoneStar className='star' />
                  <AiTwotoneStar className='star' />
                  <AiTwotoneStar className='star' />
                </div>
                <p style={{ color: 'grey', marginTop: '0.4rem', fontSize: '13px' }}>20 reviews</p>
              </div>
              <div className="price">
                <p>from  {doc.Price}</p>

              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Packages;

