import Link from 'next/link'
import './style.css'
export default function Aprender(){
    return(
        <main className="my-4">
            <h2>Aprender</h2>
            <Link href={'/aprender/mhad'} className="card p-4 my-4 nav-link"
            style={{height: 150,
                backgroundImage: 'url(/assets/images/muaythai-soco.jpeg)',
                backgroundBlendMode: 'overlay',
                backgroundRepeat: 'round'
            }}>
                <h6>Socos (Mhad)</h6>
                <p className='mt-5'>Aprenda as tecnicas de soco (Mhad)</p>
            </Link>

            <Link href={'/#'} className="card p-4 my-4 nav-link"
            style={{height: 150,
                backgroundImage: 'url(/assets/images/Chute-Muay-Thai.jpg)',
                backgroundBlendMode: 'overlay',
                backgroundRepeat: 'round'
            }}>
                <h6>Chutes (Dteh)</h6>
                <p className='mt-5'>Aprenda as tecnicas de chute (Dteh)</p>
            </Link>

            <Link href={'/#'} className="card p-4 my-4 nav-link"
            style={{height: 150,
                backgroundImage: 'url(/assets/images/joelhada.jpg)',
                backgroundBlendMode: 'overlay',
                backgroundRepeat: 'round'
            }}>
                <h6>Joelhadas (Khao)</h6>
                <p className='mt-5'>Aprenda as tecnicas de Joelhadas (Khao)</p>
            </Link>

            <Link href={'/#'} className="card p-4 my-4 nav-link"
            style={{height: 150,
                backgroundImage: 'url(/assets/images/Defesa-Muay-Thai.webp)',
                backgroundBlendMode: 'overlay',
                backgroundRepeat: 'round'}}>
                <h6>Defesas (Pongkan)</h6>
                <p className='mt-5'>Aprenda as tecnicas de Defesas (Pongkan)</p>
            </Link>
        </main>
    )
}