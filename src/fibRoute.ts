// // Endpoint for querying the fibonacci numbers

// import fibonacci from "./fib";

// export default (req, res) => {
//   const { num } = req.params;

//   const fibN = fibonacci(parseInt(num));
//   let result = `fibonacci(${num}) is ${fibN}`;

//   if (fibN < 0) {
//     result = `fibonacci(${num}) is undefined`;
//   }

//   res.send(result);
// };

// import { Request, Response } from 'express'; // Import types for Request and Response
// import fibonacci from './fib';

// export default (req: Request, res: Response) => {
//   const { num } = req.params;

//   const fibN: number = fibonacci(parseInt(num));
//   let result: string;

//   if (fibN >= 0) {
//     result = `fibonacci(${num}) is ${fibN}`;
//   } else {
//     result = `fibonacci(${num}) is undefined`;
//   }

//   res.send(result);
// };


import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num)); // Use `any` for now, but improve if possible
  let result: string;

  if (fibN >= 0) {
    result = `fibonacci(${num}) is ${fibN}`;
  } else {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

