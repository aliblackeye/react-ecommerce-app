import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
function New({ inputs, title }) {

  const [file, setFile] = useState("")

  console.log(file.name);

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">Fotoğraf: <DriveFolderUploadIcon className="icon" /></label>
                <input type="file" id="file" className="file" onChange={e => {
                  if (e.target.files[0].type.split("/")[0] === "image") {
                    setFile(e.target.files[0])
                  }
                }} />
              </div>
              {inputs.map(input => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button type="submit">Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New