export default function Contact() {
    const config = {
        email: 'magalabaskar65@gmail.com',
        phone: '8940090783'
    };

    return (
        <section id="contact" style={{ background: 'lightblue', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', borderBottom: '2px solid yellow', marginBottom: '20px' }}>
                    Contact
                </h1>
                <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                    If you want to discuss more in detail, please contact me
                </p>

                <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                        <strong>Email:</strong> <a href={`mailto:${config.email}`} style={{ color: 'cyan' }}>{config.email}</a>
                    </p>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                        <strong>Phone:</strong> <a href={`tel:${config.phone}`} style={{ color: 'cyan' }}>{config.phone}</a>
                    </p>

                    <a
                        href={`mailto:${config.email}`}
                        style={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            padding: '12px 24px',
                            borderRadius: '5px',
                            fontSize: '18px',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e0c500'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'yellow'}
                    >
                        Go to Email
                    </a>
                </div>
            </div>
        </section>
    );
}
