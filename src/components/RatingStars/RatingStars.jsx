import React, {useState} from 'react'
import Rating from "react-rating-stars-component";
function RatingStars({initialRating}) {
    const [rating, setRating] = useState(initialRating);
  
    return (
      <div>
        <Rating
          count={5}
          size={24}
          value={rating}
          onChange={(value) => setRating(value)}
        />
      </div>
    );
  }
export default RatingStars