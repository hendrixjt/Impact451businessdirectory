import React, { Component } from 'react';
import Header from '../components/header_footer/Header';
import axios from 'axios';

// const JobBoard = () => <Header title="JobBoard"/>;

// class JobBoard extends Component{
//     state= { 
//         title: '',
//         content:'',
//         author: 'Joshua'
//     }
//     render () {
//         return (
//             <div className="JobBoard">
//                 <h1>Add a Post</h1>
//                 <label>Title</label>
//                 <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
//                 <label>Content</label>
//                 <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
//                 <label>Author</label>
//                 <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
//                     <option value="Joshua">Joshua</option>
//                     <option value="Amber">Amber</option>
//                     <option value="Mayra">Mayra</option>
//                     <option value="Roy">Roy</option>
//                     <option value="Jerry">Jerry</option>
//                 </select>
//                 <button>Add Post</button>
//             </div>
//         );    
// }
// }

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

// export default FullPost;


export default JobBoard;