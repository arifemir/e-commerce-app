import * as React from 'react';
import { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
//react-redux
import { useSelector } from 'react-redux';
//types
import { IShippingLocation } from '../../@types';
import { IShippingState } from '../../store/shipping/shippingTypes';
import { IRootState } from '../../store/store';
//components
import ShippingLocationItem from './ShippingLocationItem';


interface Props {
  shippingLocations: IShippingLocation[];
}

const ShippingLocations = (props: Props) => {
  const { shippingLocations } = props;
  
  const { selectedShippingLocationIndex } = useSelector<IRootState, IShippingState>(state => state.shipping);

  return (
    <Accordion defaultActiveKey={String(selectedShippingLocationIndex)}>
      {shippingLocations.map((shippingLocation, i) => (<ShippingLocationItem index={i} key={i} {...shippingLocation} />))}
    </Accordion>
  )
}

export default ShippingLocations
