import React, { Component } from "react"
import "./../HomeStyle.scss"

export class Home extends Component {
  state = {
    flightList: null
  }
  componentDidMount() {
    const { getFlightDetails } = this.props
    console.log("INSIDE")
    getFlightDetails().then(res => {
      console.log("RES======>>>", res)
      this.setState({
        flightList: res.data
      })
    })
  }
  render() {
    const { flightList } = this.state
    return (
      <div className="container">
        <h1>Hello World</h1>
        {flightList &&
          flightList.length &&
          flightList.map(item => {
            return <h2>{item.name}</h2>
          })}
      </div>
    )
  }
}
export default Home
