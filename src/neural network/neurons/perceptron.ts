/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Perceptron
 * @license      Digitsensitive
 */

import { IPerceptron } from "../interfaces/perceptron.interface";
import { randomClamped } from "../../helpers";

/**
 * The most simple artificial neuron (step function)
 * They were developed in the 1950s and 1960s by the Frank Rosenblatt
 * He was inspired by earlier work by Warren McCulloch and Walter Pitts in 1943.
 * The representation of the threshold values as a bias term was introduced by Bernard Widrow in 1960 (ADALINE).
 *
 * Perceptron are useful in the last layer of a network intended to perform binary classification of the inputs.
 * It can be approximated from other sigmoidal functions by assigning large values to the weights.
 */
export class Perceptron {
  private bias: number;
  private inputs: number[];
  private learningRate: number;
  private threshold: number;
  private weights: number[];

  constructor(params: IPerceptron) {
    this.bias = params.bias || 2;
    this.inputs = params.inputs || [];
    this.learningRate = params.learningRate || 0.01;
    this.threshold = params.threshold || 1;

    // if the weights are not defined we will randomly assign some values
    if (typeof params.weights === "undefined") {
      this.weights = [];
      this.generateRandomWeights(this.inputs.length);
    } else {
      this.weights = params.weights;
    }
  }

  /**
   * Get the output of the Perceptron.
   *
   * If threshold is used
   * = 0 if ∑w*x ≤ threshold
   * = 1 if ∑w*x > threshold
   *
   * If bias is used (bias = -threshold)
   * = 0 if w * x + b ≤ 0
   * = 1 if w * x + b > 0
   *
   * As higher the bias is, the higher is the probability that the neuron fires
   */
  public getOutput(): number {
    let weightedSum = this.calculateWeightedSum(this.inputs);
    return this.activation(weightedSum);
  }

  /**
   * Train this perceptron, having input data and the expected output
   * @param input
   * @param output
   */
  public train(input: number[], trueOutput: number): void {
    // calculate the actual output
    this.inputs = input;
    let calculatedOutput = this.getOutput();
    let error = trueOutput - calculatedOutput;

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = this.weights[i] + this.learningRate * error;
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
   * With the input data calculate the weighted sum and return it
   * @param inputData
   */
  private calculateWeightedSum(inputData: number[]): number {
    let weightedSum = 0;

    // loop through all the inputs
    for (let i = 0; i < inputData.length; i++) {
      weightedSum += this.inputs[i] * this.weights[i];
    }

    return weightedSum;
  }

  /**
   * With the weighted sum, check if the perceptron got activated
   * @param sum
   */
  private activation(weightedSum: number): number {
    // if bias is set
    if (this.bias) {
      if (weightedSum + this.bias <= 0) {
        return 0;
      } else {
        return 1;
      }
    }

    // if threshold is set
    if (this.threshold) {
      if (weightedSum <= this.threshold) {
        return 0;
      } else {
        return 1;
      }
    }
  }

  public setInput(input: number[]): void {
    this.inputs = input;
  }

  public getWeights(): number[] {
    return this.weights;
  }

  public getInputs(): number[] {
    return this.inputs;
  }
}
