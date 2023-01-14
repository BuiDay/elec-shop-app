import React from 'react';
import './Blog.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Blog"} />
            <Breadcrumb title={"Blog"} />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blogs'>
                                    <HiOutlineArrowLeft className='me-3'/>
                                    Go back to Blogs
                                </Link>
                                <h3 className='title'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aut.
                                </h3>
                                <img className='img-fluid w-100 my-4' src={require('../../assets/images/blog-1.jpg')} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, libero accusamus perferendis commodi voluptatibus enim. Fugit nobis dolorum error laborum hic! Nam enim, aliquam inventore laborum perspiciatis delectus nisi natus pariatur, veritatis, nobis corrupti. Tempora neque, eos sunt perferendis fugit iure quidem ipsa debitis iste veniam ea, itaque earum facere sed harum quisquam id blanditiis ullam numquam eveniet dolor ab corrupti praesentium molestiae. Rem, distinctio nesciunt! Blanditiis velit eligendi aperiam? Laborum cumque blanditiis quia natus tempore atque, cum tempora autem mollitia alias officiis assumenda? Explicabo repellat debitis sint libero reprehenderit dolorum magni eos ad unde. Similique cum consectetur quisquam distinctio, accusantium dolore reprehenderit aspernatur aut? Ducimus, iste exercitationem. Corrupti vitae quibusdam non. Tempora sed animi aliquam, asperiores illum perspiciatis ducimus non praesentium veritatis quos consectetur illo nisi velit tempore harum nam, aut, magnam laudantium veniam dolorum quod excepturi corporis! Qui necessitatibus fugit, ut sed, iure ipsam excepturi eveniet voluptatem exercitationem architecto libero doloremque molestiae! Accusamus assumenda excepturi dolorum atque doloribus doloremque minima! Suscipit alias, placeat minus accusantium quibusdam eos! Tenetur unde temporibus officia dolores, et doloremque quae beatae iste commodi neque cum veniam illo maxime dolore aut quidem adipisci provident voluptatem eos labore, perferendis nesciunt esse doloribus voluptates. Sed omnis dignissimos quae a. Nisi est doloremque, architecto modi dicta dolore enim quas distinctio, cum explicabo aliquam aut in molestiae neque, aperiam ullam. Neque illo earum consequuntur dolore nemo quam voluptatibus provident ad reiciendis soluta minima optio sequi atque laborum veniam, quos possimus quisquam. Minima tempora similique quia necessitatibus nihil repellat laborum sunt deleniti, odio ipsa molestias voluptates eveniet placeat nisi earum quos voluptas magnam porro tenetur, atque beatae ipsam adipisci quasi ut. Doloremque, tempora! Dignissimos sapiente porro soluta accusantium commodi expedita perspiciatis non iure atque beatae vitae nemo velit exercitationem aspernatur, repellat architecto. Veritatis, obcaecati est quam sed magnam sunt.
                                </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;