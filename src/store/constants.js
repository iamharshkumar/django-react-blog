const localhost = "http://127.0.0.1:8000";

const apiURL ='/api';

export const endpoint =`${localhost}${apiURL}`;

export const indexView = `${endpoint}/index/`;
export const latestBlog = `${endpoint}/latest/`;
export const categoryCount = `${endpoint}/category/`;
export const postsFetch = (num) => `${endpoint}/posts/?page=${num}`;
export const postsDetail = (id) => `${endpoint}/posts/${id}/`;
export const search = (query) => `${endpoint}/search/?q=${query}`;