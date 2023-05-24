import React from 'react';
import './style.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const PackageDetails = ({ data }) => {
  return (
    <div id='mainDiv'>
      <p>{data.Destination}</p>
    </div>
  );
};

export default PackageDetails;
