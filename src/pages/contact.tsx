import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <h2 className="text-center">Contact Me</h2>

     
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p><strong>📍 Location:</strong> Nairobi, Kenya</p>
          <p><strong>📞 Phone:</strong> +254 712 345 678</p>
          <p><strong>✉️ Email:</strong>tjaymarcel01@gmail.com</p>
        </div>

       
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
