/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Sigmoid Neuron
 * @license      Digitsensitive
 */

import { ISigmoidNeuron } from "../interfaces/sigmoid-neuron.interface";
import { randomClamped } from "../../helpers";

export class SigmoidNeuron {
  private bias: number;
  private inputs: number[];
  private weights: number[];

  constructor(params: ISigmoidNeuron) {
    this.bias = params.bias || 2;
    this.inputs = params.inputs || [];

    // if the weights are not defined we will randomly assign some values
    if (typeof params.weights === "undefined") {
      this.weights = [];
      this.generateRandomWeights(this.inputs.length);
    } else {
      this.weights = params.weights;
    }
  }

  /**
   * With the input data generate random weights
   * @param inputs
   */
  private generateRandomWeights(inputs: number): void {
    for (let i = 0; i < inputs; i++) {
      this.weights.push(randomClamped());
    }
  }

  /**
   * Get the output of the sigmoid neuron.
   * = σ(w*x+b)
   * with σ being the sigmoid function (sometimes called the logistic function)
   *
   * σ(z) ≡ 1 / 1+e^-z
   * with e^-z = exp(−∑w*x−b)
   *
   * if e^-z is large and positive, σ(z) will be 1 (similar to perceptron)
   */
  public getOutput(): number {
    let sum = 0;

    // loop through all the inputs
    for (let i = 0; i < this.inputs.length; i++) {
      sum += this.inputs[i] * this.weights[i];
    }

    // subtract the bias
    sum += this.bias;

    // calculate the exp of negative sum
    let expZ = Math.exp(-sum);

    return 1 / (1 + expZ);
  }

  public setInput(i: number[]): void {
    this.inputs = i;
  }

  /**
   * Get all the neuron weights
   */
  public getWeights(): number[] {
    return this.weights;
  }
}
