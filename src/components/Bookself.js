import React from 'react'
import img from '../image/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Bookself = ({selectedBooks,removeBook}) => {

    const background = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw'
      };

      const handleDeleteBook=(book)=>{
        removeBook(book);
      }
  return (
  
    <body style={background}>
    <div className='container'>
    <h1 className='heading'>Selected Books</h1>
    <Link to='/'><div className='back'><FontAwesomeIcon icon={faArrowLeft}/>back to book store</div></Link>
    <div className='product-container'>
      {selectedBooks.map((book, index) => (
        <div key={index} className='item-container'>
          {book.cover_i && <img id= 'size'  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="not found" />}
          <div className='book-title'>
          <button className='btn' onClick={()=>handleDeleteBook(book)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  
  </div>
  </body>
  )
}

export default Bookself