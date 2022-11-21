import React from 'react'
export default class Mail extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title = 'Title'
  }

  render() {
    return <p>tout vide</p>
  }
}
