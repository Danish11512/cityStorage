import { useEffect, useState } from 'react'
import './OrderList.css'
import Order from 'components/order/Order'
import { useDebouncedCallback } from 'use-debounce'
import { getOrders } from 'utils/functions'

const OrderList = ({orders, priceMap}) => {
    const [searchValue, setSearchValue] = useState('')
    const [filteredOrders, setFilteredOrders] = useState(orders)
    const [showCount, setShowCount] = useState(false)
    const debouncer = useDebouncedCallback((value) => {setSearchValue(value)}, 100)
    console.log(priceMap)


    const handleOnChange = (e) => {
        const value = e.target.value
        debouncer(value)
    }

    useEffect(() => {
        const searchPrice = parseInt(searchValue)
        if(!isNaN(searchPrice)){
            const newOrders = getOrders(orders, priceMap, searchPrice)
            setFilteredOrders(newOrders)
        }
    }, [searchValue, orders, priceMap])
    


    return (
        <div className='order__list__container'>
            <div className='input__container'>
                <input type="text" 
                    placeholder="Search Price"
                    onChange={handleOnChange} />
                {showCount && 
                    <div className='search__count'></div>}
            </div>
            <div className='orders__container'>
                {filteredOrders.slice().reverse().map((order, index) => order && (
                    <div key={index}>
                        <Order orderObj={order}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderList