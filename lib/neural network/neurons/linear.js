"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Linear Neuron
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
class LinearNeuron {
    constructor(params) {
        this.bias = params.bias;
        this.inputs = params.inputs;
        this.weights = params.weights;
    }
    /**
     * Get the output of the linear neuron.
     * = bias * ∑ w*x
     */
    getOutput() {
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
exports.LinearNeuron = LinearNeuron;
