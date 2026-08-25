import { createContext, useContext, useState, useEffect } from 'react';
import { defaultReviews } from '../data/reviews';

const ReviewContext = createContext();

export const useReviews = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('reviews');
      return saved ? JSON.parse(saved) : defaultReviews;
    } catch { return defaultReviews; }
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (newReview) => {
    const reviewToAdd = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };
    setReviews(prev => [reviewToAdd, ...prev]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};