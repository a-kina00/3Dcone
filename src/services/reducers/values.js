import { SET_VALUE } from '../actions/values.js'

const initialState = {
    height: 1,
    radius: 1,
    segments: 10,
    smooth: false
};

const valueList = (state = initialState, action) => {
    switch (action.type) {

        case SET_VALUE:
            return { ...state, [action.category]: action.value };

        default:
            return state
    }
}

export { valueList }