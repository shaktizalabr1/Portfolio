import { motion } from "framer-motion";

const GitHubStats = ({ stats }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {stats.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -6 }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-black text-cyan-400">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default GitHubStats;