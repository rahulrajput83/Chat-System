import React, { Component } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Chat from './Components/Chat'
import Profile from './Components/Profile'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
            name: 'Andrew Neil',
            profile: 'http://zamkolink.com/assets/img/memoji1.png',
            chat: "You: Hey Andrew. What's up?",
            online: true
        },
        {
            name: 'Rishabh Jain',
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnj4SxLZVRypqE02NAOIPKNIFvY_A4RLbbUXx-gV5uGE81DPOcWSUPftZ8oBxeG-Mmv8&usqp=CAU',
            chat: "Hey, How are you?",
            online: false
        },
        {
            name: 'Andrew Carter',
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZldEPvFgz5ysckNAa5ztdf4Exw00bb1a9qA&usqp=CAU',
            chat: 'Hello, Andrew Carter',
            online: true
        },
        {
            name: 'Jasmica Calvo',
            profile: 'https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png',
            chat: 'This chat App is awesome.',
            online: true
        },
        {
            name: 'Prakash Shahi',
            profile: 'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png',
            chat: "You: Hey, Prakash. Let's meet again.",
            online: false
        }
    ]
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/:id/' element={<Chat data={this.state.data} />} />
          <Route path='/' element={<Profile data={this.state.data} />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
