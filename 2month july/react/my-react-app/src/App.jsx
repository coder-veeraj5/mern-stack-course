import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {


  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">VEERAJ PATIL</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link " href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>

    <section className="hero">
        <div className="bg-img">

            <h1>Hi, I'am Veeraj Patil</h1>
            <span>MEARN Stack Developer with 2 Years of Experience</span>
            <button>Hire me</button>
        </div>

    </section>

    

    <section className="about-me py-5">
        <h2><b>About Me</b></h2>
        <div className="row align-items-center">
            <div className="col-md-6 mb-4 text-center">
                <img src="unnamed.jpg" className=" w-50 img-fluid rounded shadow"/>
            </div>
            <div className="col-md-6 me-division">
                <p>
                    I'm a dedicated MERN Stack developer with 2 years of experience in building scalable and
                    user-friendly web applications. Proficient in MongoDB, Express.js, React, and Node.js, I
                    specialize in creating seamless full-stack solutions.

                </p>
                <p>
                    My passion lies in solving complex problems and delivering clean, efficient code. I thrive in
                    collaborative environments and am always eager to learn new technologies to
                    enhancemy skill set.
                </p>
                <button>Download Resume</button>
            </div>

        </div>

    </section>



    <section className="skill py-5 bg-light">
        <div className="container">
            <h2><b>Skills</b></h2>
            <div className="row ">
                <div className="col-md-3 ">
                    <div className="card skill-card">
                        <img src="https://logodix.com/logo/2090046.png"/>
                        <div className="card-body">
                            <h4>MangoDB</h4>

                            <p>Designing and managing NOSQL databases for efficient data
                                storage and scalability</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="card skill-card">
                        <img src="https://logodix.com/logo/2090046.png"/>
                        <div className="card-body">
                            <h4>MangoDB</h4>

                            <p>Designing and managing NOSQL databases for efficient data
                                storage and scalability</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">

                    <div className="card skill-card">
                        <img src="https://logodix.com/logo/2090046.png"/>
                        <div className="card-body">
                            <h4>MangoDB</h4>

                            <p>Designing and managing NOSQL databases for efficient data
                                storage and scalability</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">

                    <div className="card skill-card">
                        <img src="https://logodix.com/logo/2090046.png"/>
                        <div className="card-body">
                            <h4>MangoDB</h4>

                            <p>Designing and managing NOSQL databases for efficient data
                                storage and scalability</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="exp">
        <div className="container">
            <h2>Experience</h2>
            <div className="row rowww">
                <div className="col-md-6 cent">


                    <i className="fa-solid fa-briefcase"></i>
                    <br/>
                    <br/>
                    <h6>MERN Stack Developer</h6>
                    <p><b>Tech Solutions Inc.</b>|Jan 2023-Present
                    </p>

                    <p>Developed and maintained full-stack applications using MERN stack, implemented RESTful APIs, and
                        optimized database performance for a 20% increase in application efficiency.</p>
                </div>
                <div className="col-md-6 cent">

                    <i className="fa-solid fa-briefcase"></i>
                    <br/>
                    <br/>
                    <h6>Junior Web Developer</h6>
                    <p><b>Startup XYZ |</b>Jun 2022-Dec 2022
                    </p>

                    <p>Assisted in building React-based front-end interfaces and integrated third-party APIs for a Saas
                        product, improving user engagement by 15%.</p>
                </div>

            </div>
        </div>
    </section>

    <section className="pro">
        <div className="container">
            <h2>Projects</h2>
            <div className="row rowww">
                <div className="col-md-4 probg-color">
                    <div className="pro-img">

                    </div>

                    <h5>E-Commerce Platform</h5>

                    <span>A full-stack MERN application with user authentication, product filtering, and Stripe
                        payment integration</span>
                </div>
                <div className="col-md-4 probg-color ">
                    <div className="pro-img">

                    </div>
                    <h5>Task Management App</h5>

                    <span>A React-based task manager with MongoDB backend, featuring real-time
                        updates and user roles.</span>
                </div>
                <div className="col-md-4 probg-color ">

                    <div className="pro-img">

                    </div>
                    <h5>Personal Portfolio</h5>

                    <span>A responsive portfolio website built with React and Boots mp, showcasing my
                        projects and skills</span>
                </div>

            </div>
        </div>
    </section>

    <section className="contact">
        <div className="container">
            <h2>Contact</h2>
            <div className="row rowww">
                <div className="col-md-6 map">
                    <div className="mb-3">
                        <label htmlfor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your name"/>
                        <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com"/>

                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="type your message"></textarea>
                    </div>
                    <div className="sendmsg-btn">
                        <button>Send Message</button>
                    </div>
                </div>
                <div className="col-md-6 cent map">

                    <img src="https://www.kaashivinfotech.com/tutorial/wp-content/uploads/2020/06/Google-Map-US_10.jpg"/>

                </div>

            </div>
            </div>
    </section>
    <footer>
        <div className="foot">
            <div>
                <span>@Veeraj patil,all rights reserved</span>

            </div>
            <div>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-solid fa-envelope"></i>
            </div>



        </div>
    </footer>
     
    </>
  )
}

export default App
