import React , {Component} from 'react';
import RightBar from "./RightBar";

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <main className="posts-listing col-lg-8">
                        <div className="container">
                            <div className="row">
                                <div className="post col-xl-6">
                                    <div className="post-thumbnail"><a href="post.html"><img src="img/blog-post-1.jpeg"
                                                                                             alt="..."
                                                                                             className="img-fluid" /></a>
                                    </div>
                                    <div className="post-details">
                                        <div className="post-meta d-flex justify-content-between">
                                            <div className="date meta-last">20 May | 2016</div>
                                            <div className="category"><a href="#">Business</a></div>
                                        </div>
                                        <a href="post.html">
                                            <h3 className="h4">Alberto Savoia Can Teach You About Interior</h3></a>
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        <footer className="post-footer d-flex align-items-center"><a href="#"
                                                                                                     className="author d-flex align-items-center flex-wrap">
                                            <div className="avatar"><img src="img/avatar-3.jpg" alt="..."
                                                                         className="img-fluid" /></div>
                                            <div className="title"><span>John Doe</span></div>
                                        </a>
                                            <div className="date"><i className="icon-clock"></i> 2 months ago</div>
                                            <div className="comments meta-last"><i className="icon-comment"></i>12</div>
                                        </footer>
                                    </div>
                                </div>
                                <div className="post col-xl-6">
                                    <div className="post-thumbnail"><a href="post.html"><img src="img/blog-post-2.jpg"
                                                                                             alt="..."
                                                                                             className="img-fluid" /></a>
                                    </div>
                                    <div className="post-details">
                                        <div className="post-meta d-flex justify-content-between">
                                            <div className="date meta-last">20 May | 2016</div>
                                            <div className="category"><a href="#">Business</a></div>
                                        </div>
                                        <a href="post.html">
                                            <h3 className="h4">Alberto Savoia Can Teach You About Interior</h3></a>
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        <div className="post-footer d-flex align-items-center"><a href="#"
                                                                                                  className="author d-flex align-items-center flex-wrap">
                                            <div className="avatar"><img src="img/avatar-2.jpg" alt="..."
                                                                         className="img-fluid" /></div>
                                            <div className="title"><span>John Doe</span></div>
                                        </a>
                                            <div className="date"><i className="icon-clock"></i> 2 months ago</div>
                                            <div className="comments meta-last"><i className="icon-comment"></i>12</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post col-xl-6">
                                    <div className="post-thumbnail"><a href="post.html"><img src="img/blog-post-3.jpeg"
                                                                                             alt="..."
                                                                                             className="img-fluid" /></a>
                                    </div>
                                    <div className="post-details">
                                        <div className="post-meta d-flex justify-content-between">
                                            <div className="date meta-last">20 May | 2016</div>
                                            <div className="category"><a href="#">Business</a></div>
                                        </div>
                                        <a href="post.html">
                                            <h3 className="h4">Alberto Savoia Can Teach You About Interior</h3></a>
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        <div className="post-footer d-flex align-items-center"><a href="#"
                                                                                                  className="author d-flex align-items-center flex-wrap">
                                            <div className="avatar"><img src="img/avatar-3.jpg" alt="..."
                                                                         className="img-fluid" /></div>
                                            <div className="title"><span>John Doe</span></div>
                                        </a>
                                            <div className="date"><i className="icon-clock"></i> 2 months ago</div>
                                            <div className="comments meta-last"><i className="icon-comment"></i>12</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post col-xl-6">
                                    <div className="post-thumbnail"><a href="post.html"><img src="img/blog-post-4.jpeg"
                                                                                             alt="..."
                                                                                             className="img-fluid" /></a>
                                    </div>
                                    <div className="post-details">
                                        <div className="post-meta d-flex justify-content-between">
                                            <div className="date meta-last">20 May | 2016</div>
                                            <div className="category"><a href="#">Business</a></div>
                                        </div>
                                        <a href="post.html">
                                            <h3 className="h4">Alberto Savoia Can Teach You About Interior</h3></a>
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        <div className="post-footer d-flex align-items-center"><a href="#"
                                                                                                  className="author d-flex align-items-center flex-wrap">
                                            <div className="avatar"><img src="img/avatar-1.jpg" alt="..."
                                                                         className="img-fluid" /></div>
                                            <div className="title"><span>John Doe</span></div>
                                        </a>
                                            <div className="date"><i className="icon-clock"></i> 2 months ago</div>
                                            <div className="comments meta-last"><i className="icon-comment"></i>12</div>
                                        </div>
                                    </div>
                                </div>
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