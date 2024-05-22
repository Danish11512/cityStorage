import './Order.css'

const Order = ({orderObj}) => {

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
                <div>{orderObj.customer}</div>
                <div>{orderObj.destination}</div>
                <div className='food__item'>{orderObj.item}</div>
            </div>
            <div className='order__info'>
                <div className={orderColor(orderObj.event_name)}>
                    {orderObj.event_name}
                </div>
            </div>
        </div>
    )
}

export default Order