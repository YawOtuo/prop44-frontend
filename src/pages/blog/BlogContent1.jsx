import pic1 from './images/blog-pic1.png'
import pic2 from './images/blog-pic2.png'
import pic3 from './images/blog-pic3.png'
import pic4 from './images/blog-pic4.png'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Navbar } from '../../components/navbar';

export const BlogContent1 = () =>
{
    return (
        <div>
            <Navbar />
            <div className="container-fluid px-4 px-sm-0">

                <div class="row align-content-center justify-content-center ">
                    <div className="col-sm-8 my-5 text-left">
                        <h4>Exploring the Current State and Future Prospects of
                            India's Real Estate Market</h4>
                    </div>
                    <div className="col-sm-8">
                        <img src={pic1} alt="" width={'100%'} />
                    </div>
                    <div className="col-sm-8 text-left my-5 ">
                        <p className='text-left'>
                            India's real estate market has been going through a period of transformation in recent years, with the government implementing policies such as the Real Estate (Regulation and Development) Act (RERA) and the Goods and Services Tax (GST) to improve transparency and boost growth in the sector. In this article, we will explore the current state of India's real estate market, examining key trends, challenges, and opportunities. One of the major trends in the Indian real estate market is the increasing demand for affordable housing. With the government's focus on providing "Housing for All" by 2022, there has been a significant increase in the number of affordable housing projects being developed across the country.
                        </p>
                        <p className='text-left'>
                            According to industry experts, the affordable housing segment is expected to grow at a CAGR of over 11% during 2020-2025, driven by the government's push for affordable housing and the increasing demand from the middle-income group. Another trend in the Indian real estate market is the increasing adoption of technology. From virtual reality (VR) and augmented reality (AR) to 3D printing and building information modeling (BIM), technology is being used in various stages of real estate development, from planning and design to construction and marketing.
                        </p>
                        <p>
                            This has not only improved the efficiency and accuracy of the development process but also increased transparency and reduced costs. However, the Indian real estate market is also facing several challenges. One of the biggest challenges is the high level of unsold inventory. According to industry reports, the unsold inventory in the residential segment reached a record high of 678,000 units in the first quarter of 2020. This is primarily due to a slowdown in demand caused by the economic slowdown and the impact of the COVID-19 pandemic. Another challenge facing the Indian real estate market is the lack of transparency and trust in the sector. This has been addressed to some extent by the implementation of RERA, which has increased transparency and accountability in the sector. However, more needs to be done to improve trust and confidence in the market. Despite these challenges, the Indian real estate market is expected to recover in the near future. The government's push for affordable housing and the increasing adoption of technology are expected to drive growth in the sector
                        </p>


                        <div className='row align-items-between justify-content-between mt-5 pt-5'>
                            <div className='col-sm-6 text-left'>
                                <h4>More stories</h4>
                            </div>

                            <div className='col-sm-6 text-right'>
                                <ArrowBackIcon />

                                <ArrowForwardIcon />

                            </div>
                        </div>
                    </div>

                </div>

                <div className='row align-items-center justify-content-center my-5'>
                    <div className='col-sm-8'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-sm-3 mb-5 mb-sm-0'>
                                <img src={pic2} alt="" className='w-100' />
                            </div>
                            <div className='col-sm-3 mb-5 mb-sm-0'>
                                <img src={pic3} alt="" className='w-100' />
                            </div>
                            <div className='col-sm-3 mb-5 mb-sm-0'>
                                <img src={pic4} alt="" className='w-100' />
                            </div>
                            <div className='col-sm-3 mb-5 mb-sm-0'>
                                <img src={pic1} alt="" className='w-100 ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}