import { items } from "../AllData"

export const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}

export const countPrice = (arr) => {
    return arr
            .reduce((acc, currVal) => acc + currVal.price, 0)
}

export const getItemsByCategory = (category) => {
    return items.filter((item) => item.category === category)
}

export const getItemsByTrending = () => {
    return items.filter((item) => item.trending)
}

export const binarySearchById = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        const currentId = sortedArray[middle].id

        if (currentId === key) {
            // found the key
            return middle;
        } else if (currentId < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

export const linearSearchById = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) return i
    }
    return -1
}