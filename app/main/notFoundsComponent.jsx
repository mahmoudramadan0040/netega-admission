
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to home after 3 seconds
    const timeout = setTimeout(() => {
      router.push('/main');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.description}>Oops! The page you're looking for doesn't exist.</p>
      <p>Redirecting to the homepage in 3 seconds...</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '24px',
    color: '#666',
  },
};