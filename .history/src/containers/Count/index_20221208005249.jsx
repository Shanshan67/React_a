import CountUI from "../../components/Count";
import {connect} from 'react-redux'
import {createIncrementAction} from '../../redux/count_action'

function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        jia: data => dispatch(createIncrementAction(data)),
        jia: data => dispatch(createIncrementAction(data)),
        jia: data => dispatch(createIncrementAction(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)