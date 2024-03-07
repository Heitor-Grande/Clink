import { useNavigate } from "react-router-dom"
import Logo from "../assets/android-chrome-512x512.png"
function Login() {

    const navigate = useNavigate()

    return (
        <>
            <div className="p-3 bg-dark">
                <div className="card border">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-5 text-center">

                                    <form className="w-100 p-2 border rounded">

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

                                        <button type="submit" className="m-auto d-block btn btn-dark w-50"><i className="bi bi-box-arrow-in-right"></i> Acessar</button>
                                        <br />
                                        <button type="button" className="m-auto d-block btn btn-link">Esqueceu a senha? Recupere aqui.</button>
                                    </form>
                                </div>

                                <div className="col-sm-6 col-md-6 col-lg-5 mx-auto">
                                    <div className="card mt-2">
                                        <div className="card-body">
                                            <p><b>Está procurando os melhores profissionais da saúde na sua cidade ?</b></p>
                                            <ul>
                                                <li>Crie sua conta gratuitamente.</li>
                                                <li>Encontre os profissionais da sua cidade.</li>
                                                <li>Faça o agendamento na data de sua preferência.</li>
                                                <li>Receba notificações de aviso antes da consulta.</li>
                                            </ul>

                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn btn-dark text-white" onClick={function () {
                                                navigate("/cad/nova/organizacao")
                                            }}><i className="fs-5 bi bi-person-add me-1"></i>Encontrar Profissionais</button>
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
                                            <h5 className="card-title">Consultório</h5>
                                            <p className="card-text mb-0">Cadastre ou encontre os melhores consultórios da sua cidade.</p>
                                            <p className="card-text mt-0 mb-0">Disponibilize a agenda dos profissionais do consultório.</p>
                                            <p className="card-text mt-0">Tenha o controle total da agenda dos seus profissionais.</p>
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
                                            <h5 className="card-title">Pacientes</h5>
                                            <p className="card-text mb-0">Encontre os profissionais da saúde de sua preferência.</p>
                                            <p className="card-text mt-0 mb-0">Lista de consultórios mais próximos de você.</p>
                                            <p className="card-text mt-0">Faça o agendamento no dia e horário de sua preferência.</p>
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

                        <div className="card mb-3 bg-secondary text-white">
                            <div className="row g-0 text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Cadastrar meu consultório</h5>
                                    <p className="card-text mb-0"><i className="bi bi-building-fill-add fs-3"></i></p>
                                    <br />
                                    <button className="btn btn-dark">Cadastrar Consultório</button>
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