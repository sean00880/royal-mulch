import Link from 'next/link';
import React from 'react';
import BlogAbout from '../blog/blog-about';
import BlogCategories from '../blog/blog-categories';
import BlogSearch from '../blog/blog-search';
import BlogTag from '../blog/blog-tag';
import SidebarBlogs from '../blog/sidebar-blogs';
import SponsorAdd from '../blog/sponsor-add';
import Breadcrumb from '../common/breadcrumb';
import BlogActions from './blog-actions';
import BlogComment from './blog-comment';
import BlogForm from './blog-form';
import BlogNav from './blog-nav';
import BlogWritter from './blog-writter';

const BlogDetailsArea = ({ item }) => {
   return (
      <>
         <Breadcrumb breadTitle={'blog details'} breadSubtitle={'Royal Mulch - Providing the finest mulch in Central Ohio'} breadHome={'Home'} breadMenu={'blog details'} />

         <section className="blog-area pt-120 pb-60">
            <div className="container">
               <div className="row wow fadeInUp" data-wow-delay=".3s">
                  <div>
                     <div className="blog-details-wrapper mb-60">
                        <div className="blog-single-details">
                        <h3>{item.title}</h3>
                          
                           <div className="blog-thumb">
                              <img src={item.img} alt="" />
                           </div>
                           
                           <p className="mb-55">{item.intro}</p>
                           <h4>{item.head1}</h4>
                           <p className="pb-50">{item.para1}</p>
                           <div className="hr-1"></div>
                           <h4>{item.head2}</h4>
                           <p className="pb-50">{item.para2}</p>
                           <div className="hr-1"></div>
                           <h4>{item.head3}</h4>
                           <p className="pb-50">{item.para3}</p>
                           <div className="hr-1"></div>
                           <h4>{item.head4}</h4>
                           <p className="pb-50">{item.para4}</p>
                           <div className="hr-1"></div>
                           <h4>{item.head5}</h4>
                           <p className="pb-50">{item.para5}</p>
                         
                           <hr />

<p className="mb-55"><h4>Ready to Transform Your Landscape? Choose Royal Mulch Today! </h4><br />
<br />
Experience the difference that our high-quality mulch can make for your Central Ohio landscape. Elevate your curb appeal, reduce maintenance, and create a stunning environment that reflects your style.
<br />
Browse our range of mulch options and find the perfect fit for your vision. Contact us now to place your order and take the first step towards a more vibrant and thriving outdoor oasis. Let Royal Mulch be your partner in achieving a landscape you'll love.
</p>
                          
                        </div>
                     </div>
                  </div>
                 
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;