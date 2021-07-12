import React from 'react';
//redux
import { useSelector } from 'react-redux';
//types
import { IRootState } from '../store/store';
import { IShippingState } from '../store/shipping/shippingTypes';
//components
import { Loader, Message, AddShippingLocation } from '../components';

const AddShippingLocationPage = () => {
  const { loading, error } = useSelector<IRootState, IShippingState>(state => state.shipping);

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error.message}</Message>}
      <AddShippingLocation />
    </>
  );
};

export default AddShippingLocationPage;
