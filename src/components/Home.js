import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import Phone from "./phone.jpg";
import "./Home.scss";
import NewCard from './NewCard';
function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from the mock API
        axios.get('http://localhost:3000/posts')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []); 

    return (
        <div className='top_container'>
            <img className="phone" alt="x" src={Phone}/>
            <div className='home_container'>
                {data.map((cardDetails,index) => {
                    return <Card index={index} cardDetails={cardDetails}/>
                })}
                
            </div>

            
            
        </div>
  )
}

export default Home