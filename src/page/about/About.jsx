import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase';

const About = () => {

  const [tourData, setTourData] = useState([])


  const { id } = useParams();

  useEffect(() => {
    async function fetchdata(id) {
      const docRef = doc(db, 'HIMACHAL PARDESH', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setTourData({ ...docSnap.data(), id: docSnap.id })
      }
      console.log(tourData.Destination)

    }
    fetchdata(id)
  },[id])

  return (
    <div style={{ backgroundColor: 'red', height: '100vh' }}>
      <p style={{ padding: '5rem' }}>{id}</p>
      <p style={{ padding: '5rem' }}>{tourData.Destination}</p>

    </div>
  )
}

export default About
