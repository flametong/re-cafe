import { createSlice } from "@reduxjs/toolkit";
import { linearSearchById } from "../../../logic/appLogic";

const initialState = []

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addOne: {
            reducer(state, action) {
                // check if element is already in the state
                // otherwise add it to the state
                const index = linearSearchById(state, action.payload.item.id)
                
                if (index === -1) {
                    state.push({
                        ...action.payload.item,
                        basketCount: action.payload.quantity
                    })
                } else {
                    state.at(index).basketCount += action.payload.quantity
                }
            },
            prepare(item, quantity) {
                return {
                    payload: { item, quantity }
                }
            }
        },
        deleteOne(state, action) {
            const index = linearSearchById(state, action.payload.id)
            state.splice(index, 1) // delete the element from state
        },
        increaseCountByOne(state, action) {
            const index = linearSearchById(state, action.payload.id)
            state.at(index).basketCount += 1
        },
        decreaseCountByOne(state, action) {
            const index = linearSearchById(state, action.payload.id)
            if (state.at(index).basketCount > 1) {
                state.at(index).basketCount -= 1
            }
        },
    }
})

export const {
    addOne,
    deleteOne,
    increaseCountByOne,
    decreaseCountByOne
} = basketSlice.actions

export default basketSlice.reducer

export const selectBasket = (state) => state.basket
export const selectCount = (state) => state.basket
                                            .reduce((acc, item) => acc + item.basketCount, 0)
export const selectTotalPrice = (state) => state.basket
                                            .reduce((acc, item) => acc + item.price * item.basketCount, 0)