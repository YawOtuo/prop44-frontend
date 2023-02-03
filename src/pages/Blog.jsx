import { BlogCard } from '../components/blogCard'
import { Navbar } from '../components/navbar'
import pic1 from '../images/blog-pic1.png'
import pic2 from '../images/blog-pic2.png'

import pic3 from '../images/blog-pic3.png'
import pic4 from '../images/blog-pic4.png'
import pic5 from '../images/blog-pic5.png'
import pic6 from '../images/blog-pic6.png'


export const BlogPage = (props) =>
{
    return (
        <div className='container-fluid'>
            <Navbar />
            <div className='row align-items-center justify-content-start px-5 mx-2'>
                <div className='col-sm-6 text-left py-3 font-weight-bold'>
                    Recently posted
                </div>
            </div>
            <div class="row align-items-center justify-content-center px-0 px-sm-5 mx-0 mx-sm-2">
                <div className='col-sm-4 mb-5'>
                    <BlogCard image={pic1} title={
                        "Exploring the Current State and Future Prospects of India's Real Estate Market"
                    } link='/blog/1'/>
                </div>
                <div className='col-sm-4 mb-5'>
                    <BlogCard image={pic2} title={
                        "How to invest in Indian real estate: a beginner's guide"
                    } />    

                </div>
                <div className='col-sm-4 mb-5'>
                    <BlogCard image={pic3} title={
                        "How to choose the right location for your property in India: trends, challenges, and opportunities"
                    } />

                </div>
                <div className='col-sm-4 mb-5'>
                    <BlogCard image={pic4} title={
                        "Exploring the Current State and Future Prospects of India's Real Estate Market"
                    } />
                </div>
                <div className='col-sm-4 mb-5'>
                    <BlogCard image={pic5} title={
                        "How to invest in Indian real estate: a beginner's guide"
                    } />

                </div>
                <div className='col-sm-4 mb-5'>
                    <BlogCard image={pic6} title={
                        "How to choose the right location for your property in India: trends, challenges, and opportunities"
                    } />

                </div>

            </div>


        </div>
    )
}