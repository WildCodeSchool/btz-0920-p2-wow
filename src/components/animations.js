export const enterBottom = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    y: '-300',
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export const enterLeft = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    x: '100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};
