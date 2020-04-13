import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledUserCard = styled.div`
  border: 3px solid black;
  width: 50%;
  margin: 0 auto;
`;

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: "c00kamunga",
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/c00kamunga")
      .then((result) => {
        this.setState({
          userData: result.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {
    const { login, followers, following } = this.state.userData;
    return (
      <>
        <StyledUserCard>
          <h2>User:</h2>
          <p>Login Name: {Login}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </StyledUserCard>
      </>
    );
  }
}

export default UserCard;
