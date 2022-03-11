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


const CompanyName = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="name">
            Unique Company Name:
        </label>
        <input
            id="name"
            type="text"
            onChange={onChange}
            maxlength="25"
            value={value}
            placeholder="Apple Ltd"
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

const GeneralIndustries = ({
    onChange,
    value
}) =>
    <div className="field" value ={value} onChange={onChange}>
        <label htmlFor="industry">
            General Industry:
        </label>
        <select>
            <option value={"not selected"} >Select an industry</option>
            <option value={"Finance and Banking"} >Finance and Banking</option>
            <option value={"Communication and Information Technology"}> Communication and Information Technology </option>
            <option value={"Transport and Logistics"} >Transport and Logistics</option>
            <option value={"Mining"} >Mining</option>
            <option value={"Healthcare"} >Healthcare</option>
            <option value={"Insurance"} >Insurance</option>
            <option value={"Automobile"} >Automobile</option>
            <option value={"Food Services"} >Healthcare</option>          
        </select>
    </div>

const Profile = ({
    onSubmit,
    src,
    name,
    industry,
    
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
            <div className="industry">{industry}</div>
            <button type="submit" className="edit">Edit Details </button>
        </form>
    </div>


const Edit = ({
    onSubmit,
    children,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            <h1>Company Registration</h1>
            {children}
            <button type="submit" className="save">Save </button>
        </form>
    </div>


class ComReg extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
        name: '',
        password: '',
        industry:'',
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

    editIndustry = e => {
        const industry = e.target.value;
        this.setState({
            industry,
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
        const { imagePreviewUrl,
            name,
            password,
            industry,
            active } = this.state;
        return (
            <div>

                {(active === 'edit') ? (
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                        <CompanyName onChange={this.editName} value={name} />
                        <Password onChange={this.editPassword} value={password} />
                        <GeneralIndustries onChange={this.editIndustry} value={industry} />
                    </Edit>
                ) : (
                    <Profile
                        onSubmit={this.handleSubmit}
                        src={imagePreviewUrl}
                        name={name}
                        password={password}
                        industry={industry}
                        />)}
                        
            </div>
        )
    }

}

// ReactDOM.render(
//     <>
//         <ComReg />
//     </>
//     ,
//     document.getElementById('root')
// )

export default ComReg;
