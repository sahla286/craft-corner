import React from 'react'
import './ProductCategory.scss'
import { useNavigate } from 'react-router-dom';

const categories = [
    {
      id: 1,
      title: "Bamboos",
      image: "https://m.media-amazon.com/images/I/71X8NanqU2L._SY879_.jpg",
    },
    {
      id: 2,
      title: "Marble",
      image: "https://i0.wp.com/tilakmandirwala.com/wp-content/uploads/2020/11/Mask-Group-4.jpg?fit=600%2C700&ssl=1",
    },
    {
      id: 3,
      title: "Paper Decors",
      image: "https://media.licdn.com/dms/image/D5612AQGknZ9tSu4e3Q/article-cover_image-shrink_600_2000/0/1693708405867?e=2147483647&v=beta&t=WRFem5QAhK8AnXPcA0T00qCXr51k92Wnoe6M_0KBxFA",
    },
  ];
  const Category = ({ title, image }) => {
    const navigate = useNavigate();
    return (
      <div className="category">
        <h3>{title}</h3>
        <img src={image} alt="img" />
        <button className="--btn" onClick={() => navigate("/shop")}>
          {"Shop Now >>>"}
        </button>
      </div>
    );
  }; 
  const ProductCategory = () => {
    return (
      <div className="categories">
        {categories.map((cat) => {
          return (
            <div key={cat.id} className='--flex-center'>
              <Category title={cat.title} image={cat.image} />
            </div>
          );
        })}
      </div>
    );
  };

export default ProductCategory
