import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Job.css';

class Job extends Component {
    state = {
        posts: []
    }
    componentDidMount () {
        axios.get('https://ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: "Joshua"
                }
            })
            this.setState({posts: updatedPosts});
            // console.log(response);
        });
    }

    postSelectedHandler = (id) => {
        this.setState()
    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
            key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />;
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