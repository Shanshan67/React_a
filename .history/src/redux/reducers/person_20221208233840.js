const initState=[{id:'001',name:'tom',age:'13'}]
export default function countReducer(preState=initState,action){
    const {type, data} = action
    switch (type) {
        case 'increment':
            return preState+data
        case 'decrement':
            return preState-data
        default:
            return preState
    }
}