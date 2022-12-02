import React, { Component } from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import withRouter from './withRouter';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      userName: 'Rahul Rajput',
      data: [
        {
          me: 'Hey Rahul Rajput!'
        },
        {
          friend: 'Hello Friend'
        },
        {
          friend: 'How are you?'
        },
        {
          me: "I'm fine Rahul Rajput & what about you?"
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
  }
  Change = (e) => {
    this.setState({message: e.target.value})
  }
  post = () => {
    this.setState({data: [...this.state.data, {me: this.state.message}]})
    this.setState({message: ''})
  }
  render() {
    const userFriend = this.props.data.find((e) => e.name === this.props.params.id);
    console.log(userFriend)
    return (
      <div className='Chat'>
        <div className='userDetail'>
          <Link to='/' className='icon'>
            <FaArrowLeft className='icon' />
          </Link>
          <img src={userFriend.profile} alt='' />
          <div className='user'>
            <span>{userFriend.name}</span>
            <span>{userFriend.online  ? 'Active Now': 'Offline'}</span>
          </div>
        </div>
        <div className='chatDetail'>
          {this.state.data.map((ele, index) => {
            return (
              <span className='message' key={`message-${index}`} style={ele.hasOwnProperty('friend') ? { color: 'black', background: 'white', borderBottomLeftRadius: 0, marginRight: 'auto' } : { color: 'white', marginLeft: 'auto', borderBottomRightRadius: 0 }}>{ele.hasOwnProperty('friend') ? ele.friend : ele.me}</span>
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