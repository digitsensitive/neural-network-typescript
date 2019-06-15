"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2017 - 2019 Digitsensitive
 * @description  Neuroevolution: Layer
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
const perceptron_1 = require("./neurons/perceptron");
const sigmoid_1 = require("./neurons/sigmoid");
class Layer {
    constructor(index, type) {
        this.id = index;
        this.neurons = [];
        this.neuronType = type;
    }
    /**
     * Populate the layer with neurons.
     * Each neuron is initialized with a defined number of inputs and random clamped values.
     * @param numberNeurons
     * @param numberInputs
     */
    populate(numberNeurons, numberInputs) {
        for (let i = 0; i < numberNeurons; i++) {
            let randomInputs = [];
            for (let i = 0; i < numberInputs; i++) {
                randomInputs.push(0);
            }
            // create new neuron
            let newNeuron;
            if (this.neuronType === "sigmoid") {
                newNeuron = new sigmoid_1.SigmoidNeuron({ inputs: randomInputs });
            }
            else if (this.neuronType === "perceptron") {
                newNeuron = new perceptron_1.Perceptron({ inputs: randomInputs });
            }
            // push the neuron to the layer
            this.neurons.push(newNeuron);
        }
    }
    /**
     * Get the neurons of this layer
     */
    getNeurons() {
        return this.neurons;
    }
    /**
     * Reset all the neurons in this layer.
     */
    resetLayer() {
        this.neurons = [];
    }
}
exports.Layer = Layer;
