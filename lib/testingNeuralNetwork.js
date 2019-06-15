"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Playground 2
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
const network_1 = require("./neural network/network");
// create out neural network with sigmoid neurons
let myNeuralNetwork = new network_1.Network("sigmoid");
// generate layers
myNeuralNetwork.generateNetworkLayers(1, [2], 1);
myNeuralNetwork.compute([1]);
