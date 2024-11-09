import React from 'react';
import ReactDOM from 'react-dom/client';

import './Index.css'; 
import { books } from './books.js';
import Book from './Book';




//first method (its a demo of linking datas to database)

// const BookList = () => {
//     return (
//         <section className='booklist'>
//             <Book autor={firstBook.autor} title={firstBook.title} image={firstBook.image} />
//             <Book autor={secoundBook.autor} title={secoundBook.title} image={secoundBook.image} />
//             <Book autor={thiredBook.autor} title={thiredBook.title} image={thiredBook.image}/>
//             <Book autor={fourthBook.autor} title={fourthBook.title} image={fourthBook.image}/>
//             <Book autor={fifthBook.autor} title={fifthBook.title} image={fifthBook.image}/>
//             <Book autor={SixthBook.autor} title={SixthBook.title} image={SixthBook.image}/> 
//         </section>
//     );
// }



// secound method reduce the code repation *-> it is more redable
// const BookList = () => {
//     return (
//         <section className='booklist'>
//             {books.map((books)=>{
//                 const {image,title,autor,id} = books;
//                 return <Book image={image} title={title} autor={autor} key={id}/>;
//             })}
//         </section>
//     );
// }



//3rd method 

const BookList = () => {
    return (
        <>
        <h1>Amazon best seller</h1>
        <section className='booklist'>
            {books.map((books,index)=>{
                return <Book {...books} key={books.id} number={index}/>;
            })}
        </section>
        </>
    );
};



//form submission
// const EvendtExaple = ()=>{
//     const handleButton = ()=>{
//         alert('hi hello');
//     };
//     return(
//         <section>
//         <form>
//             <h2>typical Form</h2>
//             <input type='text' name='exaple' style={{margin:'1rem 0'}}/>
//         </form>
//         <button onClick={handleButton}>clcik me</button>
//         </section>
//     );
// };

//--------------------------------------------------------------------------------------------------------

//first case

// const Book = (props) => {

//     return (
//         <article className='book'>
//             <img src={props.image} alt={props.title} />
//             <h2>{props.title}</h2>
//             <h4>{props.autor.toUpperCase()}</h4>
//         </article>
//     );
// }


// secound case




//3rd method 
// const Book = ({image,title,autor}) => {
//     return (
        
//         <article className='book'>
//             <img src={image} alt={title} />
//             <h2>{title}</h2>
//             <h4>{autor.toUpperCase()}</h4>
//             <p>For too long, Opaline, Martha and Henry have been the side characters in their own lives.
//                 But when a vanishing bookshop casts its spell,
//                 these three unsuspecting strangers will discover that their
//                 own stories are every bit as extraordinary as the ones found
//             </p>
//             <button>click me!</button>
//         </article>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
