const initState=[{id:'001',name:'tom',age:14}]
export default function person(preState=initState,action){
    const {type,data}=action
    switch (type) {
        case 'addPerson':
            return [data,...preState]
        default:
            return preState
    }
}