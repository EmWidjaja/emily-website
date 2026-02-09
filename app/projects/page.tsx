import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './projects.module.css';

export const metadata = {
  title: 'OTL studios',
  icons: {
    icon: '',
  },
};

export default function Projects() {
  return (
    <main className={styles.page}>
      <nav className="grid grid-cols-3 items-center px-6 py-4"> 
          <div className="justify-self-start">
            <Link href="/">
              <img src="/images/OTLlogo.jpeg" alt="Website Logo" width="160" height="80" />
            </Link>
          </div>

          <div className="nav-links" id="navLinks">
            <ul className="flex justify-center gap-8">
              <li className={styles.shop}><Link href="/Shop">SHOP</Link></li>
              <li className={styles.about}><Link href="/About">ABOUT</Link></li>
              <li className={styles.read}><Link href="/Read">READ</Link></li>
              <li className={styles.events}><Link href="/Events">EVENTS</Link></li>
              <li className={styles.faq}><Link href="/FAQ">FAQ</Link></li>
            </ul>
          </div>

          <div className="justify-self-end">
          <Link href="/cart" aria-label="Shopping cart">
            <FaShoppingCart className="text-2xl hover:opacity-70 transition cursor-pointer" />
          </Link>
        </div>

        </nav>
    </main>
  );
}