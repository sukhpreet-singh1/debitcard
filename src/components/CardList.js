import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent'; // Import your card component

const CardList = ({ dataArray }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const cardsPerPage = 5;

  useEffect(() => {
    if (dataArray.length > 0) {
      const endIndex = Math.min(startIndex + cardsPerPage, dataArray.length);
      setVisibleCards(dataArray.slice(startIndex, endIndex));
    }
  }, [dataArray, startIndex]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight === scrollHeight) {
      // Scrolled to the bottom
      setStartIndex((prevStartIndex) =>
        Math.min(prevStartIndex + cardsPerPage, dataArray.length - cardsPerPage)
      );
    } else if (scrollTop === 0) {
      // Scrolled to the top
      setStartIndex((prevStartIndex) => Math.max(prevStartIndex - cardsPerPage, 0));
    }
  };

  return (
    <div style={{ height: '500px', overflow: 'auto' }} onScroll={handleScroll}>
      {visibleCards.map((card, index) => (
        <CardComponent key={index} data={card} />
      ))}
    </div>
  );
};

export default CardList;
