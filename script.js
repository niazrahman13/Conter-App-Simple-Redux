// Initial State

const initialState = {
    value : 0
}

// Select Dom Elements

const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

// Action Type Declare

const INCREMENT = 'Increment'
const DECREMENT = 'Decrement'

// Button Click

incrementEl.addEventListener("click", () => {
    store.dispatch(increment(1))
})

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(1))
})

// Action Type Function

const increment = (value) => {
    return {
        type: INCREMENT,
        payLoad: value
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payLoad: value
    }
}


// Reducer Function

const counterReducer = (state = initialState, action) => {
    if( action.type == INCREMENT ){
        return{
            ...state,
            value: state.value + action.payLoad
        }
    }else if ( action.type == DECREMENT ){
        return{
            ...state,
            value: state.value - action.payLoad
        }
    }else{
        return state
    }
}

// Create Redux Store

const store = Redux.createStore(counterReducer);

// Store Subscribe for Rendering

const render = ()=>{
    const state = store.getState()
    counterEl.innerText = state.value.toString()
}

render()

store.subscribe(render)