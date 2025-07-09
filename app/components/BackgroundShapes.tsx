import { motion } from "framer-motion";

const BackgroundShapes = () => {
  const shapes = Array.from({ length: 20 }).map(() => ({
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 -z-10">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;