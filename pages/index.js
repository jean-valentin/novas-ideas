import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/sobre"><a>Acessar página Sobre</a></Link>
            <br />
            <Link href="/contador"><a>Acessar Contador OnLine</a></Link>
        </div>
    )
}

export default Home
