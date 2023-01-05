import CountUI from "../../components/Count";
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

const mapStateToProps=state=>({count:state})

const mapDispatchToProps = dispatch => ({
        jia: data => dispatch(createIncrementAction(data)),
        jian: data => dispatch(createDecrementAction(data)),
        jiaAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
    })


export default connect(mapStateToProps,mapDispatchToProps)(CountUI)