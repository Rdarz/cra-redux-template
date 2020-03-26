import React, { Component } from "react"
import "views/home/HomeStyle.scss"
import Header from "views/partials/header"

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
      <div className="">
        <Header />
        <div className="container">
          {flightList &&
            flightList.length &&
            flightList.map(item => {
              return <h2>{item.name}</h2>
            })}
        </div>
      </div>
    )
  }
}
export default Home
