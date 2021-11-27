import homeStyles from '../styles/Home.module.css'

const Home = () => {
    const x = 2
    return (
        <>
        <section className='s1 fullscreen'>
            <div className='main_container'>
                <div className='greeting_wrapper'>
                    <h1>Hi, I'm <label className={homeStyles.jc_name}>João Chirindza</label></h1>
                </div>

                <div className='intro_wrapper'>
                    <div className="left_column">
                        <img id="profile_pic" src="../images/john.jpg" />
                        <h4 className={homeStyles.pic_description}><label>I'm a Web Developer</label></h4>
                        <p id="settings-note"><i className="fas fa-info-circle"></i> Available for new opportunities</p>
                    </div>

                    <div className='right_column'>
                        <div id='preview-shadow'>
                            <div id="preview">
                                <div id="corner-tl" className='corner'></div>
                                <div id="corner-tr" className='corner'></div>
                                <h3>What I Do</h3>
                                <p>Web Developer with experience in building, integrating and testing web applications. Backend creation with PHP or Node.js;</p>
                                <div id="corner-br" className='corner'></div>
                                <div id="corner-bl" className='corner'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='s2' id="about">
            <div className='main_container'>
                <h3 className='text_center'>MORE ABOUT ME</h3>
                <div className='about_wrapper'>
                    <div className='text_center'>
                        <p>I'm a web developer based in Maputo, Mozambique and Computer Engineering Student.</p>

                        <p>When I'm not coding/working on some project, probably I'm learning more about the Web technologies, talking/writing about technology or exchanging impressions and experiences.</p>
                    </div>

                    <div className='about_me'>

                        <div className='expertises'>
                            <h4 className='text_center'>Top expertise</h4>
                            
                            <p className='text_center'>Here are some technologies I've been working with recently:</p>

                            <div id='skills'>
                                <ul>
                                    <li className='skill_title'>Languages 1</li>
                                    <li>- PHP</li>
                                    <ul>
                                        <li>- Laravel</li>
                                    </ul>
                                    <li>- JavaScript</li>
                                    <ul>
                                        <li>- React JS</li>
                                        <li>- Node.js</li>
                                        <li>- jQuery</li>
                                    </ul>
                                </ul>

                                <ul>
                                    <li className='skill_title'>Languages 2</li>
                                    <li>- JAVA</li>
                                    <ul>
                                        <li>- Spring Boot</li>
                                    </ul>
                                    <li>- C#</li>
                                    <ul>
                                        <li>- .NET</li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li className='skill_title'>Database/Hosting</li>
                                    <li>- MySQL</li>
                                    <li>- SQL Sever</li>
                                    <li>- AWS</li>
                                    <li>- Heroku</li>
                                </ul>
                                <ul>
                                    <li className='skill_title'>Other tech's</li>
                                    <li>- WordPress</li>
                                    <li>- Git and Github</li>
                                </ul>
                            </div>

                            <p className='text_center'>Nowadays focusing on PHP + JavaScript: <a target="_blank" href="resume.pdf">Download Resume</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>

    )
}

export default Home