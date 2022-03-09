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
            type="text"
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

const Edit = ({
    onSubmit,
    children,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            {children}
            <button type="submit" className="login">LOGIN </button>
        </form>
    </div>

const Profile = ({
    onSubmit,
    email,
    password,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            <h1>Successfully Logged in</h1>
            <div className="email">{email}</div>
            <div className="password">{password}</div>
            
        </form>
    </div>


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        active: 'edit'
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

    handleSubmit = e => {
        e.preventDefault();
        let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
        this.setState({
            active: activeP,
        })
    }

render() {
    const {
        email,
        password,
        active } = this.state;
    return (
        <div>

            {(active === 'edit') ? (
                <Edit onSubmit={this.handleSubmit}>
                    <ImgUpload src={logo} className="loginimg" />
                    <Email onChange={this.editEmail} value={email} />
                    <Password onChange={this.editPassword} value={password} />
                </Edit>
            ) : (
                <Profile
                    onSubmit={this.handleSubmit}
                    email={email}
                    password={password}
                    />)}
                    
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
