import "./About.css"
import { about } from '../homeData' 
import { NavLink } from "react-router-dom"

export default function About() {
    return(
        <>
        <section className="about">
            <div className="container">

                {
                    about.map((element) => {
                        return(
                            <div className="aboutContent">
                                <div className="aboutContainer">
                                    <div className="leftContent">
                                        <p>
                                            Hi  ! my name is <span>{element.name}</span>, I am a <span>{element.role}</span> from <span>{element.country}</span>.
                                            I am passionate about front end development, coding beautiful interfeces.
                                        </p>
                                        <p>
                                            Instagram :- <NavLink to={'https://www.instagram.com/alex_127.0.0.1/'}><span className="social">{element.insta}</span></NavLink>
                                        </p>
                                    </div>
                                    <div className="rightImg">
                                        <img src={element.img} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}