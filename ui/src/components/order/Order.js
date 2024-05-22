import { useMemo } from 'react'
import './Order.css'

const Order = ({orderObj}) => {
    const orderValues = useMemo(() => (
        {
            customer: orderObj.customer,
            destination: orderObj.destination,
            item: orderObj.item, 
            price: orderObj.price,
            time: orderObj.sent_at_second
        }),
      [orderObj]
    )

    const orderColor = (status) => {
        switch (status) {
            case 'COOKED':
                return 'status__cooked'
            case 'DRIVER_RECEIVED':
                return 'status__driver__recieved'
            case 'DELIVERED':
                return 'status__delivered'
            case 'CANCELLED':
                return 'status__cancelled'
            default:
                return ''
        }
    }

    const borderColor = (status) => {
        switch (status) {
            case 'COOKED':
                return 'border__cooked'
            case 'DRIVER_RECEIVED':
                return 'border__driver__recieved'
            case 'DELIVERED':
                return 'border__delivered'
            case 'CANCELLED':
                return 'border__cancelled'
            default:
                return 'border__normal'
        }
    }

    return (
        <div className={`order__container ${borderColor(orderObj.event_name)}`}>
            <div className='cust__info'>
                <div>{orderValues.customer}</div>
                <div>{orderValues.destination}</div>
                <div>${orderValues.price}</div>
                <div className='food__item'>{orderValues.item}</div>
            </div>
            <div className='order__info'>
                <div className={orderColor(orderObj.event_name)}>
                    {orderObj.event_name}
                </div>
                <div className='order__time'>Ordered at: {orderValues.time}</div>
            </div>
        </div>
    )
}

export default Order