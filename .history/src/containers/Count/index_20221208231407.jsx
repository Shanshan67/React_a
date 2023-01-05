import CountUI from "../../components/Count"
import { connect } from "react-redux"
import { number } from "prop-types"

export default connect(
    ,
    jia:number=>dispatch(createIncrementAction),
    jian:number=>dispatch(createDecrementAction),
    jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction)
)(CountUI)