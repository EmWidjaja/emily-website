import Link from 'next/link';
import styles from './projects.module.css';

export const metadata = {
  title: 'OTL studios',
  icons: {
    icon: '',
  },
};

export default function Projects() {
  return (
    <main>
      <nav className="flex items-center justify-between p-4"> 
          <Link href="/">
            <img src="/images/OTLlogo.jpeg" alt="Website Logo" width="160" height="80" />
          </Link>

          <div className="nav-links" id="navLinks">
            <ul className="flex gap-4">
              <li><Link href="/Shop">Shop</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/Read">Read</Link></li>
              <li><Link href="/Events">Events</Link></li>
              <li><Link href="/FAQ">FAQ</Link></li>
            </ul>
          </div>
        </nav>
    </main>
  );
}