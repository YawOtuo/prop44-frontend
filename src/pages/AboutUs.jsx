import { Navbar } from "../components/navbar"

export const AboutUs = () =>
{
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row align-items-center justify-content-center px-4">
                    <div className="col-sm-10 pt-5 pb-4">
                        <h3>About Us</h3>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-10 text-left">
                            <p>
                                &emsp;Propp 44 is a premier real estate listing website that connects property buyers and sellers in a user-friendly and efficient manner. Our website offers a wide variety of properties for sale, including single-family homes, apartments, townhouses, and commercial properties. We strive to make the property search process as easy and stress-free as possible by providing detailed property information, high-quality photos, and virtual tours.
                                Our website also features advanced search filters that allow users to narrow down their search by location, price, property type, and other criteria. In addition, our website provides a platform for property owners to list their properties for sale or rent, giving them access to a wide audience of potential buyers and renters.
                                <br />
                                <br />
                                &emsp;At Propp 44, we are committed to providing exceptional customer service and support. Our team of experienced real estate professionals is always available to assist with any questions or concerns. Whether you're a first-time homebuyer or a seasoned investor, Propp 44 is the perfect place to start your property search.
                                <br />
                                <br />
                                &emsp;We are constantly updating our site with new features and listings, so be sure to check back often to find your dream property. With Propp 44, you can be confident that you are getting the best service and the best selection of properties available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}