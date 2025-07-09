import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Hiton14/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching repos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 className="text-center">Latest Projects</h2>

        {loading ? (
          <p className="text-center">Loading projects...</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {repos.map((repo) => (
              <li
                key={repo.id}
                style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  background: '#f9f9f9',
                }}
              >
                <h3 style={{ margin: '0 0 0.5rem' }}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0070f3', textDecoration: 'none' }}
                  >
                    {repo.name}
                  </a>
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#444' }}>
                  {repo.description || 'No description provided.'}
                </p>
                <p style={{ fontSize: '0.8rem', color: '#777' }}>
                  Language: {repo.language || 'N/A'} — Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
