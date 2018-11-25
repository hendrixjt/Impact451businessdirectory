import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

class MVideo extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='301570567' onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}

ReactDOM.render(
  <ModalVideo />,
    document.getElementById('root')
);
export default MVideo