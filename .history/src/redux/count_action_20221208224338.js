export const createIncrementAction = data=>({type:'increment',data}) 
export const createDecrementAction = data=>({type:'decrement',data}) 

export const createIncrementAsyncAction = (data,time)=>{
    return () => {
        setTimeout( =() => {
            {type:'decrement',data}
        },time)
    }
} 
