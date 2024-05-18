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
    orders: Map<String, Order> | undefined
    prices: Map<number, string[]> | undefined
}

export interface ChildrenInterface {
    children: ReactNode
}

