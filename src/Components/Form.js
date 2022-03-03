import React from 'react'
import './CSS/FormCSS.css'
import ReactDOM from 'react-dom'
import Likert from "react-likert-scale";


const ImgUpload = ({
    onChange,
    src
}) =>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
            <img for="photo-upload" src={src} alt="profile" />
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

const Scale = ({
    onChange,
    value
}) =>
    <div className="field">
        <form action="">
            <label htmlFor="scale">Programming Experience in Java:</label>
            <ul class='likert'>
                <li>
                    <input type="radio" name="likert" value="none" defaultChecked="true"/>
                    <label class ="statement">None</label>
                </li>
                <li>
                    <input type="radio" name="likert" value="beginner" />
                    <label class ="statement">Beginner</label>
                </li>
                <li>
                    <input type="radio" name="likert" value="intermediate" />
                    <label class ="statement">Intermediate</label>
                </li>
                <li>
                    <input type="radio" name="likert" value="advanced" />
                    <label class ="statement">Advanced</label>
                </li>
            </ul>
        </form>
    </div>

const Profile = ({
    onSubmit,
    src,
    name,
    email,
    scale,
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

            <div className="scale">{scale}</div>
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
        email: '',
        password: '',
        scale:'',
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

    editScale = e => {
        const scale = e.target.value;
        this.setState({
            scale,
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
            email,
            password,
            scale,
            active } = this.state;
        return (
            <div>

                {(active === 'edit') ? (
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                        <FullName onChange={this.editName} value={name} />
                        <Email onChange={this.editEmail} value={email} />
                        <Password onChange={this.editPassword} value={password} />
                        <Scale onChange={this.editScale} value={scale}/>
                    </Edit>
                ) : (
                    <Profile
                        onSubmit={this.handleSubmit}
                        src={imagePreviewUrl}
                        name={name}
                        email={email}
                        password={password} 
                        scale={scale} />)}

            </div>
        )
    }

}

ReactDOM.render(
    <>
        <CardProfile />
    </>
    ,
    document.getElementById('root')
)

export default CardProfile;
