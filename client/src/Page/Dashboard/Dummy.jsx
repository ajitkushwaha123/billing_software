import React from "react";
import { motion } from "motion/react";
import Btn from "../../reuseableComponent/Buttons/Btn";

const Dummy = () => {
  return (
    <div className="m-5 p-5 h-screen bg-white rounded-md shadow-md">
      <motion.div
        className="w-[100px] h-[100px] rounded-md bg-red-500"
        transition={{ duration: 1 }}
        animate={{ scale: 2, transition: { duration: 2 } }}
      />

      <motion.button
        className="w-[100px] h-[100px] rounded-md bg-red-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        layoutId="underline"
        onHoverStart={() => console.log("hover started!")}
      />

    </div>
  );
};

export default Dummy;
