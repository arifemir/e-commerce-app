import * as React from 'react'
import { IShippingLocation } from '../../@types'

interface Props extends IShippingLocation {
  
}

const ShippingLocationItem = (props: Props) => {
  const { address, city, country, postalCode } = props;

  return (
    <div>
      
    </div>
  )
}

export default ShippingLocationItem
