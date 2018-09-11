import * as tf from '@tensorflow/tfjs';

export default class TFSetupClass{
  static makeTensor = (data) => {
    tf.tensor(data).print();
  }
}