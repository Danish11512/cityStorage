import { useContext, useEffect, useState } from 'react'
import './MainPage.css'
import { SocketContext } from 'components/socket/SocketContext'
import { Order } from 'interfaces/DataInterfaces'

const MainPage = (): JSX.Element => {

    const socket = useContext(SocketContext)

    const [orders, setOrders] = useState<Order[] | null>()

    useEffect(() => {
        

    }, [socket])

    return (
    <div>
        <p>Currently we got</p>
        {/* <div>{JSON.stringify()}</div> */}
    </div>
    )
}

export default MainPage