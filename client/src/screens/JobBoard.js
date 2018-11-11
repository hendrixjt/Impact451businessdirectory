import React, { Component } from 'react';
import Header from '../components/header_footer/Header';
import axios from 'axios';

import './JobBoard.css';


class JobBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            loadedPost: null, // null, [], [{}]
        }
    }
    componentDidMount() {
        axios.get('/users')
            .then(response => {
                console.log(response);
                this.setState({
                    loadedPost: response.data,
                    isLoading: false,
                });
            })
            .catch(err => {
                console.log(err, 'something wrong occurred')
            })
    }
    render() {
        const { clicked, author, title } = this.props;
        const { isLoading, loadedPost } = this.state;
        if(isLoading) {
            return (
                <h3>Loading...</h3>
            )
        }
        if(loadedPost.length === 0 ){ 
            return (
                <h3>We currently dont have any jobs posted</h3>
            )
        }
        return (
            <div>
                {
                   loadedPost.map(post => (
                        <article className="Post" onClick={clicked} key={post.ListingId}>
                            <h1>{post.Name}</h1>
                            <p>{post.Position}</p>
                            <p>{post.Location}</p>
                        </article> 
                   )) 
                }
            </div>
        )
    }
}
/*
const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);
*/

export default JobBoard;