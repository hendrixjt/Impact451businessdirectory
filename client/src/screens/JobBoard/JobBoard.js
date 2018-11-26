import React, { Component } from 'react';
// import Header from '../../components/header_footer/Header';
import axios from 'axios';
// import testImg from  '../resources/images/Main.jpg';

import testImg from '../../resources/images/chimp_Desk1.jpg';

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
        const { clicked, title } = this.props;
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
            <div className="background_image"
            style={{
                // height: `${window.innerHeight}px`,
                backgroundImage: `url(${testImg})`,
                backgroundAttachment: `fixed`
              
            }}
        >
        <div className="intro">
        Current Job Postings!
        </div>
                {
                   loadedPost.map(post => (
                        <article className="Post" onClick={clicked} key={post.ListingId}>
                        
                        
                            <h1 className="boss">{post.Company}</h1>
                            <p className="jobinfo">{post.Position}</p>
                            <p className="jobinfo">{post.Location}</p>
                            <p className="jobinfo">{post.Email}</p>
                            <p className="jobinfo">{post.Phone}</p>
                            
                            
                        </article> 
                   )) 
                   
                }
                  
            </div>
           
        )
    }
}

export default JobBoard;