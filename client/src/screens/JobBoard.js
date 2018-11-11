import React, { Component } from 'react';
import Header from '../components/header_footer/Header';
import axios from 'axios';


class JobBoard extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate () {
        if (this.props.id) {
        axios.get('/users')
            .then(response => {
                console.log(response);
                //this.setState({loadedPost: response.data});
            });
        }
    }



    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        if (this.state.loadedPost){

        post = (
            <div className="JobBoard">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        }
        return post;
    }
}


export default JobBoard;