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

    return (
        <div className='container'>
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