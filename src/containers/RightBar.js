import React, {Component} from 'react';
import axios from "axios";
import {categoryCount, latestBlog, search} from "../store/constants";
import {withRouter} from 'react-router-dom';

class RightBar extends Component {

    state = {
        latestBlogs: [],
        categories: [],
        search: "",
    };

    componentDidMount() {
        this.latestBlog()
        this.categoryCount()
    }

    categoryCount() {
        axios.get(categoryCount)
            .then(res => {
                console.log(res.data)
                this.setState({categories: res.data.data})
            })
            .catch(err => {
                console.log(err)
            })
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

    search = (e) => {
        this.setState({search: e.target.value})
    };

    searchSubmit = () => {

        this.props.history.push(`/search/${this.state.search}`)


    };

    render() {
        const {latestBlogs} = this.state;
        const {categories} = this.state;

        return (
            <aside className="col-lg-4">
                <div className="widget search">
                    <header>
                        <h3 className="h6">Search the blog</h3>
                    </header>
                    <form onSubmit={this.searchSubmit} className="search-form">
                        <div className="form-group">
                            <input onChange={this.search} type="text" placeholder="What are you looking for?"/>
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
                                                <div className="views"><i className="icon-eye"></i> {blog.view_count}
                                                </div>
                                                <div className="comments"><i
                                                    className="icon-comment"></i>{blog.comment_count}</div>
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

                    {categories.map(category => {
                        return (
                            <div className="item d-flex justify-content-between">
                                <a href="#">{category.categories__title}</a>
                                <span>{category.categories__count}</span>
                            </div>
                        )
                    })}


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

export default withRouter(RightBar);