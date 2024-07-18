import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const [pos, setPos] = useState(0);
  const Products = [
    {
      title: "Aeqitel",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, soluta exercitationem consectetur esse enim, dolor est laboriosam eum hic ab velit rerum excepturi dolores deleniti, molestiae fuga ut pariatur fugit!",
      live: true,
      case: true,
    },

    {
      title: "TTR",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, soluta exercitationem consectetur esse enim, dolor est laboriosam eum hic ab velit rerum excepturi dolores deleniti, molestiae fuga ut pariatur fugit!",
      live: false,
      case: true,
    },

    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, soluta exercitationem consectetur esse enim, dolor est laboriosam eum hic ab velit rerum excepturi dolores deleniti, molestiae fuga ut pariatur fugit!",
      live: true,
      case: false,
    },

    {
      title: "yahooo",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, soluta exercitationem consectetur esse enim, dolor est laboriosam eum hic ab velit rerum excepturi dolores deleniti, molestiae fuga ut pariatur fugit!",
      live: false,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, soluta exercitationem consectetur esse enim, dolor est laboriosam eum hic ab velit rerum excepturi dolores deleniti, molestiae fuga ut pariatur fugit!",
      live: true,
      case: false,
    },
  ];

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="w-full pt-20 mt-10 relative">
      {Products.map((elem, index) => (
        <Product key={index} val={elem} count={index} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[30rem] h-[23rem] top-20  left-[44%] bg-transparent  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}

            className="h-full w-full"
          >
            <img className="h-full w-full object-cover object-center" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="h-full w-full bg-red-800"
          >
            <img className="h-full w-full object-cover object-center" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png" alt="" />

          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="h-full w-full bg-green-700"
          >

<img className="h-full w-full object-cover object-center" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp" alt="" />

          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="h-full w-full bg-purple-700"
          >

<img className="h-full w-full object-cover object-center" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg" alt="" />

          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="h-full w-full bg-blue-900"
          >
            <img className="h-full w-full object-cover object-center" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png" alt="" />
            
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
