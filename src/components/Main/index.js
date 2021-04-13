import React from 'react';
import UserAddition from '../UserAddition';
import UserListing from '../UserListing';

class Main extends React.Component {
    render(){
        return(
            <div>
                <UserAddition/>
                <UserListing/>
            </div>
        )
    }
}

export default Main;