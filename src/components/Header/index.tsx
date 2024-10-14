import Nav from "@/components/Nav";

export default function Header() {
  return (
    <>
      <header>
        <div className="d-flex justify-content-between p-4">
          <div className="d-flex">
            {/* foto do user */}


            <a style={{
              width: 51, height: 51, backgroundColor: 'red'
            }} className="btn rounded-circle me-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">

            </a>

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

      <div className="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          
        <a style={{
              width: 51, height: 51, backgroundColor: 'red'
            }} className="btn rounded-circle me-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">

            </a>

            <div>
              <small>Bem vindo</small>
              <p className="m-0">Anderson Tailon</p>
            </div>

          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="w-100">
          <img className="w-100" src="/assets/images/banner.png" />
        </div>
        <div className="offcanvas-body">
          <Nav Icon={() => <i className="bi bi-calendar3"></i>} title="Meus Dados" subtitle={"Minha informações de conta"} />
         {/* <Nav />
         <Nav />
         <Nav /> */}
          
        </div>
      </div>
    </>
  )
}