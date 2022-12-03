import React, { Component } from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import withRouter from './withRouter';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userFriend: this.props.data.find((e) => e.name === this.props.params.id),
      message: '',
      userName: 'Rahul Rajput',
      data: []
    }

  };
  componentDidMount() {
    this.setState({
      data: [
        {
          me: `Hey ${this.state.userFriend.name}!`
        },
        {
          friend: 'Hello Friend'
        },
        {
          friend: 'How are you?'
        },
        {
          me: `I'm fine ${this.state.userFriend.name} & what about you?`
        },
        {
          friend: "I'm fine too"
        },
        {
          me: 'What you used to create this Chat App?'
        },
        {
          friend: 'I used React.Js.'
        }
      ]
    }
    )
  }

  Change = (e) => {
    this.setState({ message: e.target.value })
  }
  post = () => {
    if (this.state.message !== '') {
      this.setState({ data: [...this.state.data, { me: this.state.message }] })
      this.setState({ message: '' })
    }
  }
  render() {
    /* const userFriend = this.props.data.find((e) => e.name === this.props.params.id); */

    return (
      <div className='Chat'>
        <div className='userDetail'>
          <Link to='/' className='icon'>
            <FaArrowLeft className='icon' />
          </Link>
          <img src={this.state.userFriend.profile} alt='' />
          <div className='user'>
            <span>{this.state.userFriend.name}</span>
            <span>{this.state.userFriend.online ? 'Active Now' : 'Offline'}</span>
          </div>
        </div>
        <div className='chatDetail'>
          {this.state.data.map((ele, index) => {
            return (
              <div className='message' key={`message-${index}`} >
                {ele.hasOwnProperty('friend') ? <img src={this.state.userFriend.profile} alt='' /> : null}
                <span style={ele.hasOwnProperty('friend') ? { color: 'black', background: 'white', borderBottomLeftRadius: 0, marginRight: 'auto' } : { color: 'white', marginLeft: 'auto', borderBottomRightRadius: 0 }}>{ele.hasOwnProperty('friend') ? ele.friend : ele.me}</span>
              </div>
            )
          })}
        </div>
        <div className='send'>
          <input value={this.state.message} onChange={this.Change} type='text' placeholder='Enter name to search' />
          <button onClick={this.post}>
            <IoSend className='icon' />

          </button>
        </div>
      </div>
    )
  }
}


export default withRouter(Chat)