import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Job.css';

class Job extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount () {
        axios.get('/users')
        .then(response => {
            this.setState({posts: response.data});
            // console.log(response);
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
            key={post.ListingId} 
            title={post.Position} 
            author={post.Location}
            clicked={() => this.postSelectedHandler(post.ListingId)} />;
        }

        );
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Job;