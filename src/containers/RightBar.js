import React, {Component} from 'react';
import axios from "axios";
import {latestBlog} from "../store/constants";

class RightBar extends Component {

    state = {
        latestBlogs: []
    };

    componentDidMount() {
        this.latestBlog()
    }

    latestBlog() {
        axios.get(latestBlog)
            .then(res => {
                console.log(res.data)
                this.setState({latestBlogs: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const {latestBlogs} = this.state;

        return (
            <aside className="col-lg-4">
                <div className="widget search">
                    <header>
                        <h3 className="h6">Search the blog</h3>
                    </header>
                    <form action="#" className="search-form">
                        <div className="form-group">
                            <input type="search" placeholder="What are you looking for?"/>
                            <button type="submit" className="submit"><i className="icon-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="widget latest-posts">
                    <header>
                        <h3 className="h6">Latest Posts</h3>
                    </header>
                    <div className="blog-posts"><a href="#">
                        {
                            latestBlogs.map(blog => {
                                return (
                                    <div className="item d-flex align-items-center">
                                        <div className="image"><img src={blog.thumbnail} alt="..."
                                                                    className="img-fluid"/></div>
                                        <div className="title"><strong>{blog.title}</strong>
                                            <div className="d-flex align-items-center">
                                                <div className="views"><i className="icon-eye"></i> {blog.view_count}</div>
                                                <div className="comments"><i className="icon-comment"></i>{blog.comment_count}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </a></div>
                </div>
                <div className="widget categories">
                    <header>
                        <h3 className="h6">Categories</h3>
                    </header>
                    <div className="item d-flex justify-content-between"><a href="#">Growth</a><span>12</span>
                    </div>
                    <div className="item d-flex justify-content-between"><a href="#">Local</a><span>25</span>
                    </div>
                    <div className="item d-flex justify-content-between"><a href="#">Sales</a><span>8</span>
                    </div>
                    <div className="item d-flex justify-content-between"><a href="#">Tips</a><span>17</span>
                    </div>
                    <div className="item d-flex justify-content-between"><a href="#">Local</a><span>25</span>
                    </div>
                </div>
                <div className="widget tags">
                    <header>
                        <h3 className="h6">Tags</h3>
                    </header>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="tag">#Business</a></li>
                        <li className="list-inline-item"><a href="#" className="tag">#Technology</a></li>
                        <li className="list-inline-item"><a href="#" className="tag">#Fashion</a></li>
                        <li className="list-inline-item"><a href="#" className="tag">#Sports</a></li>
                        <li className="list-inline-item"><a href="#" className="tag">#Economy</a></li>
                    </ul>
                </div>
            </aside>
        )
    }
}

export default RightBar;