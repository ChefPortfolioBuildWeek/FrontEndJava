import React, {useState} from 'react';

function ImageUpload() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'upload-cloudinary');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dyz26gaw1/image/upload', 
      {
        method: "POST",
        body: data
      }
    )
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);

  }

  return (
    <div className = 'App'>
        <h1>Upload Image</h1>
        <br />
        <input type ='file'
          name='file'
          placehold='Upload an Image'
          onChange={uploadImage}
        />
        <br />
        {loading ? (
          <h3>loading</h3>
        ) : (
          <img src={ image } style={{wid: '150px'}} />
        )}
    </div>
  );
}

export default ImageUpload;
