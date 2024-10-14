import Link from "next/link";

export default function Debitos() {
    return (
        <main>
            <div className="card p-4">
                <div className="row">
                    <div className="col-5 me-2 border-end">
                        <h6>Fatura em aberto</h6>
                        <div className="d-flex">
                            <h2>R$ 99,90</h2>
                        </div>
                        <p className="m-0">Vencimento: 10/out</p>
                    </div>

                    <div className="col-6">
                        <Link href={"/#"} className=" d-flex align-items-center nav-link">
                            <h3 className="me-4"><i className="bi bi-qr-code-scan"></i></h3>
                            <p>Pix</p>
                        </Link>
                        <Link href={"/#"} className="d-flex align-items-center nav-link border-top mt-1 pt-1">
                            <h3 className="me-4"><i className="bi bi-credit-card"></i></h3>
                            <p>Cartão de credito/debito</p>
                        </Link>
                        
                    </div>
                </div>
            </div>

            <div className="card p-4 my-4">
                <h6>Historico</h6>
                <div className="d-flex justify-content-between py-3">
                    <div className="d-flex">
                        <i className="bi bi-currency-dollar me-4"></i>
                        <div className="box">
                            <h6>Mensalidade</h6>
                            <p className="m-0">R$ 100,00</p>
                            <small><b>Cartão de credito manual</b></small>
                        </div>
                    </div>
                    <p>09/10/2024</p>
                </div>

                <div className="d-flex justify-content-between border-top mt-3 py-3">
                    <div className="d-flex">
                        <i className="bi bi-currency-dollar me-4"></i>
                        <div className="box">
                            <h6>Mensalidade</h6>
                            <p className="m-0">R$ 100,00</p>
                            <small><b>Cartão de credito manual</b></small>
                        </div>
                    </div>
                    <p>09/10/2024</p>
                </div>
            </div>
        </main>
    )
}