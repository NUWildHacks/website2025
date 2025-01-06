import { motion } from "motion/react";

interface INavigationMotionDiv {
  children: React.ReactNode;
}

export const NavigationMotionDiv: React.FC<INavigationMotionDiv> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default NavigationMotionDiv;
