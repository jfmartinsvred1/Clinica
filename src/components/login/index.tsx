import './login.css'
const Login = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <form className='bg-light p-3 shadow rounded'>
                <div className="form-group mb-3">
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Seu email" />
                </div>
                <div className="form-group mb-5">
                    <input type="password" className="form-control" placeholder="Senha" />
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                    <button type="submit" className="btn btn-secondary">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
export default Login