import React from 'react';
import config from '../../config';

class UserListing extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isLoading: true,
            userList: []
        }
    }

    componentDidMount(){
        const apiEndpoint = config.dev.apiEndpoint + '/users';

        fetch(apiEndpoint)
        .then(response => response.json())
        .then(response => {
            this.setState({
                userList : response.data,
                isLoading: false
            })
        }).catch(err => {
            alert('Unable to get /users api');
            this.setState({
                isLoading: false
            })
        })
    }

    render(){
        return(
        <div>
            User List:
            <p>{this.state.isLoading ?  'Loading ...' : 
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Registered On</th>
                    </tr>

                    {this.state.userList.map(each =>
                        <tr>
                            <td>{each.id}</td>
                            <td>{each.name}</td>
                            <td>{each.createdAt}</td>
                        </tr>
                    )}

                </table>
            }
            </p>
        </div>
        )
    }
}

export default UserListing;