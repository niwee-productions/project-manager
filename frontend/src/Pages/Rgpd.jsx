import React from 'react'
export default class Rgpd extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title = 'Title'
  }

  render() {
    return <p>Here you are</p>
  }
}
