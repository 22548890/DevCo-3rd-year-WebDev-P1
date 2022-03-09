import React from 'react'
import './CSS/LoginCSS.css'
import ReactDOM from 'react-dom'
import logo from '../DevCo.gif'


const ImgUpload = ({
    onChange,
    src
}) =>

    <div  >
        <img htmlFor="photo-upload" className='loginimg' src={src} alt="DEVCO LOGO" />
    </div>



const Email = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="email">
            Developer Email / Company Name:
        </label>
        <input
            id="email"
            type="email"
            onChange={onChange}
            maxlength="25"
            value={value}
            placeholder="jbloggs@mail.com"
            required />
    </div>

const Password = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="password">
            Password:
        </label>
        <input
            id="password"
            type="password"
            onChange={onChange}
            maxlength="25"
            value={value}
            placeholder="password"
            required />
    </div>

class Login extends React.Component {
    state = {

    }

    editEmail = e => {
        const email = e.target.value;
        this.setState({
            email,
        });
    }

    editPassword = e => {
        const password = e.target.value;
        this.setState({
            password,
        });
    }

    render() {
        const {
            email,
            password,
        } = this.state;
        return (
            <div className='card'>
                <form>

                    <ImgUpload src={logo} className="loginimg" />
                    <Email onChange={this.editEmail} value={email} />
                    <Password onChange={this.editPassword} value={password} />
                    <button type="button" className="login">LOGIN</button>

                </form>

            </div>
        )
    }

}



ReactDOM.render(
    <>
        <Login />
    </>
    ,
    document.getElementById('root')
)

export default Login;
