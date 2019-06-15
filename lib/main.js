"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Playground
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
const perceptron_1 = require("./neural network/neurons/perceptron");
const linear_1 = require("./neural network/neurons/linear");
const sigmoid_1 = require("./neural network/neurons/sigmoid");
// create a perceptron neuron
// in this example we want to know if we should go to a concert
//
// it depends on:
// the weather (= input 1)
// if the friend accompanies you (= input 2)
// if the entrance is free (= input 3)
//
// the corresponding weights tell us, how much we weight each input
// in this example the weather is very important for us, thats why it has a high weight
//
// if the score is more than the threshold, we get 1, meaning we go to the concert
let myPerceptron = new perceptron_1.Perceptron({
    inputs: [1, 0, 0],
    weights: [6, 3, 3],
    threshold: 4
});
// introducing bias
let myPerceptron2 = new perceptron_1.Perceptron({
    inputs: [1, 0, 0],
    weights: [6, 3, 3],
    bias: -5
});
// NAND gate Perception
// A | B | Out
// 0 | 0 | 1
// 0 | 1 | 1
// 1 | 0 | 1
// 1 | 1 | 0
// NAND gates are universal for computation
// So perceptrons are universal for computation.
let NANDGate = new perceptron_1.Perceptron({
    inputs: [1, 1],
    weights: [-1, -1],
    bias: 2
});
// AND gate
// A | B | Out
// 0 | 0 | 0
// 0 | 1 | 0
// 1 | 0 | 0
// 1 | 1 | 1
let ANDGate = new perceptron_1.Perceptron({
    inputs: [1, 1],
    weights: [1, 1],
    bias: -1.5
});
// OR gate
// A | B | Out
// 0 | 0 | 0
// 0 | 1 | 1
// 1 | 0 | 1
// 1 | 1 | 1
let ORGate = new perceptron_1.Perceptron({
    inputs: [1, 1],
    weights: [1, 1],
    bias: -0.5
});
// NOT gate
// A | Out
// 0 | 1
// 1 | 0
let NOTGate = new perceptron_1.Perceptron({
    inputs: [1],
    weights: [-1],
    bias: 0.5
});
// NOR gate
// A | B | Out
// 0 | 0 | 1
// 0 | 1 | 0
// 1 | 0 | 0
// 1 | 1 | 0
let NORGate = new perceptron_1.Perceptron({
    inputs: [0, 0],
    weights: [-1, -1],
    bias: 0.5
});
/*
// XOR gate
// A | B | Out
// 0 | 0 | 0
// 0 | 1 | 1
// 1 | 0 | 1
// 1 | 1 | 0
let XORGate = new Perceptron({
  inputs: [0, 0],
  weights: [-1, -1],
  bias: 0.5
});

// XNOR gate
// A | B | Out
// 0 | 0 | 1
// 0 | 1 | 0
// 1 | 0 | 0
// 1 | 1 | 0
let XNORGate = new Perceptron({
  inputs: [0, 0],
  weights: [-1, -1],
  bias: 0.5
});*/
// a simple linear neuron
let myLinearNeuron = new linear_1.LinearNeuron({
    inputs: [1, 2],
    weights: [5, 2],
    bias: 2
});
// a simple sigmoid neuron
let mySigmoidNeuron = new sigmoid_1.SigmoidNeuron({
    inputs: [0.2, 0.2],
    weights: [1, 1],
    bias: 0
});
/*
console.log("--------------------------------------");
console.log("Simple Perceptron: " + myPerceptron.getOutput());
console.log("--------------------------------------");
console.log("Perceptron using bias: " + myPerceptron2.getOutput());
console.log("--------------------------------------");
console.log("NAND gate: " + NANDGate.getOutput());
console.log("--------------------------------------");
console.log("AND gate: " + ANDGate.getOutput());
console.log("--------------------------------------");
console.log("OR gate: " + ORGate.getOutput());
console.log("--------------------------------------");
console.log("NOT gate: " + NOTGate.getOutput());
console.log("--------------------------------------");
console.log("NOR gate: " + NORGate.getOutput());
console.log("--------------------------------------");
console.log("Simple linear neuron: " + myLinearNeuron.getOutput());
console.log("--------------------------------------");
console.log("Simple sigmoid neuron: " + mySigmoidNeuron.getOutput());
console.log("--------------------------------------");*/
// learning algorithm for a (single-layer) perceptron
// training set for training a perceptron to be a NAND gate
let D = { i: [[0, 0], [0, 1], [1, 0], [1, 1]], o: [1, 1, 1, 0] };
// init perceptron with random weights and a threshold of 1
let learningPerceptron = new perceptron_1.Perceptron({
    inputs: [1, 1],
    learningRate: 0.5
});
let correct = 0;
let wrong = 0;
// DO THE TRAINING
for (let x = 1; x <= 100000; x++) {
    // get random training set
    let randomTrainingSet = Math.floor(Math.random() * Math.floor(D.i.length));
    // train
    learningPerceptron.train(D.i[randomTrainingSet], D.o[randomTrainingSet]);
}
console.log("--------------------------------------");
console.log("-------------TRAINING DONE------------");
console.log("--------------------------------------");
// EVALUATE HOW GOOD THE PERCEPTRON IS
for (let x = 1; x <= 1000000; x++) {
    // get random training set
    let randomTrainingSet = Math.floor(Math.random() * Math.floor(D.i.length));
    learningPerceptron.setInput(D.i[randomTrainingSet]);
    if (learningPerceptron.getOutput() === D.o[randomTrainingSet]) {
        correct++;
    }
    else {
        wrong++;
    }
}
console.log("CORRECT: " + correct, "WRONG: " + wrong);
console.log("--------------------------------------");
console.log("--------------------------------------");
