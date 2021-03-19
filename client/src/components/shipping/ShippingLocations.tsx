import React from 'react'
import { Accordion } from 'react-bootstrap';
//react-redux
import { useSelector } from 'react-redux';
//types
import { IShippingLocation } from '../../@types';
//components
import ShippingLocationItem from './ShippingLocationItem';

interface Props {
  shippingLocations: IShippingLocation[]
}

const ShippingLocations = (props: Props) => {
  const {shippingLocations} = props;
  return (
    <Accordion defaultActiveKey="0">
      {shippingLocations.map((shippingLocation) => (<ShippingLocationItem {...shippingLocation} />))}
    </Accordion>
  )
}

export default ShippingLocations
