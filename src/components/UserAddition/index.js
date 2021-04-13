import React from 'react'
import config from '../../config';

class UserAddition extends React.Component {

    constructor(){
        super();
        this.state = {
            userObj : {
                name: ""
            }
        }

        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(){
       
        // eslint-disable-next-line no-restricted-globals
        console.log(event);
        // eslint-disable-next-line no-restricted-globals
        const {name, value} = event.target;
        this.setState({
            userObj: {
                [name]: value
            }
        })

    }

    handleAddUser(){
        
        const body = JSON.stringify(this.state.userObj);
        const requestOption = {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: body,
        }

        const apiEndpoint = config.dev.apiEndpoint + '/users';
        // const apiEndpoint = 'http://localhost:4000/users';
        
        fetch(apiEndpoint, requestOption)
            .then(res => {
                res.json();
                this.setState({
                    userObj : {
                        name: ""
                    }
                })
            })
            .catch(err => {
                alert('Something went wrong!', err);
            })
    }

    render(){
        return(
            <div>
                Add User
                <input 
                    type="text" 
                    name='name'
                    value={this.state.userObj.name}
                    onChange={this.handleOnChange}></input>
                <button 
                    type="button" 
                    onClick={this.handleAddUser}>Add</button>
            </div>
        )
    }
}

export default UserAddition;