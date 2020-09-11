import * as tf from '@tensorflow/tfjs-core';

console.log(`TF: ${tf.version_core}`);

const a = tf.tensor1d([1, 2, 3]);
const b = a.square();
b.print();

