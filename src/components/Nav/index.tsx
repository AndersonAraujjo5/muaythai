export default function Nav() {
    return (
        <a href="#" className="nav-link d-flex justify-content-between align-items-center my-3 border-bottom">
            <div className="box d-flex">
                <div style={{
                    width: 40, height: 40
                }} className="btn border rounded-circle me-3">
                    <i className="bi bi-book"></i>
                </div>

                <div className="m-0 ">
                    <h6 className="m-0">titulo</h6>
                    <p>descrição</p>
                </div>
            </div>
            <i className="bi bi-chevron-right"></i>
        </a>
    )
}