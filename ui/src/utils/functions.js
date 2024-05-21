export const orderReducer = (state, newData) => {
    const {orderBuffer, priceMap, currentIndex, size} = state

    newData.forEach(order => {
        const { price } = order

        if(orderBuffer[currentIndex]){

            const oldOrder = orderBuffer[currentIndex]
            const oldPriceSet = priceMap.get(oldOrder.price)

            if(oldPriceSet){
                oldPriceSet.delete(currentIndex)
            }
            
            if(oldPriceSet?.size === 0){
                priceMap.delete(oldOrder.price)
            }

        }

        orderBuffer[currentIndex] = order

        if(!priceMap.has(price)){
            priceMap.set(price, new Set())
        }

        priceMap.get(price).add(currentIndex)
        
    })

    console.log(orderBuffer)
    return {orderBuffer, priceMap, currentIndex: (currentIndex + 1) % size, size}
}