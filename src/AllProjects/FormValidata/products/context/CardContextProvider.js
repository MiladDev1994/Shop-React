import React, {createContext, useReducer} from 'react';
export const CardContext = createContext();

const initialCard = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const sumItem = items => {
    const itemsCounter = items.reduce((total , product) => total+product.quantity , 0);
    const total = items.reduce((total , product) => total + product.price * product.quantity , 0);
    // console.log(items)
    return {itemsCounter , total}
}

const reducer = (state , action) => {
    // console.log(state)
    switch (action.type){
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }

            return {
                ...state,
                ...sumItem(state.selectedItems),
                // selectedItems: [...state.selectedItems]
            }

        case "REMOVE_ITEM":
            const newselectItem = state.selectedItems.filter(item => item.id !== action.payload.id);

            const newstate = {
                selectedItems: [...newselectItem],
                checkout: false,
            }

            return {
                ...newstate,
                ...sumItem(newstate.selectedItems),
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItem(state.selectedItems),
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItem(state.selectedItems),
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            }

        default:
            return {
                ...state
            }
    }

}

const CardContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , initialCard)

    return (
        <CardContext.Provider value={{state, dispatch}}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;