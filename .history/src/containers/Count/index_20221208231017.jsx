import CountUI from "../../components/Count"
import { connect } from "react-redux"

export default connect(
    ,
    jia:number=>dispatch(createIncrementAction),
    jian:number=>dispatch(createDecrementAction),
)(CountUI)