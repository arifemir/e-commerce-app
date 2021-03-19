import React from 'react';

interface Props {
  rating: number;
  numReviews?: number;
  color?: string;
}

const Rating = (props: Props) => {
  const { rating, numReviews, color } = props;

  return (
    <div className='rating'>
      <span>
        <i style={{ color }} className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span>
        <i style={{ color }} className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span>
        <i style={{ color }} className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span>
        <i style={{ color }} className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span>
        <i style={{ color }} className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span className='ml-1'>{numReviews && numReviews + ' reviews'}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#9ACD32',
};

export default Rating;
