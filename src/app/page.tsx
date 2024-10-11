/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main>
      <div className="header bg-dark p-4">
        <header>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              {/* foto do user */}

              <div style={{
                width: 51, height: 51, backgroundColor: 'red'
              }} className="rounded-circle me-3"></div>
              <div>
                <p className="m-0">Anderson Tailon</p>
                <small>Muaythai</small>
              </div>
              {/* fim foto do user */}
            </div>

            <div className="d-flex align-items-center">
              <div className="mx-4">
                <button title="notification" className="btn rounded-circle border d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                  <i className="bi bi-cart"></i>
                </button>
              </div>
              <div>
                <i className="btn rounded-circle border position-relative bi bi-bell">
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </i>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-dark-subtle my-4 rounded-4">
          <div className="d-flex justify-content-center py-4">
            <img src="https://static.vecteezy.com/system/resources/previews/002/681/424/original/cartoon-muay-thai-kick-boxing-pose-vector.jpg"
              className="rounded-circle"
              height={128} width={124} alt="muaythai" />
          </div>

          <div className="d-flex justify-content-around p-2">
            <div className="card w-100 p-4 d-flex align-items-center text-center">
              <h3>10</h3>
              <p>Aulas realizadas</p>
            </div>
            <div className="m-1"></div>
            <div className="card w-100 p-4 d-flex align-items-center text-center">
              <h3>30</h3>
              <p>Total de aulas para a proxima graduação</p>
            </div>
          </div>
          <div className="text-end pb-3 mx-3">
            <a href="">Veja sua evolução</a>
          </div>
        </div>
      </div>


      <div className="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

      <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p className="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
        </div>
      </div>
    </main>
  );
}
