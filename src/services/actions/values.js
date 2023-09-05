const SET_VALUE = "SET_VALUE"

const setValue = (payload) => ({ type: SET_VALUE, category: payload.category, value: payload.value })

export { SET_VALUE, setValue }