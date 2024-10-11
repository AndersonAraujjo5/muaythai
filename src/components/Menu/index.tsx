import Link from "next/link";

export default function Menu(){
    return (
        <div className="position-fixed bottom-0 bg-dark w-100">
            <div className="d-flex my-3 mx-4 justify-content-around">
                <Link href="/" className="box text-center">
                    <h5 className="m-0"><i className="bi bi-house"></i></h5>
                    <small className="m-0">Home</small>
                </Link>
                <Link href={'/aprender'} className="box text-center">
                    <h5 className="m-0"><i className="bi bi-book"></i></h5>
                    <small className="m-0">Aprender</small>
                </Link>
                <Link href={"/agenda"} className="box text-center">
                    <h5 className="m-0"><i className="bi bi-calendar3"></i></h5>
                    <small className="m-0">Agendar</small>
                </Link>
                <div className="box text-center">
                    <h5 className="m-0"><i className="bi bi-currency-dollar"></i></h5>
                    <small className="m-0">Debitos</small>
                </div>
            </div>
        </div>
    )
}