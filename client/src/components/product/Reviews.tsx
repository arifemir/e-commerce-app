import React, { useState } from 'react';
import { FormControlProps } from 'react-bootstrap';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, match } from 'react-router-dom';
import { createReview } from '../../store/product-detail/productDetailActions';
import { IProductDetailState } from '../../store/product-detail/productDetailTypes';
import { IRootState } from '../../store/store';
import { IUserState } from '../../store/user-auth/userAuthTypes';
import Loader from '../common/Loader';
import Message from '../common/Message';
import Rating from './Rating';

interface Props {
  match: match<{ id: string }>;
}

const Reviews = (props: Props) => {
  const { match } = props;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const { user } = useSelector<IRootState, IUserState>(state => state.userAuth);
  const { loading, error, product, reviews, createReviewSuccess } = useSelector<IRootState, IProductDetailState>(
    state => state.productDetail,
  );

  const submitHandler = (e: React.FormEvent<FormControlProps>) => {
    e.preventDefault();
    dispatch(
      createReview(match.params.id, {
        rating,
        comment,
      }),
    );
  };

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length === 0 && <Message>No Reviews</Message>}
      <ListGroup variant='flush'>
        {reviews.map(review => (
          <ListGroup.Item key={review._id}>
            <strong>{review.user?.name}</strong>
            <Rating rating={review.rating} />
            <p>{review?.createdAt?.toString().substring(0, 10)}</p>
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <h2>Write a Customer Review</h2>
          {createReviewSuccess && <Message variant='success'>Review submitted successfully</Message>}
          {user ? (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='rating'>
                <Form.Label>Rating</Form.Label>
                <Form.Control as='select' value={rating} onChange={e => setRating(Number(e.target.value))}>
                  <option value=''>Select...</option>
                  <option value='1'>1 - Poor</option>
                  <option value='2'>2 - Fair</option>
                  <option value='3'>3 - Good</option>
                  <option value='4'>4 - Very Good</option>
                  <option value='5'>5 - Excellent</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='comment'>
                <Form.Label>Comment</Form.Label>
                <Form.Control as='textarea' rows={3} value={comment} onChange={e => setComment(e.target.value)}></Form.Control>
              </Form.Group>
              <Button disabled={loading} type='submit' variant='primary'>
                Submit
              </Button>
            </Form>
          ) : (
            <Message>
              Please <Link to='/login'>sign in</Link> to write a review{' '}
            </Message>
          )}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Reviews;
