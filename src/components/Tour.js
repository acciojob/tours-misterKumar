import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p id='tour-item-para-rec6d6T3q5EBIdCfD'>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button id='see-more-rec6d6T3q5EBIdCfD' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'See Less' : 'Read More'}
          </button>
        </p>
        <button className="delete-btn" id="delete-btn-rec6d6T3q5EBIdCfD" onClick={() => removeTour(tour.id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
