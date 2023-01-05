const initState=[{id:'01',name:'tom',age:13}]
export default function person(preState=initState,action){
    const {type,data}=action
    switch (type) {
        case 'addPerson':
            return [data,...preState]
        default:
            return preState
    }
}