import { IoMdFitness } from "react-icons/io";
import { motion } from "framer-motion";

const ClassCard = ({ item }) => {
  const { class_name, about_class, time, date } = item;

  const animationVariants = {
    initial: { scale: 1, height: "auto" },
    hover: { scale: 1.1 },
  };

  return (
    <div>
      <motion.div
        whileHover="hover"
        initial="initial"
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div className="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-t-blue-500 dark:shadow-slate-700/[.7]">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white flex">
              {class_name} <IoMdFitness />
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {about_class}
            </p>
            <div className="flex text-yellow-50">
              <p>{time}</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClassCard;
