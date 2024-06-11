import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import img from '../image/background.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ({addBook}) => {
  const [input, setInput]=useState([]);
  const [name , setName]= useState("");
  
    const background = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw'
      };

   

      
      useEffect(()=>{
        const fetchBooks= async ()=>{
          try {
            const response =await axios.get('https://openlibrary.org/search.json?title=the+lord+of+the+rings');
            setInput(response.data.docs);
          }catch(error){
            console.error('error in fetching books :' ,error);
          }
        };
        fetchBooks();
      },[])
      const handleSearch=async(e)=>{
e.preventDefault();
if (name.trim() === "") {
  return;
}
try {
  const response = await axios.get(`https://openlibrary.org/search.json?title=${name}`);
  setInput(response.data.docs);
  console.log(response.data.docs)
} catch (error) {
  console.error('Error in fetching books:', error);
}
      }

      const handleAddBook=(book)=>{
        addBook(book);
        console.log(book);
        alert("book is added sucessfully");
      }

  return (

    <body style={background}>
    <div className='container'>
        <Link to='/myself'><span className='go'><FontAwesomeIcon icon={faArrowLeft}/>Go to Myself</span></Link>
        <div className='search-box'>
        <input
    type='text'
    value={name}
    onChange={(e)=>setName(e.target.value)}
     placeholder='Enter Book Name'/>
     <FontAwesomeIcon className='fasearch'  icon={faSearch} onClick={handleSearch} />
        </div>
   
        <div className='content-cntainer' >
         
                  <div className='product-container'>
               {input.slice(0, 10).map((book , index)=>(
                <div className='item-container' key={index}>
                  {book.cover_i && <img id= 'size' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="not found" /> }
                  <div className='book-title'>
                {/* title:  {book.title} */}
                <button className='btn' onClick={()=>handleAddBook(book)}>Add</button>
                  </div>
                </div>
               ) )}
                      </div>
                    
        </div>
    </div>
    </body>
  )
}

export default Home