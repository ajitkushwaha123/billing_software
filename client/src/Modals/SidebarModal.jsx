import React from "react";
import { motion } from "framer-motion";

const SidebarModal = ({ open, btn, component }) => {
  return (
    <div>
      <span>{btn}</span>

      {open && <div>{component}</div>}
    </div>
  );
};

export default SidebarModal;
