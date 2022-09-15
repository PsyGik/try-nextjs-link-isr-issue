import Link from 'next/link';

export default function AboutPage({ time, key }) {
  return (
    <div key={key}>
      <h1>About us</h1>
      <p>Props: {time}</p>
      <div>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const time = new Date().toISOString();
  console.log('getStaticProps', time);
  return {
    props: {
      time,
      key: time,
    },
    revalidate: 2,
  };
}
