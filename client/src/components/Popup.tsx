import { motion } from "motion/react";
import type { RefObject } from "react";

interface PopupProps {
  parentRef: RefObject<HTMLDialogElement>;
}

export default function Popup({ parentRef }: PopupProps) {
  return (
    <motion.dialog
      className="open:flex flex-col gap-2 open:backdrop:bg-[rgba(0,0,0,0.7)] open:self-center open:justify-self-center p-8 rounded-md border-4 border-solid"
      ref={parentRef}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-2xl font-semibold text-center">Instructions</h1>
      <ol className="flex flex-col gap-4">
        <li>
          <p>1. Find the following cookies:</p>
          <p>Cookie placeholder (should be a prop that displays images)</p>
        </li>
        <li>
          <p>
            2. Click/tap on a cookie once found, and select the correct one via
            popup.
          </p>
        </li>
        <li>
          <p>3. Once done, input your name to enter the leaderboards!</p>
        </li>
      </ol>
    </motion.dialog>
  );
}
