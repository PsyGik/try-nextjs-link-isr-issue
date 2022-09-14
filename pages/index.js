import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <form id="form" method="GET" action="/api/revalidate">
        <input id="search-btn" type="submit" value="Revalidate" />
      </form>
    </div>
  );
}
