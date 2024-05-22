import './OrderList.css'
import Order from 'components/order/Order'

const OrderList = ({orders, priceMap}) => {


    return (
        <div className='order__list__container'>
            <div className='input__container'>
                <input type="text" placeholder="Search..." />
            </div>
            <div className='orders__container'>
                {orders.slice().reverse().map((order, index) => order && (
                    <div key={index}>
                        <Order orderObj={order}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderList