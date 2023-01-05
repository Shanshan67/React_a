import CountUI from "../../components/Count";
import {connect} from 'react-redux'

function a(state){
    return {count:state}
}

function b(dispatch){
    return {jia: (e) => {
        
    }}
}

export default connect(a,b)(CountUI)