import { useNavigate } from "react-router-dom"

function CadOrganizacao() {

    const navigate = useNavigate()

    return (
        <>
            <div className="p-3">
                <div className="card border">
                    <div className="card-body">
                        <div className="conatiner">
                            <div className="row">
                                <div className="mx-auto col-sm col-md-6 col-lg-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-text text-center">Já possuí cadastro ?</h5>
                                            <br />
                                            <button className="d-block w-50 mx-auto fundoBTN" onClick={function () {
                                                navigate("/")
                                            }} ><i className="bi bi-box-arrow-in-right me-2"></i>Fazer Login</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-5">
                                    <div className="card">
                                        <div className="card-header">
                                            <p className="card-title">Por que pedimos o cadastro do paciente ?</p>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text fs-5">Com o cadastro personalizado por paciente, podemos oferecer serviços como:</p>
                                            <ul>
                                                <li className="card-text">Notificações via e-mail.</li>
                                                <li className="card-text">Notificações via WhatsApp.</li>
                                                <li className="card-text">Histórico de consulta.</li>
                                                <li className="card-text">Conversa em tempo real com o profissional de sua preferência.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadOrganizacao