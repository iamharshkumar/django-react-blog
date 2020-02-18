import React, {Component} from 'react';
import RightBar from "./RightBar";

class Post extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <main className="post blog-post col-lg-8">
                        <div className="container">
                            <div className="post-single">
                                <div className="post-thumbnail"><img src="/img/blog-post-3.jpeg" alt="..."
                                                                     className="img-fluid" /></div>
                                <div className="post-details">
                                    <div className="post-meta d-flex justify-content-between">
                                        <div className="category"><a href="#">Business</a><a href="#">Financial</a>
                                        </div>
                                    </div>
                                    <h1>Diversity in Engineering: The Effect on Questions<a href="#"><i
                                        className="fa fa-bookmark-o"></i></a></h1>
                                    <div className="post-footer d-flex align-items-center flex-column flex-sm-row"><a
                                        href="#" className="author d-flex align-items-center flex-wrap">
                                        <div className="avatar"><img src="/img/avatar-1.jpg" alt="..."
                                                                     className="img-fluid" /></div>
                                        <div className="title"><span>John Doe</span></div>
                                    </a>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="date"><i className="icon-clock"></i> 2 months ago</div>
                                            <div className="views"><i className="icon-eye"></i> 500</div>
                                            <div className="comments meta-last"><i className="icon-comment"></i>12</div>
                                        </div>
                                    </div>
                                    <div className="post-body">
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                        <p><img src="/img/featured-pic-3.jpeg" alt="..." className="img-fluid" /></p>
                                        <h3>Lorem Ipsum Dolor</h3>
                                        <p>div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                                            temporibus iusto voluptates deleniti similique rerum ducimus sint ex odio
                                            saepe. Sapiente quae pariatur ratione quis perspiciatis deleniti
                                            accusantium</p>
                                        <blockquote className="blockquote">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            <footer className="blockquote-footer">Someone famous in
                                                <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                        <p>quasi nam. Libero dicta eum recusandae, commodi, ad, autem at ea iusto
                                            numquam veritatis, officiis. Accusantium optio minus, voluptatem? Quia
                                            reprehenderit, veniam quibusdam provident, fugit iusto ullam voluptas neque
                                            soluta adipisci ad.</p>
                                    </div>
                                    <div className="post-tags"><a href="#" className="tag">#Business</a><a href="#"
                                                                                                           className="tag">#Tricks</a><a
                                        href="#" className="tag">#Financial</a><a href="#" className="tag">#Economy</a>
                                    </div>
                                    <div
                                        className="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
                                        <a href="#" className="prev-post text-left d-flex align-items-center">
                                            <div className="icon prev"><i className="fa fa-angle-left"></i></div>
                                            <div className="text"><strong className="text-primary">Previous
                                                Post </strong>
                                                <h6>I Bought a Wedding Dress.</h6>
                                            </div>
                                        </a><a href="#"
                                               className="next-post text-right d-flex align-items-center justify-content-end">
                                        <div className="text"><strong className="text-primary">Next Post </strong>
                                            <h6>I Bought a Wedding Dress.</h6>
                                        </div>
                                        <div className="icon next"><i className="fa fa-angle-right"> </i></div>
                                    </a></div>
                                    <div className="post-comments">
                                        <header>
                                            <h3 className="h6">Post Comments<span className="no-of-comments">(3)</span>
                                            </h3>
                                        </header>
                                        <div className="comment">
                                            <div className="comment-header d-flex justify-content-between">
                                                <div className="user d-flex align-items-center">
                                                    <div className="image"><img src="/img/user.svg" alt="..."
                                                                                className="img-fluid rounded-circle" />
                                                    </div>
                                                    <div className="title"><strong>Jabi Hernandiz</strong><span
                                                        className="date">May 2016</span></div>
                                                </div>
                                            </div>
                                            <div className="comment-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam.</p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="comment-header d-flex justify-content-between">
                                                <div className="user d-flex align-items-center">
                                                    <div className="image"><img src="/img/user.svg" alt="..."
                                                                                className="img-fluid rounded-circle" />
                                                    </div>
                                                    <div className="title"><strong>Nikolas</strong><span
                                                        className="date">May 2016</span></div>
                                                </div>
                                            </div>
                                            <div className="comment-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam.</p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="comment-header d-flex justify-content-between">
                                                <div className="user d-flex align-items-center">
                                                    <div className="image"><img src="/img/user.svg" alt="..."
                                                                                className="img-fluid rounded-circle" />
                                                    </div>
                                                    <div className="title"><strong>John Doe</strong><span
                                                        className="date">May 2016</span></div>
                                                </div>
                                            </div>
                                            <div className="comment-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-comment">
                                        <header>
                                            <h3 className="h6">Leave a reply</h3>
                                        </header>
                                        <form action="#" className="commenting-form">
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <input type="text" name="username" id="username" placeholder="Name"
                                                           className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input type="email" name="username" id="useremail"
                                                           placeholder="Email Address (will not be published)"
                                                           className="form-control" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <textarea name="usercomment" id="usercomment"
                                                              placeholder="Type your comment"
                                                              className="form-control"></textarea>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <button type="submit" className="btn btn-secondary">Submit Comment
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <RightBar />

                </div>
            </div>
        )
    }
}

export default Post;