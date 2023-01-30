import './Home.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from '../homeData'

export default function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    return (
        <>
            <section className="home">

                {/* Carousel container */}
                <div className="container">
                    <Slider {...settings}>
                        {
                            data.map((element) => {
                                return (
                                    <div className="itemContent">
                                        <div className="item">
                                            <div className="left">
                                                <h1>{element.name}</h1>
                                                <p>{element.desc}</p>
                                            </div>
                                            <div className="right">
                                                <img src={element.cover} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* Services Container */}
                <div className="services">
                    <h2>Services</h2>
                    <div className="services-products">
                        <div className="cyber">
                            <img src="../images/hacking.jpg" alt="" />
                            <h3>Cyber Security</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est repudiandae vero expedita quis vitae exercitationem minima eveniet, illum molestias aut. Accusantium, ipsam. Praesentium eaque officia, animi quae possimus autem.
                            </p>
                        </div>

                        <div className="development">
                            <img src="../images/code.jpg" alt="" />
                            <h3>Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est repudiandae vero expedita quis vitae exercitationem minima eveniet, illum molestias aut. Accusantium, ipsam. Praesentium eaque officia, animi quae possimus autem.
                            </p>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className="footer">
                    <p>Copyright @2023 Dark Knight. All Rights Reserved.</p>
                </div>
            </section>
        </>
    )
}