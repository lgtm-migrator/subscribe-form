import Link from 'next/link'

export default function Home() {
    return (
        <>
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