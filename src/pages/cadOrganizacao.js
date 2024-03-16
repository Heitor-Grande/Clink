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
                                <div className="mx-auto col-sm col-md-6 col-lg-5 mb-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-text text-center">Já possuí cadastro ?</h5>
                                            <br />
                                            <button className="d-block w-50 mx-auto btn-padrao-1" onClick={function () {
                                                navigate("/")
                                            }} ><i className="bi bi-box-arrow-in-right me-2"></i>Fazer Login</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-5 mb-2">
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
                                <div className="w-100"></div>
                                <div className="col-sm col-dm col-lg">
                                    <div className="card">
                                        <div className="card-body">

                                            <form action="">

                                                <div className="container">

                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="border-bottom text-center">Login</p>
                                                        </div>
                                                        <div className="w-100"></div>
                                                        <div className="col-sm col-md-4 col-lg-6 mb-2">
                                                            <div className="form-floating">
                                                                <input type="email" required className="form-control" placeholder="" />
                                                                <label >E-mail</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-3 mb-2">
                                                            <div className="form-floating">
                                                                <input type="password" required  className="form-control" placeholder="" />
                                                                <label >Senha</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-3 mb-2">
                                                            <div className="form-floating">
                                                                <input type="password" required  className="form-control" placeholder="" />
                                                                <label >Confirmar Senha</label>
                                                            </div>
                                                        </div>
                                                        <div className="w-100"></div>
                                                        <div className="col">
                                                            <p className="border-bottom text-center">Informações básicas</p>
                                                        </div>
                                                        <div className="w-100"></div>
                                                        <div className="col-sm col-md-4 col-lg-6 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" required className="form-control" placeholder="" />
                                                                <label >Nome Completo</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-4 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" required className="form-control" placeholder="" />
                                                                <label >CPF</label>
                                                            </div>
                                                        </div>
                                                        <div className="w-100"></div>
                                                        <div className="col">
                                                            <p className="border-bottom text-center">Endereço</p>
                                                        </div>
                                                        <div className="w-100"></div>
                                                        <div className="col-sm col-md-4 col-lg-2 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" required className="form-control" placeholder="" />
                                                                <label >CEP</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-4 mb-2">
                                                            <div className="form-floating">
                                                                <select className="form-select" required id="estado" name="estado">
                                                                    <option selected>Selecionar Estado</option>
                                                                    <option value="AC">Acre</option>
                                                                    <option value="AL">Alagoas</option>
                                                                    <option value="AP">Amapá</option>
                                                                    <option value="AM">Amazonas</option>
                                                                    <option value="BA">Bahia</option>
                                                                    <option value="CE">Ceará</option>
                                                                    <option value="DF">Distrito Federal</option>
                                                                    <option value="ES">Espírito Santo</option>
                                                                    <option value="GO">Goiás</option>
                                                                    <option value="MA">Maranhão</option>
                                                                    <option value="MT">Mato Grosso</option>
                                                                    <option value="MS">Mato Grosso do Sul</option>
                                                                    <option value="MG">Minas Gerais</option>
                                                                    <option value="PA">Pará</option>
                                                                    <option value="PB">Paraíba</option>
                                                                    <option value="PR">Paraná</option>
                                                                    <option value="PE">Pernambuco</option>
                                                                    <option value="PI">Piauí</option>
                                                                    <option value="RJ">Rio de Janeiro</option>
                                                                    <option value="RN">Rio Grande do Norte</option>
                                                                    <option value="RS">Rio Grande do Sul</option>
                                                                    <option value="RO">Rondônia</option>
                                                                    <option value="RR">Roraima</option>
                                                                    <option value="SC">Santa Catarina</option>
                                                                    <option value="SP">São Paulo</option>
                                                                    <option value="SE">Sergipe</option>
                                                                    <option value="TO">Tocantins</option>
                                                                    <option value="EX">Estrangeiro</option>
                                                                </select>
                                                                <label>Estado</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-3 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" required  className="form-control" placeholder="" />
                                                                <label >Cidade</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-3 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" required  className="form-control" placeholder="" />
                                                                <label >Logradouro</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-3 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" required  className="form-control" placeholder="" />
                                                                <label >Bairro</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-2 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" required  className="form-control" placeholder="" />
                                                                <label >Numero</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm col-md-4 col-lg-7 mb-2">
                                                            <div className="form-floating">
                                                                <input type="text" className="form-control input-personalizado" placeholder="" />
                                                                <label >Complemento</label>
                                                            </div>
                                                        </div>
                                                        <div className="w-100"></div>
                                                        <div className="col-sm col-md col-lg mb-2 text-end">
                                                            <button type="submit" className="btn-padrao-1 btn-lg fs-5">Cadastrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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