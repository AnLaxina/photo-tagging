import { motion } from "motion/react";
import type { RefObject } from "react";

interface PopupProps {
  parentRef: RefObject<HTMLDialogElement>;
}

export default function Popup({ parentRef }: PopupProps) {
  return (
    <motion.dialog
      className="open:backdrop:bg-[rgba(0,0,0,0.7)]"
      ref={parentRef}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>Cool Dialog!</p>
    </motion.dialog>
  );
}
