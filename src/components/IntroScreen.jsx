import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function IntroScreen({ onFinish }) {
  const [isSwiped, setIsSwiped] = useState(false);

  const handleSwipe = (_, info) => {
    if (info.offset.y < -100) {
      setIsSwiped(true);
      setTimeout(onFinish, 500); // allow animation to finish
    }
  };

  return (
    <AnimatePresence>
      {!isSwiped && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white z-[9999] flex items-center justify-center px-6"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleSwipe}
        >
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-4 text-white drop-shadow-xl">
              Welcome to <span className="text-[#00f6ff]">KonnectHRC</span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
              Your trusted partner for recruitment in <span className="text-white font-semibold">Dubai, Abu Dhabi</span> & <span className="text-white font-semibold">GCC</span>.
            </p>
            <p className="mt-8 text-sm md:text-base text-gray-400 animate-bounce">⬆️ Swipe up to unlock</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
