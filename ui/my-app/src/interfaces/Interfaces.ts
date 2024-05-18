import { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from "react";

export interface Order {
    customer: String
    destination: String
    event_name: String
    id: String
    item: String
    price: Number
    sent_at_second: Number
}

export interface SocketProviderInterface extends PropsWithChildren {}

export interface GlobalContextInterface {
    orders: Map<string, {}> | undefined
    setOrders: Dispatch<SetStateAction<Map<string, {}> | undefined>>
    prices: Map<number, string[]> | undefined
    setPrices: Dispatch<SetStateAction<Map<number, string[]> | undefined>>
}

export interface GlobalContextProviderChildrenInterface {
    children: ReactNode
}

