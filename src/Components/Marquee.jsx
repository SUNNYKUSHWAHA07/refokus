import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ data, direction }) => {
  return (
    <div className="flex w-full overflow-hidden  py-10">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="h-10 w-fit py-5  flex items-center text-white gap-10"
      >
        {data.map((elem, index) => (
          <h1 key={index} className="font-light whitespace-nowrap text-xl">
            {elem}
          </h1>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="h-10 w-fit py-5  flex items-center text-white gap-10"
      >
        {data.map((elem, index) => (
          <h1 key={index} className="font-light whitespace-nowrap text-xl">
            {elem}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
