import { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (
    <div>
        <h2>Home</h2>
        <Contador />
        <br />
        <div>Versão de Teste</div>

        <Link href="/"><a>Voltar para Home</a></Link>
    </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Acicionar</button>
        </div>
    )
     
    
}

export default Home
