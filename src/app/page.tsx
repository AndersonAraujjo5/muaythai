/* eslint-disable @next/next/no-img-element */

import DonutChart from "@/components/DonutChart";

export default function Home() {

  const kruang = [
    {
      id: 1,
      numero: 1,
      nome: "Khan Nueng",
      color: ['white'],
      exp: 'Iniciante',
      tempo: "3 Meses"
    },
    {
      id: 2,
      numero: 2,
      nome: "Khan Song",
      color: ['yellow'],
      exp: 'Iniciante',
      tempo: "3 Meses"
    },
    {
      id: 3,
      numero: 3,
      nome: "Khan Sam",
      color: ['yellow', 'white'],
      exp: 'Iniciante',
      tempo: "3 Meses"
    },
    {
      id: 4,
      numero: 4,
      nome: "Khan Sih",
      color: ['green'],
      exp: 'Iniciante',
      tempo: "3 Meses"
    },
    {
      id: 5,
      numero: 5,
      nome: "Khan Hah",
      color: ['green', 'white'],
      exp: 'Intermediario',
      tempo: "6 Meses"
    },
    {
      id: 6,
      numero: 6,
      nome: "Khan Hok",
      color: ['blue'],
      exp: 'Intermediario',
      tempo: "6 Meses"
    },
    {
      id: 7,
      numero: 7,
      nome: "Khan Jed",
      color: ['blue', 'white'],
      exp: 'Intermediario',
      tempo: "6 Meses"
    },
    {
      id: 8,
      numero: 8,
      nome: "Khan Pad",
      color: ['#5C3317'],
      exp: 'Intermediario',
      tempo: "6 Meses"
    },
    {
      id: 9,
      numero: 9,
      nome: "Khan Kaoh",
      color: ['#5C3317', 'white'],
      exp: 'Intermediario',
      tempo: "6 Meses"
    },
    {
      id: 10,
      numero: 10,
      nome: "Khan Sib",
      color: ['red'],
      exp: 'Intermediario',
      tempo: "6 Meses"
    },
  ]

  return (
    <main>

      <div className="rounded-4 card p-4">
        <div className="mb-2">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="m-0">Kruang Atual</h6>
              <small>2º Khan song</small>
              <div style={{ height: 5 }} className="progress-stacked">
                <div className="progress w-100" role="progressbar" aria-label="Segment one" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" >
                  <div className="progress-bar bg-warning"></div>
                </div>

              </div>
            </div>
            <div>
              <h6 className="m-0">Prox. Kruang</h6>
              <small>3º Khan sam</small>
              <div style={{ height: 5 }} className="progress-stacked">
                <div className="progress w-75 me-4" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" >
                  <div className="progress-bar bg-warning"></div>
                </div>

                <div className="progress w-75 me-4" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" >
                  <div className="progress-bar bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-content-center my-4">
          <div className="w-100">
            <div className="w-75 me-4 m-auto">
              <DonutChart />
            </div>
          </div>
          <div className="w-100 row align-content-center">
            <div className="box">
              <div className="d-flex align-items-center">
                <h2 className="px-2 me-2 border rounded-3 bg-danger"> 40 </h2>
                <p className="m-0"> Aulas para graduação</p>
              </div>
            </div>

            <div className="box my-3">
              <div className="d-flex align-items-center">
                <h2 className="px-2 me-2 border rounded-3 bg-success"> 40 </h2>
                <p className="m-0"> Aulas finalizada</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center py-4">
            <img src="https://static.vecteezy.com/system/resources/previews/002/681/424/original/cartoon-muay-thai-kick-boxing-pose-vector.jpg"
              className="rounded-circle"
              height={128} width={124} alt="muaythai" />
          </div> */}


        <div className="text-end pb-3 mx-3">
          <a href="">Veja sua evolução</a>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-6">
          <div className="card px-4 py-3">
            <h6 className="m-0">Proxima Aula</h6>
            <div className="d-flex my-2">
              <h5 className="m-0 me-2">
                <i className="bi bi-calendar3"></i>
              </h5>
              <p className="m-0">11/04</p>
            </div>
            <small className="m-0">Total de aulas 65</small>
          </div>
        </div>
        <div className="col-6">
          <div className="card px-4 py-3">
            <h6 className="m-0">Mensalidade</h6>
            <div className="d-flex my-2">

              <h5 className="m-0 me-2">
                <i className="bi bi-currency-dollar"></i>
                99,90
              </h5>
            </div>
            <small className="m-0">Vencimento: 11/04</small>
          </div>
        </div>


      </div>

      <div className="card my-4 p-4">
        <h4>Kruangs</h4>

        <div className="w-100 overflow-x-auto">
          <div className="d-flex mb-3" style={{ width: '400%' }}>
            {
              kruang.map((item, index) => (
                <div className="w-75 me-4" key={item.id}>
                  <small>{item.numero}º {item.nome}</small>
                  {item.color.length == 1 ? item.color.map(color => (
                    <div style={{ height: 5 }} className="progress-stacked" key={color}>
                      <div className="progress w-100" role="progressbar" aria-label="Segment one" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" >
                        <div className="progress-bar" style={{ backgroundColor: color }}></div>
                      </div>
                    </div>
                  ))
                    :
                    <div style={{ height: 5 }} className="progress-stacked">
                   { item.color.map(color => (
                      <div key={color} className="progress w-50" role="progressbar" aria-label="Segment one" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" >
                        <div className="progress-bar" style={{ backgroundColor: color }}></div>
                      </div>
                      ))
                    }
                    </div>
                  }
                  <div className="row">
                    <small className="mt-2">{item.exp}</small>
                    <small>{item.tempo}</small>
                  </div>
                </div>
              ))
            }


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
