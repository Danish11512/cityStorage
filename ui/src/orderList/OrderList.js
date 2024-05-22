import { useState } from 'react'
import './OrderList.css'
import Order from 'components/order/Order'

const OrderList = ({orders, priceMap}) => {
    const [searchValue, setSearchValue] = useState()
    const [showCount, setShowCount] = useState(false)

    const handleOnChange = (e) => {
        const value = e.target.value

        if (typeof value === 'number') {
            setSearchValue(Number(value))
        }
    }
    


    return (
        <div className='order__list__container'>
            <div className='input__container'>
                <input type="text" 
                    placeholder="Search Price"
                    value={searchValue}
                    onChange={handleOnChange} />
                {showCount && 
                    <div className='search__count'></div>}
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