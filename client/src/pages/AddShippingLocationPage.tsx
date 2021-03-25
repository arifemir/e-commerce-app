import React from 'react';
//redux
import { useSelector } from 'react-redux';
//types
import { IRootState } from '../store/store';
import { History, Location } from 'history';
import { IShippingState } from '../store/shipping/shippingTypes';
//components
import Loader from '../components/common/Loader';
import Message from '../components/common/Message';
import AddShippingLocation from '../components/shipping/AddShippingLocation';

interface Props {
  history: History;
  location: Location;
}

const AddShippingLocationPage = (props: Props) => {
  const { history, location } = props;

  const { loading, error } = useSelector<IRootState, IShippingState>(state => state.shipping);

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error.message}</Message>}
      <AddShippingLocation {...props} />
    </>
  );
};

export default AddShippingLocationPage;
