import { useCallback, useEffect, useState } from 'react'
import './OrderList.css'
import Order from 'components/order/Order'
import { useDebouncedCallback } from 'use-debounce'
import { getOrders } from 'utils/functions'

const OrderList = ({orders, priceMap}) => {
    const [searchValue, setSearchValue] = useState('')
    const [filteredOrders, setFilteredOrders] = useState(orders)
    const [showCount, setShowCount] = useState(false)

    const filterOrders = useDebouncedCallback((search) => {
        if(typeof search !== 'number'){
            filteredOrders(orders)
        }else {
            const newOrders = getOrders(orders, priceMap, searchValue)
            setFilteredOrders(newOrders)
        }
    }, 500)


    const handleOnChange = useCallback((e) => {
        const value = e.target.value
        setSearchValue(value)
        filterOrders(value)
    }, [filterOrders])
    


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