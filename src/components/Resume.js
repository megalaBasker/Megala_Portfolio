import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1mVKBV8u9Bm19ghn6850m6ncSxT0HKIr_/view?usp=sharing'
    }

    return (
        <section id="resume" style={{ background: 'lightblue', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
            <div style={{ paddingBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                    src={ResumeImg} 
                    alt="Resume" 
                    style={{ width: '250px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
            </div>

            <div style={{ textAlign: 'center', color: 'black' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', borderBottom: '2px solid yellow', marginBottom: '20px' }}>
                    Resume
                </h1>
                <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                    Check out my resume and learn more about my skills and experience.
                </p>
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    You can download my resume by clicking the link below.
                </p>

                <a 
                    href={config.link} 
                    style={{ backgroundColor: 'yellow', color: 'black', padding: '12px 24px', borderRadius: '5px', fontSize: '18px', textDecoration: 'none', transition: 'background-color 0.3s ease' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e0c500'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'yellow'}
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}
