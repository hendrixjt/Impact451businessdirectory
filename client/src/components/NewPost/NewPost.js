import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Joshua'
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Joshua">Joshua</option>
                    <option value="Amber">Amber</option>
                    <option value="Mayra">Mayra</option>
                    <option value="Roy">Roy</option>
                    <option value="Jerry">Jerry</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }
}

export default NewPost;