/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Playground 2
 * @license      Digitsensitive
 */

import { Network } from "./neural network/network";

// create out neural network with sigmoid neurons
let myNeuralNetwork = new Network("sigmoid");

// generate layers
myNeuralNetwork.generateNetworkLayers(1, [2], 1);

console.log(myNeuralNetwork.compute([1]));
