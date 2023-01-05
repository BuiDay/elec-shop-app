import React from 'react';
import './BlogCard.css'
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className="blog-card">
                <div className="card-image">
                    <img className='img-fluid' src={require('../../assets/images/blog-1.jpg')} alt="" />
                </div>
                <div className="blog-content">
                    <p className='date'>1 Dec, 2022</p>
                    <h5 className="title">
                        A beautiful sunday morning renaissance
                    </h5>
                    <p className="desc">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam laudantium asperiores tempore dolores blanditiis.
                    </p>
                    <Link to='/' className='button blog-btn'>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;