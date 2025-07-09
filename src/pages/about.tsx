import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function About() {
 
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 className="text-center">About Me</h2>

        <p style={{ marginBottom: '1.5rem' }}>
          Hi, I’m <strong>James Mwakio</strong>, a passionate engineer and a software
          developer in Gomycode Academy based in Nairobi. I enjoy solving problems and building digital products that
          make life easier. My interests include full-stack web development, React, and TypeScript.
        </p>

        <p style={{ marginBottom: '2rem' }}>
          I’m continuously learning and improving by building hands-on projects.
        </p>

        
      </main>
      <Footer />
    </>
  );
}
