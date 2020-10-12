import React from 'react';
import './ErrorBoundary.scss';

export function ErrorBoundary() {
  return (
    <>
      <section className='error-section'>
        <h1>Something went wrong.</h1> 
        <img alt='Old Man Shruggin' src='https://i.stack.imgur.com/eQ20E.jpg'></img>
      </section>
    </>
  );
}

// export class ErrorBoundary extends Component {

//   render() {
//     return (
//       <>
//         <section className='error-section'>
//           <h1>Something went wrong.</h1> 
//           <img alt='Old Man Shruggin' src='https://i.stack.imgur.com/eQ20E.jpg'></img>
//         </section>
//       </>
//     );
//   }
// }