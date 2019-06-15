/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Linear Neuron
 * @license      Digitsensitive
 */
import { ILinearNeuron } from "../interfaces/linear-neuron.interface";
export declare class LinearNeuron {
    private bias;
    private inputs;
    private weights;
    constructor(params: ILinearNeuron);
    /**
     * Get the output of the linear neuron.
     * = bias * ∑ w*x
     */
    getOutput(): number;
}
