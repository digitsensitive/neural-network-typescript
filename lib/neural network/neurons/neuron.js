"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: The base artificial neuron class
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Neuron {
    constructor() {
        this.weights = [];
    }
    /**
     * Set a new neuron value.
     * @param value
     */
    setValue(value) {
        this.value = value;
    }
    /**
     * Get the neuron value.
     */
    getValue() {
        return this.value;
    }
    /**
     * Populate the neuron with random weights for each connection
     * @param numberOfInputs [Number of inputs].
     */
    populate(numberOfInputs) {
        for (let i = 0; i < numberOfInputs; i++) {
            this.weights.push(this.randomClamped());
        }
    }
    /**
     * Get all the neuron weights
     */
    getWeights() {
        return this.weights;
    }
    /**
     * Reset all the weights
     */
    resetWeights() {
        this.weights = [];
    }
    /**
     * Returns a random value between [-1,1)
     */
    randomClamped() {
        return Math.random() * 2 - 1;
    }
}
exports.Neuron = Neuron;
