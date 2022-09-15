import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Using next/link</h2>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <h2>Using native anchor</h2>
      <a href="/about">About</a>
      <hr />
      <form id="form" method="GET" action="/api/revalidate">
        <input id="search-btn" type="submit" value="Revalidate" />
      </form>
    </div>
  );
}
