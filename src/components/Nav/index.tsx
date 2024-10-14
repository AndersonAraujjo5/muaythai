export default function Nav({title, subtitle, Icon}:{
    title: string
    subtitle: string
    Icon:any
}) {
    return (
        <a href="#" className="nav-link d-flex justify-content-between align-items-center my-3 border-bottom">
            <div className="box d-flex">
                <div style={{
                    width: 40, height: 40
                }} className="btn border rounded-circle me-3">
                    <Icon />
                </div>

                <div className="m-0 ">
                    <h6 className="m-0">{title}</h6>
                    <p>{subtitle}</p>
                </div>
            </div>
            <i className="bi bi-chevron-right"></i>
        </a>
    )
}