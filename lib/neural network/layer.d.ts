/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2017 - 2019 Digitsensitive
 * @description  Neuroevolution: Layer
 * @license      Digitsensitive
 */
import { Perceptron } from "./neurons/perceptron";
import { SigmoidNeuron } from "./neurons/sigmoid";
export declare class Layer {
    private id;
    private neurons;
    private neuronType;
    constructor(index: number, type: string);
    /**
     * Populate the layer with neurons.
     * Each neuron is initialized with a defined number of inputs and random clamped values.
     * @param numberNeurons
     * @param numberInputs
     */
    populate(numberNeurons: number, numberInputs: number): void;
    /**
     * Get the neurons of this layer
     */
    getNeurons(): SigmoidNeuron[] | Perceptron[];
    /**
     * Reset all the neurons in this layer.
     */
    resetLayer(): void;
}
