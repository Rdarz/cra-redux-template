import { connect } from "react-redux"
import Home from "./components"
import { getFlightDetails } from "./HomeApi"

const mapStateToProps = state => ({
  flightList: state.home.getFlightDetails
})

const mapDispatchToProps = {
  getFlightDetails
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
