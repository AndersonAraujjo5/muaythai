import Link from 'next/link'
import './style.css'
export default function Aprender(){
    return(
        <main>
            <h2>Aprender</h2>
            
            <div className="row">
                <div className="col-6">
                    <Link href={'/aprender/mhad'} className="card p-4 my-4 nav-link"
                        style={{
                            height: 150,
                            backgroundImage: 'url(/assets/images/muaythai-soco.jpeg)',
                            backgroundBlendMode: 'overlay',
                            backgroundRepeat: 'round'
                        }}>
                        <h6>Socos (Mhad)</h6>
                    </Link>
                </div>

                <div className="col-6">
                    <Link href={'/#'} className="card p-4 my-4 nav-link"
                        style={{
                            height: 150,
                            backgroundImage: 'url(/assets/images/Chute-Muay-Thai.jpg)',
                            backgroundBlendMode: 'overlay',
                            backgroundRepeat: 'round'
                        }}>
                        <h6>Chutes (Dteh)</h6>
                    </Link>
                </div>
                <div className="col-6">
                    <Link href={'/#'} className="card p-4 my-4 nav-link"
                        style={{
                            height: 150,
                            backgroundImage: 'url(/assets/images/joelhada.jpg)',
                            backgroundBlendMode: 'overlay',
                            backgroundRepeat: 'round'
                        }}>
                        <h6>Joelhadas (Khao)</h6>
                    </Link>
                </div>
                <div className="col-6">
                    <Link href={'/#'} className="card p-4 my-4 nav-link"
                        style={{
                            height: 150,
                            backgroundImage: 'url(/assets/images/Defesa-Muay-Thai.webp)',
                            backgroundBlendMode: 'overlay',
                            backgroundRepeat: 'round'
                        }}>
                        <h6>Defesas (Pongkan)</h6>
                    </Link>
                </div>
            </div>
        </main>
    )
}