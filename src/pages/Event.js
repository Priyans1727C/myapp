import React from 'react';
import Layout from '../components/Layout/Layout';
import './Event.css';
import ProfileIcon from '../assets/images/Resourses/dummy-image.jpg'


const Event = () => {
    return (
        <Layout>

            <section className="hero">

                <div id="particles-js"></div>
                <div className="hero-content">
                    <h1>Prompt-Builder <span className="year">2025</span></h1>
                    <p>48-Hour Global AI Hackathon</p>
                    <a href="/#" className="cta-button" id="openFormBtn">Join the Challenge</a><br /><br />
                </div>
                <div className="blending"></div>
            </section>

            <section className="countdown-v3">
                <div className="countdown-text">Time’s Running Out—Are You In?</div>
                <div className="countdown-digits">
                    <div className="digit-container">
                        <span id="days" className="digit">14</span>
                        <div className="digit-label">Days</div>
                    </div>
                    <div className="digit-container">
                        <span id="hours" className="digit">06</span>
                        <div className="digit-label">Hours</div>
                    </div>
                    <div className="digit-container">
                        <span id="minutes" className="digit">32</span>
                        <div className="digit-label">Minutes</div>
                    </div>
                    <div className="digit-container">
                        <span id="seconds" className="digit">45</span>
                        <div className="digit-label">Seconds</div>
                    </div>
                </div>
            </section>



            <section id="about" className="fade-out">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Prompt Builder 2025 – Where Innovation Meets Competition! </h2>
                            <p>
                                Are you ready to revolutionize <strong>Intelligence, Cloud Computing, and Prompt Engineering</strong>?
                                <strong>Prompt Builder 2025</strong> is not just a hackathon—it’s a stage for visionaries, developers, and
                                AI enthusiasts to create, collaborate, and compete in solving real-world challenges.

                                Join forces with <strong>brilliant minds</strong>, push the boundaries of <strong>cutting-edge
                                    technology</strong>, and showcase your skills in an electrifying environment. Whether you're a
                                <strong>coder, innovator, or problem-solver</strong>, this is your chance to make an impact, learn from
                                industry experts, and take AI-powered solutions to the next level.
                                <br></br>
                                Get ready for <strong>intense coding, groundbreaking ideas, and an experience like never before!</strong>
                                Are you up for the challenge? 💡🔥
                            </p>
                        </div>
                    </div>
                    <div className="event-info-cards">
                        <div className="card">
                            <h3>📅 Date</h3>
                            <p>21 - 22 February, 2025</p>
                        </div>
                        <div className="card">
                            <h3>📍 Venue</h3>
                            <p>Lovely Propfessional University</p>
                        </div>
                        <div className="card">
                            <h3>✨ Focus</h3>
                            <p>Redefining AI and Cloud Innovation</p>
                        </div>
                    </div>








                    <div className="soft-skills">
                        <div className="soft-box1"></div>
                        <div className="soft-box2"></div>
                        <div className="soft-box3"></div>
                        <div className="soft-box4"></div>
                    </div>
                </div>
            </section>


            <section id="prizes" className="fade-out">
                <div className="container">
                    <h2 className="section-heading">Claim Your Victory! 🏅</h2>
                    <div className="prizes-grid">
                        <div className="award-card gold">
                            <div className="award-card-inner">
                                <div className="award-card-front">
                                    <div className="medal-icon icon1" ></div>
                                    <h3>Sage</h3>
                                    <p className="prize-amount gradient-text">₹ 100,000</p>
                                </div>
                                <div className="award-card-back">
                                </div>
                            </div>
                        </div>
                        <div className="award-card silver">
                            <div className="award-card-inner">
                                <div className="award-card-front">

                                    <div className="medal-icon icon2" ></div>
                                    <h3>Luminary</h3>
                                    <p className="prize-amount gradient-text">₹ 75,000</p>
                                </div>
                                <div className="award-card-back">

                                </div>
                            </div>
                        </div>
                        <div className="award-card bronze">
                            <div className="award-card-inner">
                                <div className="award-card-front">

                                    <div className="medal-icon icon3" ></div>
                                    <h3>Virtuoso</h3>
                                    <p className="prize-amount gradient-text">₹ 50,000</p>
                                </div>
                                <div className="award-card-back">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="speakers-section">
                <div class="speakers-container">
                    <h1 class="section-heading">Featured Judges</h1>
                    <div class="speakers-grid">
                        <div class="speaker-card">
                            <div class="speaker-card-inner">
                                <div class="speaker-card-front">
                                    <div class="speaker-image"><img src={ProfileIcon} alt=""></img></div>
                                    <h2 class="speaker-name">Prashant Singh</h2>
                                    <p class="speaker-role">India-Head Solution Architecture</p>
                                    <p>At AWS</p>
                                </div>
                                <div class="speaker-card-back">
                                    <h2 class="speaker-name">Prashant Singh</h2>
                                    <p class="speaker-bio">
                                        10+ years experience in machine learning and neural networks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card-inner">
                                <div class="speaker-card-front">
                                    <div class="speaker-image"><img src={ProfileIcon} alt=""></img></div>
                                    <h2 class="speaker-name">Deepali Kulshrestha</h2>
                                    <p class="speaker-role">Vice President - Data Engineering</p>
                                    <p>At NatWest Group</p>
                                </div>
                                <div class="speaker-card-back">
                                    <h2 class="speaker-name">Deepali Kulshrestha</h2>
                                    <p class="speaker-bio">
                                        10+ years experience in machine learning and neural networks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card-inner">
                                <div class="speaker-card-front">
                                    <div class="speaker-image"><img src={ProfileIcon} alt=""></img></div>
                                    <h2 class="speaker-name">Toshal Khawale</h2>
                                    <p class="speaker-role">Director - Product Owner</p>
                                    <p class="speaker-role">(Cloud &amp; DevOps)</p>
                                    <p>At MicroStrategy</p>
                                </div>
                                <div class="speaker-card-back">
                                    <h2 class="speaker-name">Toshal Khawale</h2>
                                    <p class="speaker-bio">Former Vice President -Engineering Manager </p>
                                    <p class="speaker-bio">JPMorgan Chase &amp; Co.</p>
                                    <p class="speaker-bio">Former Solution Architect -Cloud ( AWS , Azure) </p>
                                </div>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card-inner">
                                <div class="speaker-card-front">
                                    <div class="speaker-image"><img src={ProfileIcon} alt=""></img></div>
                                    <h2 class="speaker-name">Om Shree Butani</h2>
                                    <p class="speaker-role">Cloud Engineer</p>
                                    <p>At Accenture</p>
                                </div>
                                <div class="speaker-card-back">
                                    <h2 class="speaker-name">Om Shree Butani</h2>
                                    <p>AWS Community Builder</p>
                                    <p>Women Techmakers Ambassador</p>
                                    <p class="speaker-bio">
                                        10+ years experience in machine learning and neural networks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card-inner">
                                <div class="speaker-card-front">
                                    <div class="speaker-image"><img src={ProfileIcon} alt=""></img></div>
                                    <h2 class="speaker-name">Vishal Alhat</h2>
                                    <p class="speaker-role">Software Engineer</p>
                                </div>
                                <div class="speaker-card-back">
                                    <h2 class="speaker-name">Vishal Alhat</h2>
                                    <p class="speaker-bio">
                                        10+ years experience in machine learning and neural networks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card-inner">
                                <div class="speaker-card-front">
                                    <div class="speaker-image"><img src={ProfileIcon} alt=""></img></div>
                                    <h2 class="speaker-name">John Doe</h2>
                                    <p class="speaker-role">AI Specialist</p>
                                </div>
                                <div class="speaker-card-back">
                                    <h2 class="speaker-name">John Doe</h2>
                                    <p class="speaker-bio">
                                        10+ years experience in machine learning and neural networks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card-inner">
                                <div class="speaker-card-front">
                                    <div class="speaker-image"><img src={ProfileIcon} alt=""></img></div>
                                    <h2 class="speaker-name">John Doe</h2>
                                    <p class="speaker-role">AI Specialist</p>
                                </div>
                                <div class="speaker-card-back">
                                    <h2 class="speaker-name">John Doe</h2>
                                    <p class="speaker-bio">
                                        10+ years experience in machine learning and neural networks
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







        </Layout>
    );
};

export default Event;
