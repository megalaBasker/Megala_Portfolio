import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'lightblue',
            padding: '40px',
            flexWrap: 'wrap',
        }}>
           
            <div style={{ flex: '1', padding: '20px', textAlign: 'left' }}>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'darkblue',
                    marginBottom: '10px',
                }}>
                    Hi, <br /> I'm <span style={{ color: 'orange' }}>Megala</span> Baskar
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'darkslategray',
                    marginBottom: '20px',
                }}>
                    I'm a Full-stack Developer and Designer
                </p>

                <a
                    href="https://www.linkedin.com/in/megala-baskar-1008662a5"
                    style={{
                        fontSize: '24px',
                        color: 'blue',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiOutlineLinkedin />
                    LinkedIn
                </a>
            </div>

            
            <div style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img
                    src={HeroImg}
                    alt="Hero"
                    style={{
                        width: '300px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                />
            </div>
        </section>
    );
}
