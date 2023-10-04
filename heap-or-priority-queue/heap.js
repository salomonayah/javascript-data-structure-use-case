import { createQueue } from "../queue/queue";

export function name() {
  const highPriorityQueue = createQueue();
  const lowPriorityQueue = createQueue();

  return {
    enqueue: (item, isHighPriority = false) => {
      isHighPriority ? highPriorityQueue.enqueue() : lowPriorityQueue.enqueue();
    },
    dequeue: () => {
      if (!highPriorityQueue.isEmpty()) {
        highPriorityQueue.dequeue();
      }
      lowPriorityQueue.dequeue();
    },
    peek: () => {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    length: () => {
      return highPriorityQueue.length() + lowPriorityQueue.length();
    },
    isEmpty: () => {
      return highPriorityQueue.isEmpty() + lowPriorityQueue.isEmpty();
    },
  };
}
