/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Sigmoid Neuron
 * @license      Digitsensitive
 */
import { ISigmoidNeuron } from "../interfaces/sigmoid-neuron.interface";
export declare class SigmoidNeuron {
    private bias;
    private inputs;
    private weights;
    constructor(params: ISigmoidNeuron);
    /**
     * With the input data generate random weights
     * @param inputs
     */
    private generateRandomWeights;
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
    getOutput(): number;
    setInput(i: number[]): void;
    /**
     * Get all the neuron weights
     */
    getWeights(): number[];
}
