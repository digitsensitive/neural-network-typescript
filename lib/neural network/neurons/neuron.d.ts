/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: The base artificial neuron class
 * @license      Digitsensitive
 */
export declare class Neuron {
    protected inputs: number[];
    protected value: number;
    protected weights: number[];
    constructor();
    /**
     * Set a new neuron value.
     * @param value
     */
    setValue(value: number): void;
    /**
     * Get the neuron value.
     */
    getValue(): number;
    /**
     * Populate the neuron with random weights for each connection
     * @param numberOfInputs [Number of inputs].
     */
    populate(numberOfInputs: number): void;
    /**
     * Get all the neuron weights
     */
    getWeights(): number[];
    /**
     * Reset all the weights
     */
    resetWeights(): void;
    /**
     * Returns a random value between [-1,1)
     */
    private randomClamped;
}
