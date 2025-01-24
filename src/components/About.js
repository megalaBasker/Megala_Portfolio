import AboutImg from '../assets/about.png';

export default function About() {
    return (
        <section style={{ background: 'lightblue', padding: '20px' }} id="about">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
               
                <div style={{ flex: '1', textAlign: 'center' }}>
                    <img
                        src={AboutImg}
                        alt="About Megala Baskar"
                        style={{ width: '50%', borderRadius: '10px' }} 
                    />
                </div>

                <div style={{ flex: '1' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', borderBottom: '2px solid yellow', display: 'inline-block', paddingBottom: '5px' }}>
                        About Me
                    </h1>
                    <p style={{ marginBottom: '10px' }}>
                        Hi, My name is Megala Baskar. I am a Full-stack Web Developer. I build beautiful websites with React.js.
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        I am proficient in Frontend skills like React.js, Redux, and Tailwind CSS.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        In the backend, I am skilled in Node.js, Express.js, MongoDB, and Mongoose.
                    </p>
                    <a
                        href="#contact"
                        style={{
                            background: 'yellow',
                            color: 'black',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                        }}
                    >
                        Go to Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
