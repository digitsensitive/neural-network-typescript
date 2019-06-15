/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Linear Neuron
 * @license      Digitsensitive
 */

import { ILinearNeuron } from "../interfaces/linear-neuron.interface";

export class LinearNeuron {
  private bias: number;
  private inputs: number[];
  private weights: number[];

  constructor(params: ILinearNeuron) {
    this.bias = params.bias;
    this.inputs = params.inputs;
    this.weights = params.weights;
  }

  /**
   * Get the output of the linear neuron.
   * = bias * ∑ w*x
   */
  public getOutput(): number {
    let sum = 0;

    // loop through all the inputs
    for (let i = 0; i < this.inputs.length; i++) {
      sum += this.inputs[i] * this.weights[i];
    }

    // add the bias
    sum += this.bias;

    return sum;
  }
}
