export default function CVComponent() {
    return (
        <div className='flex flex-col w-full gap-8 mr-0 bg-purple-800'>
            <div className='w-5/6 pt-4 m-auto'>
                <h2>Summary</h2>
                <p className='pt-2'>A mid-level MERN full-stack web developer with approximately four years of aggregate experience, including two as the sole proprietor of my own agency, Texas WebGems. Total of seven years collective experience in the last fifteen years with front-end development. Looking to expand my knowledge and utilize my expertise at a company with inclusive values and global reach.</p>
            </div>
            <div className='w-5/6 m-auto'>
                <h2>Experience</h2>
                <ul className='list-none'>
                    <div className='py-2'>
                        <h3 className='font-bold'>Programmer IV, Texas Department of State Health Services</h3>
                        <span className='italic'>April - August 2024</span>
                        <ul>
                            <li>Maintained Texas Health Data website</li>
                            <li>Tested and fixed accessibility concerns on DSHS sites, including Texas Health Data - readability improvements led to 20% increase in traffic month-over-month</li>
                            <li>Ran weekly and monthly Google Analytics reports to analyze site visitor data</li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <h3 className='font-bold'>Founder, Full-Stack Web Developer and Business Consultant, Texas WebGems</h3>
                        <span className='italic'>August 2022 - Present</span>
                        <ul>
                            <li>Built websites and web apps for clients using the JavaScript MERN stack, in accordance with WCAG and responsiveness guidelines</li>
                            <li>Maintained existing sites for four clients</li>
                            <li>Two small business advisory accounts acquired in FY2023</li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <h3 className='font-bold'>Software Engineer, 100Devs</h3>
                        <span className='italic'>August 2022 - Present</span>
                        <ul>
                            <li>Collaborated with cross-functional agile teams to design, develop, and deploy software applications</li>
                            <li>Managed codebase using Git/GitHub/Glitch/CodePen and performed code reviews for other team members</li>
                            <li>Worked with front-end development team to implement web-based interfaces using HTML, CSS, JavaScript, and the MERN stack</li>
                        </ul>
                    </div>
                </ul>
            </div>
            <div className='w-5/6 m-auto'>
                <h2>Education</h2>
                <ul className='list-none'>
                    <div>
                        <h3>Mercy College</h3>
                        <span className='italic'>Bachelor of Science, Psychology, exp. 2025</span>
                    </div>
                </ul>
            </div>
            <div className='w-5/6 pb-6 m-auto'>
                <h2>Certifications and Talks</h2>
                <h3>Certs:</h3>
                <div className='py-1'>
                    <p className='font-bold'>Front-End Web Development Fundamentals, <span className='italic font-normal'>Udacity, September 2022</span></p>
                </div>
                <h3>Talks:</h3>
                <div>
                    <p className='font-bold'>Authenticity in the Workplace, <span className='italic font-normal'>ZoomInfo, June 2024</span></p>
                    <p className='font-bold' style={{ paddingBottom: '0.2em' }}>Hello World 101, <span className='italic font-normal'>10th Annual TransTech Summit, March 2024</span></p>
                </div>
            </div>
        </div>
    );
}