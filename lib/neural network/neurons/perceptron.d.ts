/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Perceptron
 * @license      Digitsensitive
 */
import { IPerceptron } from "../interfaces/perceptron.interface";
/**
 * The most simple artificial neuron (step function)
 * They were developed in the 1950s and 1960s by the Frank Rosenblatt
 * He was inspired by earlier work by Warren McCulloch and Walter Pitts in 1943.
 * The representation of the threshold values as a bias term was introduced by Bernard Widrow in 1960 (ADALINE).
 *
 * Perceptron are useful in the last layer of a network intended to perform binary classification of the inputs.
 * It can be approximated from other sigmoidal functions by assigning large values to the weights.
 */
export declare class Perceptron {
    private bias;
    private inputs;
    private learningRate;
    private threshold;
    private weights;
    constructor(params: IPerceptron);
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
    getOutput(): number;
    /**
     * Train this perceptron, having input data and the expected output
     * @param input
     * @param output
     */
    train(input: number[], trueOutput: number): void;
    /**
     * With the input data generate random weights
     * @param inputs
     */
    private generateRandomWeights;
    /**
     * With the input data calculate the weighted sum and return it
     * @param inputData
     */
    private calculateWeightedSum;
    /**
     * With the weighted sum, check if the perceptron got activated
     * @param sum
     */
    private activation;
    setInput(input: number[]): void;
    getWeights(): number[];
    getInputs(): number[];
}
