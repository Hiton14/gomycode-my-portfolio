import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const techStack = [
    { name: 'Html', src: '/logo/html.jpeg' },
    { name: 'Css', src: '/logo/css.jpeg' },
    { name: 'JavaScript', src: '/logo/javascript.jpeg' },
    { name: 'TypeScript', src: '/logo/typescript.jpeg' },
    { name: 'React', src: '/logo/react.jpeg' },
    { name: 'Next.js', src: '/logo/next.jpeg' },
    { name: 'Bootstrap', src: '/logo/bootstrap.jpeg' },
     { name: 'Tailwind', src: '/logo/tailwind.jpeg' },
  ];

  return (
    <>
      <Navbar/>
      <main className="text-center">
      <div className="hero-image">
  <Image
    src="/logo/coding.jpeg"
    alt="James Mwakio"
    width={800}
    height={400}
    
  />
</div>

        <h1>Hello, I’m James Mwakio</h1>
        <p>Software Developer student from Gomycode Academy</p>

        <h3 style={{ marginTop: '2rem' }}>Tech Stack</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          <div className="tech-stack">
  {techStack.map((tech) => (
    <div key={tech.name} className="tech-item">
      <img src={tech.src} alt={tech.name} width={50} height={50} />
      <p>{tech.name}</p>
    </div>
  ))}
</div>

        </div>
      </main>
      <Footer />
    </>
  );
}
