const initState=[{id:'001',name:'tom',age:13}]
export default function person(perState=initState,action) {
    const {type,data}=action
    switch (type) {
        case 'addperson':
            return [data,...perState]
        default:
            return perState
    }
}