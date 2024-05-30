import { useState } from 'react';
import { useEffect } from 'react';
import './pics.css';

const Images = () => {
  const [pics, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);

  const deleteImage = (id) => {
    setImages(pics.filter(image => image.id !== id));
  };

  return (
    <div>
      <h1>Images</h1>
      <ul className="pics-list">
        {pics.map(image => (
          <li key={image.id} className="pics-item">
            <img src={image.thumbnailUrl} alt={image.title} />
            <button onClick={() => deleteImage(image.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
