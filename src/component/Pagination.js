// function Pagination({postPerPage,totalPosts}) {

//     const pageNumber = []

//     for (let i =1; i <= Math.ceil(totalPosts / postPerPage); i++){
//         pageNumber.push(i)
//     }
//   return (
//     <nav>
//     <ul className='pagination-list'>
//         {pageNumber.map(number=>(
//              <li key={number} className='paginationitem'>
//              <a href="!#" className='pagelink'>
//                 {number}
//              </a>

//              </li>
//         )

//         )}
//     </ul>
      
//     </nav>
//   )
// }

// export default Pagination


import React from 'react';
import classes from "./pagination.module.css" // Import the CSS file

function Pagination({ postPerPage, totalPosts,paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className={classes.paginationlist}>
        {pageNumber.map((number) => (
          <li key={number} className={classes.paginationitem}>
            <a onClick={()=> paginate(number)} href="!#" className={classes.pagelink}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
