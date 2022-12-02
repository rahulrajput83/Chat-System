import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from '../Images/profile.jpg'
import { MdClose } from 'react-icons/md'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'Rahul Rajput',
            friend: this.props.data
        }
    }
    render() {
        return (
            <div className='Profile'>
                <div className='userDetail'>
                    <img src={profile} alt='' />
                    <div className='user'>
                        <span>{this.state.userName}</span>
                        <span>Active Now</span>
                    </div>
                    <button>Logout</button>
                </div>
                <div className='search'>
                    <input type='text' placeholder='Enter name to search' />
                    <button>
                        <MdClose className='icon' />
                    </button>
                </div>
                <div className='friends'>
                    {this.state.friend.map((e, index) => {
                        return (
                            <Link to={`/${e.name}`} className='data' key={`friend-${index}`}>
                                <img src={e.profile} alt={e.name} />
                                <div className='user'>
                                    <span>{e.name}</span>
                                    <span>{e.chat}</span>
                                </div>
                                <span style={{color: e.online ? '#404040' : '#bdbdbd'}} className='status'>
                                    •
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
