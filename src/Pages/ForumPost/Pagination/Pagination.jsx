import  { useEffect, useState } from 'react';

import './Pagination.css'


import ForumPost from '../ForumPost';
import { useLoaderData } from 'react-router-dom';

const Pagination = () => {
    const [products, setProducts] = useState([]);
   
    const [itmesPerPage ,setitmesPerPage]=useState(6)
    const[currentPage ,setCurrentPage]=useState(0)
    const{count}=useLoaderData()
    console.log(count)
    
    const numberOfPgae=Math.ceil(count /itmesPerPage)
    
    const pages=[];
    for(let i=0 ; i< numberOfPgae ; i++){
        pages.push(i)
    }
    console.log(pages)

    useEffect(() => {
        fetch(`http://localhost:5000/posts?page=${currentPage} &size=${itmesPerPage}`)
        
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage ,itmesPerPage]);

  
    const handleParPageChange=e=>{
        const value=parseInt(e.target.value)
        setitmesPerPage(value)
        setCurrentPage(0)
    }
    const handlePrev=()=>{
        if(currentPage >0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNext=()=>{
         if(currentPage <pages.length-1){
            setCurrentPage(currentPage+1)
         }
    }

    return (
        <div className='shop-container'>
            <div className="products-container grid grid-cols-2">
                {
                    products.map(product => <ForumPost
                        key={product._id}
                        product={product}
                      
                    ></ForumPost>)
                }
            </div>
            <div className="cart-container">
               
            </div>
            <div className='pagination'>
                <p>currentPage{currentPage}</p>
                <button className='btn btn-circle bg-black text-white' onClick={handlePrev}>Prev</button>
                {
                    pages.map(page =>
                    <button className={currentPage===page ?  'selected' :undefined} onClick={() => setCurrentPage(page)}  key={page}>{page}</button>)
                   
                }
                <button className='btn btn-circle bg-black text-white' onClick={handleNext}> Next</button>
                 <select name={itmesPerPage} onChange={handleParPageChange} id="">
                    <option value="6">6</option>
                    
                 </select>
            </div>
        </div>
    );
};

export default Pagination ;