export const springOptions = {
  idle: {
    delay: 0,
    reset: false,
    fromPosition: [0, 0, 0],
    toPosition: [0, 0, 0],
    fromScale: 1,
    toScale: 1,
    fromRotation: [0, 0, 0],
    toRotation: [0, 0, 0],
    springConfig: { mass: 1, tension: 170, friction: 26 },
  },
  concentrating: {
    delay: 0,
    reset: false,
    fromPosition: [0, 0, 0],
    toPosition: [0, 0, 0],
    fromScale: 0.8,
    toScale: [1, 0.8],
    fromRotation: [0, 0, 0],
    toRotation: [0, 0, 0],
    springConfig: { tension: 200, friction: 14, duration: 700 },
  },
  responding: {
    delay: 0,
    reset: false,
    fromPosition: [0, 0, 0],
    toPosition: [0, 0, 0],
    fromScale: 1,
    toScale: 1,
    fromRotation: [0, 0, 0],
    toRotation: [0, 0, 0],
    springConfig: { mass: 0.5, tension: 80, friction: 20 },
  },
  angry: {
    delay: 75,
    reset: true,
    fromPosition: [1.2, 0, 0],
    toPosition: [1.2, 0, 0],
    fromScale: 0.7,
    toScale: 1.2,
    fromRotation: [0, 0, 0],
    toRotation: [0, 0, 0],
    springConfig: { mass: 1.3, tension: 800, friction: 13 },
  },
  sad: {
    delay: 100,
    reset: false,
    fromPosition: [1.2, 0, 0],
    toPosition: [1.2, 0, 0],
    fromScale: 0,
    toScale: [1, 0],
    fromRotation: [0, 0, 0],
    toRotation: [0, 0, 0],
    springConfig: { mass: 0.5, tension: 80, friction: 20 },
  },
  narrative: {
    delay: 100,
    reset: true,
    fromPosition: [1.2, 0.6, 0],
    toPosition: [
      [1.2, 0, 0],
      [1.2, 0.6, 0],
    ],
    fromScale: 1,
    toScale: 1,
    fromRotation: [0, 0, 0],
    toRotation: [0, 0, 0],
    springConfig: { mass: 2, tension: 900, friction: 60 },
  },
  happy: {
    delay: 100,
    reset: false,
    fromPosition: [1.2, 0.5, 0],
    toPosition: [
      [1.2, 0, 0],
      [1.2, 0.5, 0],
    ],
    fromScale: 1,
    toScale: 1,
    fromRotation: [0, 0, 0],
    toRotation: [0, 0, 0],
    springConfig: { mass: 2, tension: 900, friction: 20 },
  },
};

export const animationRotations = [
  [0.1, 0.1, 0.3],
  [0.2, 0.2, 0.3],
  [0.3, 0.3, 0.3],
  [0.4, 0.4, 0.3],
  [0.5, 0.5, 0.3],
  [0.6, 0.6, 0.3],
];
