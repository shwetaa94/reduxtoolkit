# Getting Started with Create React App

This module is for better understanding of redux


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `learn`

1. first create a store.js file
   use {configureStore} to create a store
2. make slice.js file
   create initalState ={todo:[]} inside an object

3. const slicer = createSlice({
    name: "",
    initialState,
    reducers:{
        reducer-fxn1
        reducer-fxn2
    }
})

4. export slicer, reducers, reducer-fx1 reducer-fxn2
5. wrap App component in <provider store={store}> <App /> <provider>
6. to make add, remove operation use Dispatch
    const dispatch = useDispatch()
7. to get data from store use selector
    const data = useSelector( (state)=> state.todos) //state contain all initial-states names like todos
