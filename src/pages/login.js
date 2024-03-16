import { Link, useNavigate } from "react-router-dom"
import Logo from "../assets/android-chrome-512x512.png"
import { useEffect } from "react"
function Login() {

    const navigate = useNavigate()

    useEffect(function () {


        window.addEventListener("scroll", function () {
            const coordenadas_1 = document.querySelector(".rolagem1")
            const coordenadas_2 = document.querySelector(".rolagem2")
            const coordenadas_3 = document.querySelector(".rolagem3")

            if (coordenadas_1 && coordenadas_1.getBoundingClientRect().bottom <= window.innerHeight) {
                coordenadas_1.className = 'col-sm-10 col-md-8 col-lg-8 animate__animated animate__backInLeft rolagem1'
            }

            if (coordenadas_2 && coordenadas_2.getBoundingClientRect().bottom <= window.innerHeight) {
                coordenadas_2.className = "col-sm-10 col-md-8 col-lg-8 ms-auto animate__animated animate__backInRight rolagem2"
            }

            if (coordenadas_3 && coordenadas_3.getBoundingClientRect().bottom <= window.innerHeight) {
                coordenadas_3.className = "col-sm-10 col-md-8 col-lg-4 m-auto animate__animated animate__bounceIn rolagem3"
            }
        })
    }, [])

    return (
        <>
            <div className="p-3">
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

                                        <button type="submit" className="m-auto d-block btn-padrao-1 w-50"><i className="bi bi-box-arrow-in-right me-2"></i> Acessar</button>
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
                                            <Link to="/cad/nova/organizacao" className="btn-padrao-1"><i className="bi bi-person-add me-2"></i>Encontrar Profissionais</Link>
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

                        <div className="elemento-hidden rolagem1">
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


                        <div className="elemento-hidden rolagem2">
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
                    <div className="elemento-hidden rolagem3">

                        <div className="card mb-3 bg-white">
                            <div className="row g-0 text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Cadastrar meu consultório</h5>
                                    <p className="card-text mb-0"><i className="bi bi-building-fill-add fs-3"></i></p>
                                    <br />
                                    <button className="btn-padrao-1">Cadastrar Consultório</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <footer className="text-center text-lg-start bg-body-tertiary text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between">

                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Grande Soluções Digitais
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">

                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4">
                    © 2023 Copyright <b> </b>
                    <a className="text-reset fw-bold" href="/">GSD</a>
                </div>

            </footer>

        </>
    )
}

export default Login