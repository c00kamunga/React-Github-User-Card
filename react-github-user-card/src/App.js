import React from 'react';

class App extends React.Component(){
constructor(){
  super();
  this.state = {
    user:[],
    followers:{}
  }
}

componentDidMount(){
  axios
  .get(`https://api.github.com/users/c00kamunga`)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}


  render(){
    return(
      <div>

      </div>
    )
  }
}

export default App;
