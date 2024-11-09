import React from 'react';
import ReactDOM from 'react-dom/client';

import './Index.css'; 
import { books } from './books.js';
import Book from './Book';



const BookList = () => {
    return (
        <>
        <h1>Amazon best seller</h1>
        <section className='booklist'>

            {books.map((books,index)=>{
                return <Book {...books} key={books.id} number={index}/>;
                })
            }
            
        </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
