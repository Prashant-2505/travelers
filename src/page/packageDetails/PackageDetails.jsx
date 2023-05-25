import React from 'react';
import './style.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
  const params = useParams()
  console.log(params)
  return (
    <div id='mainDiv'>
     
    </div>
  );
};

export default PackageDetails;
