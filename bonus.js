var createCounter = function (init) {
  let current = init;
  let obj = {
    increment: () => {
      console.log(current + 1);
      return ++current;
    },

    decrement: () => {
      console.log(current - 1);

      return --current;
    },
    reset: () => {
      current = init;
      console.log(current);

      return current;
    },
  };
  return obj;
};

const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
