const store = require('./app/store')
const  fetchUsers  = require('./features/user/userSlice').fetchUsers
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions

console.log("initial state",store.getState())
const unsubcribe = store.subscribe(()=>console.log("update state",store.getState()))
// const unsubcribe = store.subscribe(()=>{})


store.dispatch(fetchUsers())

// store.dispatch(cakeActions.oredered(1))
// store.dispatch(cakeActions.oredered(1))
// store.dispatch(cakeActions.oredered(1))
// store.dispatch(cakeActions.restocked(3))


// store.dispatch(iceCreamActions.orederedIce(1))
// store.dispatch(iceCreamActions.orederedIce(1))
// store.dispatch(iceCreamActions.orederedIce(1))
// store.dispatch(iceCreamActions.restockedIce(3))


// unsubcribe()


