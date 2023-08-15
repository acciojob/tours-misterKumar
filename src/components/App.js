import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import tourData from './TourData'; // Import the predefined tour data

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(tourData); // Use the predefined tour data

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refreshTours = () => {
    setLoading(false);
    setTours(tourData); // Reset to the predefined tour data
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="main">
        <h2 className="title">Loading...</h2>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="main">
        <h2 className="title">No more tours</h2>
        <button className="btn" onClick={refreshTours}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="main">
      <h2 className="title">Our Tours</h2>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
};

export default App;
