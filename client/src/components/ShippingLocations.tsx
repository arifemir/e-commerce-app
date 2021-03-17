import React from 'react'
import { IShippingLocation } from '../@types';

interface Props {
  shippingLocations: IShippingLocation[]
}

const ShippingLocations = (props: Props) => {
  const {shippingLocations} = props;
  return (
    <div>
      {shippingLocations.map((shippingLocation) => (
        <span>{shippingLocation.address}</span>
      ))
      }
    </div>
  )
}

export default ShippingLocations
