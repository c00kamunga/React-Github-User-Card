import React from 'react';
import axios from 'axios';

class Followers extends React.Component{
    constructor(){
        super();
        this.state = {
            followersData: []
        };
    }

    componentDidUpdate(){
        axios
        .get("https://api.github.com/users/c00kamunga/followers")
        .then(res => {
            console.log(result)
            this.setState({
                followersData: result.data
            })
        })
        .catch(error => {
            console.log("error:", error);
        })
    }


    render(){
        return(

        )
    }
}