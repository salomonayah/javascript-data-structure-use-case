// QUEUE TESTING

import { createQueue } from "./queue/queue.js";

const customerQueue = createQueue();

customerQueue.enqueue("salomon");

console.log(customerQueue.getLength());
