import React from 'react'
import './CSS/FormCSS.css'
import ReactDOM from 'react-dom'


const ImgUpload = ({
    onChange,
    src
}) =>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
            <img for="photo-upload" src={src} alt ="profile" />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
    </label>


const FullName = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="name">
            Full Name:
        </label>
        <input
            id="name"
            type="text"
            onChange={onChange}
            maxlength="25"
            value={value}
            placeholder="Alexa"
            required />
    </div>

const Email = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="email">
            Email:
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

const Prom = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="prom">
            Programming Language:
        </label>
        <select
            id="prom"
            type="text"
            onChange={onChange}
            maxLength="35"
            value={value}
            required
            defaultValue = "Select preferred programming language">
            <option defaultValue>Select preferred programming language</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="C#">C#</option>
        </select>

    </div>


const Profile = ({
    onSubmit,
    src,
    name,
    email,
    prom,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            <h1>Successfully Registered</h1>
            <label className="custom-file-upload fas">
                <div className="img-wrap" >
                    <img for="photo-upload" src={src} alt="Upload" />
                </div>
            </label>
            <div className="name">{name}</div>
            <div className="email">{email}</div>
            
            <div className="prom">{prom}</div>
            <button type="submit" className="edit">Edit Details </button>
        </form>
    </div>


const Edit = ({
    onSubmit,
    children,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            <h1>Developer Registration</h1>
            {children}
            <button type="submit" className="save">Save </button>
        </form>
    </div>

class CardProfile extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
        name: '',
        prom: '',
        email: '',
        password: '',
        active: 'edit'
    }

    photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }
    editName = e => {
        const name = e.target.value;
        this.setState({
            name,
        });
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

    editProm = e => {
        const prom = e.target.value;
        this.setState({
            prom,
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
        const { imagePreviewUrl,
            name,
            prom,
            email,
            password,
            active } = this.state;
        return (
            <div>
                 
                {(active === 'edit') ? (
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                        <FullName onChange={this.editName} value={name} />
                        <Email onChange={this.editEmail} value={email} />
                        <Password onChange={this.editPassword} value={password}/>
                        <Prom onChange={this.editProm} value={prom} />
                    </Edit>
                ) : (
                    <Profile
                        onSubmit={this.handleSubmit}
                        src={imagePreviewUrl}
                        name={name}
                        email={email}
                        password={password}
                        prom={prom} />)}

            </div>
        )
    }
    
}

ReactDOM.render(
    <>
    <CardProfile/>
    </>
        ,
    document.getElementById('root')
)

export default CardProfile;
