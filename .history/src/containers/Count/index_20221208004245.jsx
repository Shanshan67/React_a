import CountUI from "../../components/Count";
import {connect} from 'react-redux'
import {createIA}

function a(state){
    return {count:state}
}

function b(dispatch){
    return {jia: (data) => {
        dispatch({type:'increment', data})
    }}
}

export default connect(a,b)(CountUI)