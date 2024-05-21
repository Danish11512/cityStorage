export const orderReducer = (state, newDataArray) => {
    let { buffer, map, idMap, currentIndex, maxSize } = state;
    
    newDataArray.forEach(item => {
        const { price, id } = item;

        // Check if the item already exists using its ID
        if (idMap.has(id)) {
            // Item exists, find its index and update the buffer and map
            const existingIndex = idMap.get(id);
            const oldPrice = buffer[existingIndex].price;
            buffer[existingIndex] = item;

            // Update the map for price if it changed
            if (oldPrice !== price) {
                if (map.has(oldPrice)) {
                    const oldPriceIndices = map.get(oldPrice);
                    oldPriceIndices.delete(existingIndex);
                    if (oldPriceIndices.size === 0) {
                        map.delete(oldPrice);
                    }
                }

                if (!map.has(price)) {
                    map.set(price, new Set());
                }
                map.get(price).add(existingIndex);
            }
        } else {
            // New item or buffer overwrite
            const oldItem = buffer[currentIndex];
            if (oldItem) {
                // Remove old item from maps
                idMap.delete(oldItem.id);
                if (map.has(oldItem.price)) {
                    const oldPriceIndices = map.get(oldItem.price);
                    oldPriceIndices.delete(currentIndex);
                    if (oldPriceIndices.size === 0) {
                        map.delete(oldItem.price);
                    }
                }
            }

            // Insert the new item in the buffer
            buffer[currentIndex] = item;
            idMap.set(id, currentIndex);
            if (!map.has(price)) {
                map.set(price, new Set());
            }
            map.get(price).add(currentIndex);

            // Increment the index for the next insert
            currentIndex = (currentIndex + 1) % maxSize;
        }
    });

    return { buffer, map, idMap, currentIndex, maxSize };
};