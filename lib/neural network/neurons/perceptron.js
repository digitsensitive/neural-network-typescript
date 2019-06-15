"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Perceptron
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
/**
 * The most simple artificial neuron (step function)
 * They were developed in the 1950s and 1960s by the Frank Rosenblatt
 * He was inspired by earlier work by Warren McCulloch and Walter Pitts in 1943.
 * The representation of the threshold values as a bias term was introduced by Bernard Widrow in 1960 (ADALINE).
 *
 * Perceptron are useful in the last layer of a network intended to perform binary classification of the inputs.
 * It can be approximated from other sigmoidal functions by assigning large values to the weights.
 */
class Perceptron {
    constructor(params) {
        this.bias = params.bias || 2;
        this.inputs = params.inputs || [];
        this.learningRate = params.learningRate || 0.01;
        this.threshold = params.threshold || 1;
        // if the weights are not defined we will randomly assign some values
        if (typeof params.weights === "undefined") {
            this.weights = [];
            this.generateRandomWeights(this.inputs.length);
        }
        else {
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
    getOutput() {
        let weightedSum = this.calculateWeightedSum(this.inputs);
        return this.activation(weightedSum);
    }
    /**
     * Train this perceptron, having input data and the expected output
     * @param input
     * @param output
     */
    train(input, trueOutput) {
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
    generateRandomWeights(inputs) {
        for (let i = 0; i < inputs; i++) {
            this.weights.push(helpers_1.randomClamped());
        }
    }
    /**
     * With the input data calculate the weighted sum and return it
     * @param inputData
     */
    calculateWeightedSum(inputData) {
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
    activation(weightedSum) {
        // if bias is set
        if (this.bias) {
            if (weightedSum + this.bias <= 0) {
                return 0;
            }
            else {
                return 1;
            }
        }
        // if threshold is set
        if (this.threshold) {
            if (weightedSum <= this.threshold) {
                return 0;
            }
            else {
                return 1;
            }
        }
    }
    setInput(input) {
        this.inputs = input;
    }
    getWeights() {
        return this.weights;
    }
    getInputs() {
        return this.inputs;
    }
}
exports.Perceptron = Perceptron;
