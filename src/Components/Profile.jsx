import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from '../Images/profile.jpg'
import { MdClose } from 'react-icons/md'

/* Profile Component */
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            userName: 'Rahul Rajput',
            friend: this.props.data
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search) {
            
            if(this.state.search !== '') {
                this.setState({friend: this.state.friend.filter((ele) => 
                        ele.name.toLowerCase().includes(this.state.search.toLowerCase())
                )})
            }
            else {
                this.setState({friend: this.props.data})
            }
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
                    <input value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} type='text' placeholder='Enter name to search' />
                    <button onClick={() => this.setState({search: ''})}>
                        <MdClose className='icon' />
                    </button>
                </div>
                <div className='friends'>
                    {this.state.friend.map((e, index) => {
                        return (
                            <Link data-content={e.online ? 'Online' : 'Offline'} style={{$onlineStatus: "Hello"}} to={`/${e.name}`} className='data' key={`friend-${index}`}>
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
