"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2017 - 2019 Digitsensitive
 * @description  Neuroevolution: Network
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
const layer_1 = require("./layer");
class Network {
    constructor(type) {
        this.layers = [];
        this.neuronType = type;
    }
    /**
     * Generate all the layers of the network
     * @param input [array with neurons in the input layer with their values]
     * @param hidden [number of neurons per hidden layer]
     * @param output [number of neurons in the output layer]
     */
    generateNetworkLayers(input, hidden, output) {
        let index = 0;
        let previousNeurons = 0;
        const inputLayer = new layer_1.Layer(index, this.neuronType);
        // The input layer will not have any connections to previous neurons (it is the input layer!)
        // so the previous neurons will be set to 0
        inputLayer.populate(input, previousNeurons);
        // Add the first layer to our network
        this.layers.push(inputLayer);
        // We now go to the next layer and move one to the right
        // This means, that we will get as many connections as input neurons exist
        previousNeurons = input;
        index++;
        // Now we loop through all the hidden layers (it is an array!)
        for (const i in hidden) {
            const newHiddenLayer = new layer_1.Layer(index, this.neuronType);
            newHiddenLayer.populate(hidden[i], previousNeurons);
            this.layers.push(newHiddenLayer);
            previousNeurons = hidden[i];
            index++;
        }
        // Create the output layer
        const outputLayer = new layer_1.Layer(index, this.neuronType);
        outputLayer.populate(output, previousNeurons);
        this.layers.push(outputLayer);
    }
    /**
     * Create and get a copy of the network (neurons and weights)
     * Returns array with the number of neurons in each layer and a flat array of all weights.
     */
    getCopyOfTheNetwork() {
        const data = {};
        for (const i in this.layers) {
            data.neurons.push(this.layers[i].getNeurons().length);
            // loop through the neurons
            for (const j in this.layers[i].getNeurons()) {
                // for each neuron have a look at the corresponding weights
                for (const k in this.layers[i].getNeurons()[j].getWeights()) {
                    // push all input weights of each neuron from each layer into a flat array
                    data.weights.push(this.layers[i].getNeurons()[j].getWeights()[k]);
                }
            }
        }
        return data;
    }
    /**
     * Load network data into this network
     * @param data
     */
    loadNetworkWithData(data) {
        let index = 0;
        let previousNeurons = 0;
        let indexWeights = 0;
        this.resetNetwork();
        // Loop through all the layers
        for (const i in data.neurons) {
            // Create new layer
            const newLayer = new layer_1.Layer(index, this.neuronType);
            // We know how many neurons are in this layer, since we have the number saved
            // Get it and populate the network with random data
            newLayer.populate(data.neurons[i], previousNeurons);
            // Since we load network data, we now apply the data to the neurons
            for (const j in newLayer.getNeurons()) {
                for (const k in newLayer.getNeurons()[j].getWeights()) {
                    newLayer.getNeurons()[j].getWeights()[k] = data.weights[indexWeights];
                    // increment index of flat array
                    indexWeights++;
                }
            }
            // Push the layer into our network
            this.layers.push(newLayer);
            // We now go to the next layer and move one to the right
            // This means, that we will get as many connections as the last layer has neurons
            previousNeurons = data.neurons[i];
            index++;
        }
    }
    /**
     * Compute the output of an input
     * @param  {[type]} inputs [Set of inputs]
     * @return {Object}         [Network output]
     */
    /**
     * Get the output of or network with the inputs given
     * You will get a number array
     * @param inputs
     */
    compute(inputs) {
        // create an output array, which is empty at the start
        let out = [];
        // the inputs are the outputs of the first layer
        out = inputs;
        // loop through all the layers
        for (let i = 1; i < this.layers.length; i++) {
            // get the neurons of this layer and loop through each neuron
            const neuronsOfThisLayer = this.layers[i].getNeurons();
            // new output for the next layer
            let tempOut = [];
            for (const n of neuronsOfThisLayer) {
                // for each neuron set the input to the output of the previous layer
                n.setInput(out);
                tempOut.push(n.getOutput());
            }
            // check if there is one more layer on the right
            if (this.layers[i + 1]) {
                // great! there is one more layer on the right
                // set the new output to be the one from the previous layer
                // this is the tempOut array!
                out = tempOut;
                // now go to the for loop back again
            }
            else {
                // welcome to the last ouput
                return tempOut;
            }
        }
    }
    /**
     * Logistic activation function
     * @param  {number} a  [Input Value]
     * @return {number}    [Return Value]
     */
    activation(a) {
        const ap = -a / 1;
        return 1 / (1 + Math.exp(ap));
    }
    /**
     * Reset all the layers of this network
     */
    resetNetwork() {
        this.layers = [];
    }
    getLayers() {
        return this.layers;
    }
}
exports.Network = Network;
