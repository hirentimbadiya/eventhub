import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Events Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img src="" alt="" />
          <Link href='/'> Home </Link>
          <Link href='/events'> Events </Link>
          <Link href='/about-us'> About Us </Link>
        </nav>
      </header>
      <main className={styles.main}>
        {data.map((cat) => {
          return (
            <Link key={cat.id} href={`/events/${cat.id}`}>
              <h2>{cat.title}</h2>
              <Image src={cat.image} alt={cat.title} width={200} height={200} />
              <p>{cat.description}</p>
            </Link>
          )
        })}
      </main>

      <footer>
        <p>© {year} all rights Reserved.</p>
      </footer>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    }
  };
}
