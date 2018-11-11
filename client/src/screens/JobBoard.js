import React from 'react';

import axios from 'axios';

export default class JobBoard extends React.Component {
  state = {
    listings:[]
  };

  componentDidMount() {
    axios.get(`users`)
      .then(res => {
        const newListings= res.data.map(l =>{
        return{
            id: l.id,
            name: l.name,
            position: l.position,
            location: l.location
        };
      });
      const newState = Object.assign({}, this.state, {
        listings: newListings
      });
      this.setState(newState);
    })
    .catch(error => console.log(error));
}

  render() {
    return (
      <ul>
        { this.state.listings.map(listings => <li>{listings.name}</li>)}
      </ul>
    );
  }
}
