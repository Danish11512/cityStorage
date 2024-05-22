export const orderReducer = (state, newOrders) => {
    let { orderBuffer, priceMap, idMap, currentIndex, size } = state
    
    newOrders.forEach(item => {
        const { price, id } = item

        if (idMap.has(id)) {
            orderBuffer[idMap.get(id)] = item
            
        } else {            
            if (orderBuffer[currentIndex]) {
                const oldOrder = orderBuffer[currentIndex]
                idMap.delete(oldOrder.id)
                const oldPriceSet = priceMap.get(oldOrder.price)
                oldPriceSet.delete(currentIndex)

                if (oldPriceSet.size === 0) {
                    priceMap.delete(oldOrder.price)
                }
            }

            orderBuffer[currentIndex] = item
            idMap.set(id, currentIndex)

            if (!priceMap.has(price)) {
                priceMap.set(price, new Set())
            }

            priceMap.get(price).add(currentIndex)
            currentIndex = (currentIndex + 1) % size
        }
    })

    return { orderBuffer, priceMap, idMap, currentIndex, size }
}