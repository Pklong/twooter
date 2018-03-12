import React from 'react'
import { connect } from 'react-redux'

import { fetchTwoots } from '../../actions/twoots'
import { getTwoots } from '../../reducers/twoot'

class TwootFeed extends React.Component {
  componentDidMount() {
    this.props.fetchTwoots()
  }
  render() {
    return (
      <ul>{this.props.twoots.map(twoot => <li>{twoot.body}</li>)}</ul>
    )
  }
}

const mapStateToProps = state => ({
  twoots: getTwoots(state)
})

export default connect(mapStateToProps, { fetchTwoots })(TwootFeed)
