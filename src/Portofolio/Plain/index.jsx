import React from "react";
import './index.css';
import hendrikPhoto from './pic/foto hendrik ijazah.png';
import picAbout from './pic/about.png';
import picNone from './pic/none.png';

class Plain extends React.Component {
    render() {
        return (
            <div>
                <div className="main-container">
                    {/* <!-- nama start --> */}
                    <div className="container">
                        <section className="nama">
                            <div className="nama-container">
                                <h3 className="pre-title">My name is</h3>
                                <h1 className="hero-name">Hendrik <span>Eko Nurdianto</span></h1>
                                <p>Fresh Graduate</p>
                                <a href="cv.pdf"><button class="CV">View CV</button></a>
                            </div>
                            <div className="foto">
                                <img src={hendrikPhoto} alt="foto Hendrik"/>
                            </div>
                        </section>
                    </div>
                    {/* <!-- nama end --> */}
                    {/* <!-- about start --> */}
                    <div className="about-container">
                        <section className="about">
                            <div className="about-image">
                                <img src={picAbout} alt="About Me"/>
                            </div>
                            <div className="about-text">
                                <h3 className="pre-title">About Me</h3>
                                <p>Saya adalah lulusan S1 jurusan Informatika di Universitas Teknologi Yogyakarta (IPK 3,54). Dengan rasa ingin tahu, ingin bisa dan kemauan yang besar untuk mempelajari atau mengembangkan sesuatu, mempunyai rasa tanggung jawab dengan pekerjaan saya, dan cepat dalam beradaptasi.</p>
                            </div>
                        </section>
                    </div>
                    {/* <!-- about end --> */}
                    {/* <!-- skill start --> */}
                    <div className="skill-container">
                        <section className="skill">
                            <div className="skill-content">
                                <h3 className="pre-title">Learning Path</h3>
                                <h1 className="skill-title">Skills & Education</h1>
                                <div className="skills-left">
                                    
                                    {/* <!-- education 1 --> */}
                                    <div className="education">
                                        <div className="line">
                                            <div></div>
                                        </div>
                                        <div className="education-info">
                                            <h4 className="education-title">Universitas Technology Yogyakarta</h4>
                                            <p>S1 Program Studi Informatika</p>
                                            <h4 className="education-years">2016-2021</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills-right">
                                    <p>
                                        Saya sangat mendalami dalam materi yang diberikan. Saya memiliki sikap yang sangat baik dan ingin belajar dan menjadi lebih baik. Saya sudah melakukan beberapa project sebagai contoh yang dapat membantu dalam melatih kemampuan saya. Pada saat memasuki kuliah Skill yang saya pelajari:
                                    </p>
                                    <div className="skill-list">
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>MongoDB</li>
                                        </ul>
                                        <ul>
                                            <li>MySQL</li>
                                            <li>Python</li>
                                            <li>C++</li>
                                            <li>Java</li>
                                            <li>C#</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* <!-- skill end --> */}
                    {/* <!-- portofolio start --> */}
                    <div className="portofolio-container">
                        <section className="portofolio">
                            <div className="portofolio-content">
                                <h3 className="pre-title">My Work</h3>
                                <h1 className="section-title">Featured Portofolio</h1>
                                <div className="portofolio-grid">
                                    {/* <!-- portofolio 1 --> */}
                                    <div className="portofolio-main">
                                        <div className="portofolio-cover">
                                            <img src={picNone} alt="Portofolio 1"/>
                                        </div>
                                        <div className="portofolio-info">
                                            <div className="portofolio-title">
                                                <h4>not available</h4>
                                                <a href="" className="portofolio-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></a>
                                            </div>
                                            <div className="portofolio-tags">
                                                <div>HTML</div>
                                                <div>CSS</div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium accusamus eligendi, eos, nobis delectus placeat, quaerat iusto explicabo vitae architecto animi facilis provident rem!
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- portofolio 2 --> */}
                                    <div className="portofolio-main">
                                        <div className="portofolio-cover">
                                            <img src={picNone} alt="Portofolio 2"/>
                                        </div>
                                        <div className="portofolio-info">
                                            <div className="portofolio-title">
                                                <h4>not available</h4>
                                                <a href="" className="portofolio-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></a>
                                            </div>
                                            <div className="portofolio-tags">
                                                <div>HTML</div>
                                                <div>CSS</div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium accusamus eligendi, eos, nobis delectus placeat, quaerat iusto explicabo vitae architecto animi facilis provident rem!
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- portofolio 3 --> */}
                                    <div className="portofolio-main">
                                        <div className="portofolio-cover">
                                            <img src={picNone} alt="Portofolio 3"/>
                                        </div>
                                        <div className="portofolio-info">
                                            <div className="portofolio-title">
                                                <h4>not available</h4>
                                                <a href="" className="portofolio-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></a>
                                            </div>
                                            <div className="portofolio-tags">
                                                <div>HTML</div>
                                                <div>CSS</div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium accusamus eligendi, eos, nobis delectus placeat, quaerat iusto explicabo vitae architecto animi facilis provident rem!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    {/* <!-- portofolio end --> */}
                    {/* <!-- Contact start --> */}
                    <div className="contact-container">
                        <section className="contact">
                            <div className="contact-content">
                                <div className="contact-left">
                                    <form className="contact-form" action="https://formspree.io/f/xvgpaqgj" method="POST">
                                        <div>
                                            <input type="text" name="name" placeholder="Name"/>
                                        </div>
                                        <div>
                                            <input type="email" name="email" placeholder="Email"/>
                                        </div>
                                        <div>
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                        <div>
                                            <button className="submit-btn">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="contact-right">
                                    {/* <!-- contact 1 --> */}
                                    <div className="contact-item">
                                        <div className="contact-item-icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/></svg>
                                        </div>
                                        <div className="contact-item-detail">
                                            <h4>Adress</h4>
                                            <p>Street Name, City, State, Zip Code</p>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- contact 2 --> */}
                                    <div className="contact-item">
                                        <div className="contact-item-icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>   
                                        </div>
                                        <div className="contact-item-detail">
                                            <h4>Phones</h4>
                                            <p>088438743431</p>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- contact 3 --> */}
                                    <div className="contact-item">
                                        <div className="contact-item-icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                        </div>
                                        <div className="contact-item-detail">
                                            <h4>Email</h4>
                                            <p>Dummyemai@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* <!-- contact end --> */}
                    {/* <!-- footer start--> */}
                    <footer>
                        <div className="footer-icons">
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                            <a href="https://www.linkedin.com/in/hendrik-eko-n-67317a307/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                            <a href="https://github.com/hendrikekon?tab=repositories"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                        </div>
                        <p>
                            &copy; 2024 - Made by Hendrik.
                        </p>
                    </footer>
                    {/* <!-- footer end--> */}
                </div>
            </div>
        );
    }
}

export default Plain;