import CountUI from "../../components/Count";
import {connect} from 'react-redux'
import {createIncrementAction} from '../../redux/count_action'

function a(state){
    return {count:state}
}

function b(dispatch){
    return {jia: (data) => {
        dispatch(createIncrementAction(data))
    }}
}

export default connect(a,b)(CountUI)