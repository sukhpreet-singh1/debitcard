import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import Phone from "./phone.jpg";
import "./Home.scss";

function Home() {
    const [data, setData] = useState([]);  
   
    const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleScroll = (e) => {
    
    const cardHeight = e.target.clientHeight / 1;     
     const scrollTop = e.target.scrollTop;  
    
    const cardIndex = Math.ceil(scrollTop / cardHeight);    
    setActiveCardIndex(cardIndex);
  };

  

    useEffect(() => {
        
        axios.get('https://my-json-server.typicode.com/sukhpreet-singh1/debit-backend/posts')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []); 

      

    return (
        <div className='top_container'>
            <h3 className='subheading1'>Willing to Create</h3>
            <h3 className='subheading2'>Something similar</h3>
            <h3 className='grayheading2'>Together!</h3> 
            <h1 className='heading'>Debit</h1>
            <div className='grayHeading3'>
              <div>Go</div>
              <div>Through</div>
            </div>
            <div className='grayHeading4'>Right Away</div>
            <p className='smallHeading'>Cashback</p>
            <p className='smallHeading1'>Cards</p>
            <p className='smallHeading2'>No Hidden Fees</p>
            <p className='smallHeading3'>No Late fees</p>
            <p className='smallHeading4'>Simple,secure, magical card activation.</p>
            <p className='smallHeading5'>Cards</p>
            <p className='smallHeading6'>No Hidden Fees</p>
            <p className='smallHeading7'>No Late fees</p>
            <p className='smallHeading8'>Get 8% Daily Cash back every time you pay with Clearly</p>
            
            <p className='mobileHeading1'>Manage</p>
            <p className='grayHeading1'>Your</p>
            <p className='mobileHeading2'>Cards</p>


            <img className="phone" alt="x" src={Phone}/>
            <h1 className='heading2'>Card</h1>
            <h3 className='subheading3'>No wondering</h3>
            <h3 className='subheading4'>See Each Purchase</h3>
            <div className='home_container' onScroll={handleScroll}  >               
              {data.slice(activeCardIndex, activeCardIndex + 20).map((data, index) => (
                <Card key={data.id} index={index} cardDetails={data} />
              ))}      
            </div>
        </div>
  )
}

export default Home