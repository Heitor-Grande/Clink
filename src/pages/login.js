import { useNavigate } from "react-router-dom"
import Logo from "../assets/android-chrome-512x512.png"
function Login() {

    const navigate = useNavigate()

    return (
        <>
            <div className="m-3">
                <div className="card bg-dark border">
                    <div className="card-body bg-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-5 text-center">

                                    <form className="w-100 border p-2 rounded">

                                        <img src={Logo} alt="" className="d-block m-auto w-25" />
                                        <br />
                                        <div className="form-floating mb-3 w-75 m-auto">
                                            <input type="email" className="form-control" placeholder="" />
                                            <label >Email</label>
                                        </div>
                                        <div className="form-floating w-75 mb-3 m-auto">
                                            <input type="password" className="form-control" placeholder="" />
                                            <label >Senha</label>
                                        </div>

                                        <button type="submit" className="btn btn-light w-50"><i className="bi bi-box-arrow-in-right me-2"></i>ENTRAR</button>
                                        <br />
                                        <button type="button" className="btn btn-link">Esqueceu a senha? Recupere aqui.</button>
                                    </form>
                                </div>

                                <div className="col-sm-6 col-md-6 col-lg-5 mx-auto">
                                    <div className="card mt-2">
                                        <div className="card-body">
                                            <p><b>Ainda não tem sua organização ?</b></p>
                                            <ul>
                                                <li>Monte a org dos seus sonhos com os melhores jogadores de CS.</li>
                                                <li>Dispute torneios mata-mata de até 8 players.</li>
                                                <li>Contrate jogadores de outras organizações.</li>
                                                <li>Monte o estilo de jogo da sua organização.</li>
                                                <li>Controle sua organização do celular ou do computador!</li>
                                            </ul>

                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn btn-dark text-white" onClick={function () {
                                                navigate("/cad/nova/organizacao")
                                            }}><i className="bi bi-building-fill-add"></i> MONTAR ORGANIZAÇÃO</button>
                                        </div>
                                    </div>


                                    <div className="card mt-2">
                                        <div className="card-body">
                                            <p><b>Notas de atualizações:</b></p>
                                            <ul>
                                                <li>Sem atualizações recentes</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="footer w-100 bg-white text-end px-3">
                        <span>© GSD - 2024</span>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <div className="container">
                    <div className="row">

                        <div className="col-sm-10 col-md-8 col-lg-8">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-lg-2 col-sm-2 col-md-4 text-center pt-2">
                                        <i className="fs-1 bi bi-building-fill-add"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Organização</h5>
                                            <p className="card-text mb-0">Monte a organização e a line up dos sonhos.</p>
                                            <p className="card-text mt-0 mb-0">Cuide da sua organização e leve ela ao top 10 do mundial.</p>
                                            <p className="card-text mt-0">Comece com uma line-up com jogadores em início de carreira, ajude-os a evoluir ou contrate outros.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-10 col-md-8 col-lg-8 ms-auto">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-lg-2 col-sm-2 col-md-4 text-center pt-2">
                                        <i className="fs-1 bi bi-file-person-fill"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Jogadores</h5>
                                            <p className="card-text mb-0">Comece com jogadores com seus MP(Major Points) em inicio de carreira.</p>
                                            <p className="card-text mt-0 mb-0">Evolua seus jogadores ou contrate jogadores mais experientes.</p>
                                            <p className="card-text mt-0">Alguns jogadores são unicos, mas podem trocar de organização na janela de transferência.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <br />
                    <br />
                    <br />
                    <div className="col-sm-10 col-md-8 col-lg-4 m-auto">

                        <div className="card mb-3 bg-warning text-white">
                            <div className="row g-0 text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Comunidade</h5>
                                    <p className="card-text mb-0"><i className="fs-1 bi bi-discord"></i></p>
                                    <br />
                                    <button className="btn btn-dark">Juntar-se ao discord</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login