import CountUI from "../../components/Count"
import { connect } from "react-redux"
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction} from '../../redux/count_action'

export default connect(
    ,
    jia:number=>dispatch(createIncrementAction),
    jian:number=>dispatch(createDecrementAction),
    jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction)
)(CountUI)