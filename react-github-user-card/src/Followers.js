import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StyledFollowers = styled.div`
border: 3px solid lightgreen;
width: 40%;
margin: 0 auto;
margin-top: 1rem;
`



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
<>
<h3>
    Followers:
</h3>
{this.state.followersData.map((follower, index) => {
    return(
         <StyledFollowers key={index}>
{index + 1} - {follower.login}
         </StyledFollowers>
    );
})}
</>
        )
    }
}

export default Followers;