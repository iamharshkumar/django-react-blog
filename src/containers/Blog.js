import React , {Component} from 'react';
import RightBar from "./RightBar";
import axios from 'axios';
import {postsFetch} from "../store/constants";
import {Link} from "react-router-dom";

class Blog extends Component {
    state ={
        posts: []
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts(){
        axios.get(postsFetch(1))
            .then(res => {
                console.log(res.data.data)
                this.setState({posts: res.data.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <main className="posts-listing col-lg-8">
                        <div className="container">
                            <div className="row">

                                {
                                    posts.map(post => {
                                        return (
                                            <div className="post col-xl-6">
                                    <div className="post-thumbnail">
                                        <Link to={`/post/${post.id}`}><img src={`http://127.0.0.1:8000${post.thumbnail}`}
                                                                                             alt="..."
                                                                                             className="img-fluid" />
                                        </Link>
                                    </div>
                                    <div className="post-details">
                                        <div className="post-meta d-flex justify-content-between">
                                            <div className="date meta-last">20 May | 2016</div>

                                            <div className="category">
                                                {
                                                    post.categories.map(category => {
                                                        return (
                                                             <a href="#">{category.title}</a>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <a href="post.html">
                                            <h3 className="h4">{post.title}</h3></a>
                                        <p className="text-muted">{post.overview}</p>
                                        <footer className="post-footer d-flex align-items-center"><a href="#"
                                                                                                     className="author d-flex align-items-center flex-wrap">
                                            <div className="avatar"><img src={`http://127.0.0.1:8000/media/${post.user_profile}`} alt="..."
                                                                         className="img-fluid" /></div>
                                            <div className="title"><span>{post.author}</span></div>
                                        </a>
                                            <div className="date"><i className="icon-clock"></i> {post.timestamp}</div>
                                            <div className="comments meta-last"><i className="icon-comment"></i>{post.comment_count}</div>
                                        </footer>
                                    </div>
                                </div>
                                        )
                                    })
                                }


                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination pagination-template d-flex justify-content-center">
                                    <li className="page-item"><a href="#" className="page-link"> <i
                                        className="fa fa-angle-left"></i></a></li>
                                    <li className="page-item"><a href="#" className="page-link active">1</a></li>
                                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                                    <li className="page-item"><a href="#" className="page-link">3</a></li>
                                    <li className="page-item"><a href="#" className="page-link"> <i
                                        className="fa fa-angle-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </main>

                    <RightBar />

                </div>
            </div>
        )
    }
}

export default Blog