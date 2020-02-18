import React, {Component} from "react";
import axios from 'axios';
import {indexView, latestBlog} from "../store/constants";

class HomepageLayout extends Component {
    state = {
        featureBlogs: [],
        latestBlogs: []
    };

    componentDidMount() {
        this.featureRender()
        this.latestBlog()
    }

    featureRender() {
        axios.get(indexView)
            .then(res => {
                console.log(res.data)
                this.setState({featureBlogs: res.data})
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

    render() {
        const {featureBlogs, latestBlogs} = this.state;
        return (
            <div>
                <section style={{
                    background: "url(img/hero.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: " center center"
                }}
                         className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1>Bootstrap 4 Blog - A free template by Bootstrap Temple</h1><a href="#"
                                                                                                  className="hero-link">Discover
                                More</a>
                            </div>
                        </div>
                        <a className="continue link-scroll"><i className="fa fa-long-arrow-down"></i> Scroll Down</a>
                    </div>
                </section>


                <section className="featured-posts no-padding-top">
                    <div className="container">
                        {
                            featureBlogs.map((blog, i) => {
                                return (
                                    <div className="row d-flex align-items-stretch">
                                        {
                                            i === 1 ?
                                                <div className="image col-lg-5"><img src={blog.thumbnail} alt="..."/>
                                                </div> : ''
                                        }

                                        <div className="text col-lg-7">
                                            <div className="text-inner d-flex align-items-center">
                                                <div className="content">
                                                    <header className="post-header">
                                                        <div className="category">
                                                            {
                                                                blog.categories.map(category => {
                                                                    return (
                                                                        <a href="">{category.title}</a>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <a href="post.html">
                                                            <h2 className="h4">{blog.title}</h2></a>
                                                    </header>
                                                    <p>{blog.overview}</p>
                                                    <footer className="post-footer d-flex align-items-center"><a
                                                        href="#"
                                                        className="author d-flex align-items-center flex-wrap">
                                                        <div className="avatar"><img
                                                            src={`http://127.0.0.1:8000/media/${blog.user_profile}`}
                                                            alt="..."
                                                            className="img-fluid"/></div>
                                                        <div className="title"><span>{blog.author}</span></div>
                                                    </a>
                                                        <div className="date"><i
                                                            className="icon-clock"></i> {blog.timestamp}
                                                        </div>
                                                        <div className="comments"><i
                                                            className="icon-comment"></i> {blog.comment_count}
                                                        </div>
                                                    </footer>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            i === 0 || i === 2 ?
                                                <div className="image col-lg-5"><img src={blog.thumbnail} alt="..."/>
                                                </div> : ''
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>

                <section
                    style={{
                        background: "url(img/divider-bg.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center bottom"
                    }}
                    className="divider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua</h2><a href="#" className="hero-link">View
                                More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="latest-posts">
                    <div className="container">
                        <header>
                            <h2>Latest from the blog</h2>
                            <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </header>
                        <div className="row">
                            {
                                latestBlogs.map(latestBlog => {
                                    return (
                                        <div className="post col-md-4">
                                            <div className="post-thumbnail"><a href="post.html"><img
                                                src={latestBlog.thumbnail} alt="..."
                                                className="img-fluid"/></a>
                                            </div>
                                            <div className="post-details">
                                                <div className="post-meta d-flex justify-content-between">
                                                    {/*<div className="date">{latestBlog.timestamp}</div>*/}
                                                    <div className="category">
                                                        {
                                                            latestBlog.categories.map(category => {
                                                                return (
                                                                    <a href="#">{category.title}</a>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <a href="post.html">
                                                    <h3 className="h4">{latestBlog.title}</h3></a>
                                                <p className="text-muted">{latestBlog.overview}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </section>
                <section className="newsletter no-padding-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Subscribe to Newsletter</h2>
                                <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-holder">
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email"
                                                   placeholder="Type your email address"/>
                                            <button type="submit" className="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default HomepageLayout;
