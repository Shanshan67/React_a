const initState=[{id:'001',name:'tom',age:13}]
export default function person(preState=initState,action){
    const {type, data} = action
    switch (type) {
        case 'add_person':
            return {data,...preState}
        default:
            return preState
    }
}