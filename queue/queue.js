// QUEUE
// first in first out

export function createQueue(params) {
  const queue = [];

  return {
    enqueue(item) {
      return queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    getLength() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}
