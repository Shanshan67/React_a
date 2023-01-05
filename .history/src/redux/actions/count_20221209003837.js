export const increment = data=>({type:'increment',data}) 
export const decrement = data=>({type:'decrement',data}) 

export const incrementAsync = (data,time)=>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        },time)
    }
} 
