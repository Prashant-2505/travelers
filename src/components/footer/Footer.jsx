import './style.css';
import { db } from '../../firebase';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [subCollection, setSubCollection] = useState([]);
  const [loading, setLoading] = useState(true);

/* This is a `useEffect` hook that is used to fetch data from the Firebase database when the component
mounts. It runs only once because the dependency array `[]` is empty. The `fetchData` function is an
asynchronous function that retrieves data from the `HIMACHAL PARDESH` collection in the database
using the `collection` and `getDocs` functions from the Firebase library. Once the data is
retrieved, it is stored in the `subCollectionData` array and then set to the `subCollection` state
using the `setSubCollection` function. Finally, the `loading` state is set to `false` to indicate
that the data has been loaded. If there is an error during the data retrieval process, the error is
logged to the console and the `loading` state is set to `false`. */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const subCollectionRef = collection(db, 'HIMACHAL PARDESH');
        const subCollectionSnapshot = await getDocs(subCollectionRef);
        const subCollectionData = []
        subCollectionSnapshot.forEach((doc)=>{
          subCollectionData.push({...doc.data(), id: doc.id})
        })
        console.log(subCollectionData);
        setSubCollection(subCollectionData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='footer'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        subCollection.map((item) => (
          <div key={item.id}>
            <Link to={`/about/${item.id}`}>
              <p>{item.id}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Footer;
