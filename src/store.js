import { configureStore, createSlice } from "@reduxjs/toolkit"

//usestate 랑 비슷함
createSlice({
    name : 'state이름',
    initialState : 'state 값'
})

let user = createSlice({
    name : 'user',
    initialState : 'lee'
})

export default configureStore({
    reducer : { 
        user : user.reducer 
    }
})

