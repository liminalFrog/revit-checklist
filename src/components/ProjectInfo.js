import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectInfo = () => {
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('project-title').innerText = projectName;
      document.getElementById('projectNameInput').value = '';
      document.getElementById('projectNameInput').blur();
    }
  };

  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        document.getElementById('imageUpload').blur();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h1 id='project-title' className="text-center mt-2 fw-bold">Revit Project</h1>
      <div className='btn-group mx-auto d-flex py-3'>
        <button className="btn btn-outline-primary" onClick={() => window.open(window.location.href, '_blank')}>
          Duplicate Tab
        </button>
        <button className="btn btn-outline-danger border-start-0" onClick={() => window.location.reload()}>
          Reset Page
        </button>
      </div>
      <form>
        <div className="form-group">
          <label className='form-label' htmlFor="projectNameInput">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="projectNameInput"
            placeholder="Enter project name"
            value={projectName}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        {image && <img src={image} alt="Uploaded" className="img-fluid my-3" />}
        <div className="form-group">
          <label className='form-label' htmlFor="imageUpload">Upload floor plan</label>
          <input
            type="file"
            className="form-control"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectInfo;