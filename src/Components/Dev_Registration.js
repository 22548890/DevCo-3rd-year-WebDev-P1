import React from 'react'
import './CSS/DevRegCSS.css'
import ReactDOM from 'react-dom'



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

const ScaleJava = ({
    onChange,
    value
}) =>
    <div className="field" onChange={onChange} value={value}>

        <label htmlFor="scale">Programming Experience in JavaScript:</label>
        <ul class='likert' >
            <li>
                <input type="radio" name="likertJava" value="Java - None" defaultChecked/>
                <label class="statement" >None</label>
            </li>
            <li>
                <input type="radio" name="likertJava" value="Java - Beginner" />
                <label class="statement">Beginner</label>
            </li>
            <li>
                <input type="radio" name="likertJava" value="Java - Intermediate" />
                <label class="statement">Intermediate</label>
            </li>
            <li>
                <input type="radio" name="likertJava" value="Java - Advanced" />
                <label class="statement">Advanced</label>
            </li>
        </ul>
    </div>

const ScalePython = ({
    onChange,
    value
}) => <div className="field" onChange={onChange} value={value} >
        <label htmlFor="scale">Programming Experience in Python:</label>
        <ul class='likert'>
            <li>
                <input type="radio" name="likertPython" value="Python - None" defaultChecked/>
                <label class="statement" >None</label>
            </li>
            <li>
                <input type="radio" name="likertPython" value="Python - Beginner" />
                <label class="statement">Beginner</label>
            </li>
            <li>
                <input type="radio" name="likertPython" value="Python - Intermediate" />
                <label class="statement">Intermediate</label>
            </li>
            <li>
                <input type="radio" name="likertPython" value="Python - Advanced" />
                <label class="statement">Advanced</label>
            </li>
        </ul>
    </div>

const ScaleC = ({
    onChange,
    value
}) =>
    <div className="field" onChange={onChange} value={value}>
        <label htmlFor="scale">Programming Experience in C/C++:</label>
        <ul class='likert' >
            <li>
                <input type="radio" name="likertC" value="C/C++ - None" defaultChecked/>
                <label class="statement" >None</label>
            </li>
            <li>
                <input type="radio" name="likertC" value="C/C++ - Beginner" />
                <label class="statement">Beginner</label>
            </li>
            <li>
                <input type="radio" name="likertC" value="C/C++ - Intermediate" />
                <label class="statement">Intermediate</label>
            </li>
            <li>
                <input type="radio" name="likertC" value="C/C++ - Advanced" />
                <label class="statement">Advanced</label>
            </li>
        </ul>
    </div>

const ScaleGo = ({
    onChange,
    value,
}) =>
    <div className="field" onChange={onChange} value={value} >
        <label htmlFor="scale">Programming Experience in Go:</label>
        <ul class='likert' >
            <li>
                <input type="radio" name="likertGo" value="Go - None" defaultChecked/>
                <label class="statement" >None</label>
            </li>
            <li>
                <input type="radio" name="likertGo" value="Go - Beginner" />
                <label class="statement">Beginner</label>
            </li>
            <li>
                <input type="radio" name="likertGo" value="Go - Intermediate" />
                <label class="statement">Intermediate</label>
            </li>
            <li>
                <input type="radio" name="likertGo" value="Go - Advanced" />
                <label class="statement">Advanced</label>
            </li>
        </ul>

    </div>


const Profile = ({
    onSubmit,
    src,
    name,
    email,
    scaleJava,
    scalePython,
    scaleC,
    scaleGo,
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
            <div className="scale">{scaleJava}</div>
            <div className="scale">{scalePython}</div>
            <div className="scale">{scaleC}</div>
            <div className="scale">{scaleGo}</div>
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


class DevReg extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
        name: '',
        email: '',
        password: '',
        scaleJava: 'Java - None',
        scalePython: 'Python - None',
        scaleC: 'C - None',
        scaleGo: 'Go - None',
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

    editScaleJava = e => {
        const scaleJava = e.target.value;
        this.setState({
            scaleJava,
        });
    }

    editScalePython = e => {
        const scalePython = e.target.value;
        this.setState({
            scalePython,
        });
    }

    editScaleC = e => {
        const scaleC = e.target.value;
        this.setState({
            scaleC,
        });
    }

    editScaleGo = e => {
        const scaleGo = e.target.value;
        this.setState({
            scaleGo,
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
            scaleJava,
            scalePython,
            scaleC,
            scaleGo,
            active } = this.state;
        return (
            <div>

                {(active === 'edit') ? (
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                        <FullName onChange={this.editName} value={name} />
                        <Email onChange={this.editEmail} value={email} />
                        <Password onChange={this.editPassword} value={password} />
                        <ScaleJava onChange={this.editScaleJava} value={scaleJava} />
                        <ScalePython onChange={this.editScalePython} value={scalePython} />
                        <ScaleC onChange={this.editScaleC} value={scaleC} />
                        <ScaleGo onChange={this.editScaleGo} value={scaleGo} />
                    </Edit>
                ) : (
                    <Profile
                        onSubmit={this.handleSubmit}
                        src={imagePreviewUrl}
                        name={name}
                        email={email}
                        password={password}
                        scaleJava={scaleJava} 
                        scalePython={scalePython}
                        scaleC={scaleC}
                        scaleGo={scaleGo}
                        />)}
                        
            </div>
        )
    }

}

ReactDOM.render(
    <>
        <DevReg />
    </>
    ,
    document.getElementById('root')
)

export default DevReg;
