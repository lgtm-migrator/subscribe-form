import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <h1 style={{ textAlign: 'center' }}>Pages</h1>
            <div style={{
                margin: '0 auto', width: '300px', display: 'flex',
                flexDirection: 'column', marginTop: '50px', fontSize: '20px',
                color: 'blue'
            }}>
                <Link href='/goodbye'>Goodbye page</Link>
                <br />
                <Link href='/subscribe'>Subscribe page</Link>
                <br />
                <Link href='/unsubscribe'>Unsubscribe page</Link>
            </div>
        </>
    )
}