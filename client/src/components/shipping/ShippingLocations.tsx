import * as React from 'react';
import { Accordion } from 'react-bootstrap';
//react-redux
import { useSelector } from 'react-redux';
//types
import { IShippingLocation } from '../../@types';
import { IShippingState } from '../../store/shipping/shippingTypes';
import { IRootState } from '../../store/store';
//components
import ShippingLocationItem from './ShippingLocationItem';
import EmptyState from '../common/EmptyState';

interface Props {
  shippingLocations: IShippingLocation[];
}

const ShippingLocations = (props: Props) => {
  const { shippingLocations } = props;

  const { selectedShippingLocationIndex } = useSelector<IRootState, IShippingState>(state => state.shipping);

  return shippingLocations.length > 0 ? (
    <Accordion defaultActiveKey={String(selectedShippingLocationIndex)}>
      {shippingLocations.map((shippingLocation, i) => (
        <ShippingLocationItem index={i} key={i} {...shippingLocation} />
      ))}
    </Accordion>
  ) : (
    <EmptyState
      title='Shipping locations empty'
      content={"You haven't added a location before, you can add it by clicking the button on the right if you want."}
    />
  );
};

export default ShippingLocations;
