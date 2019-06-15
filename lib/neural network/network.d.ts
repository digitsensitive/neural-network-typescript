/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2017 - 2019 Digitsensitive
 * @description  Neuroevolution: Network
 * @license      Digitsensitive
 */
import { INetworkData } from "./interfaces/network-data.interface";
import { Layer } from "./layer";
export declare class Network {
    private layers;
    private neuronType;
    constructor(type: string);
    /**
     * Generate all the layers of the network
     * @param input [array with neurons in the input layer with their values]
     * @param hidden [number of neurons per hidden layer]
     * @param output [number of neurons in the output layer]
     */
    generateNetworkLayers(input: number, hidden: number[], output: number): void;
    /**
     * Create and get a copy of the network (neurons and weights)
     * Returns array with the number of neurons in each layer and a flat array of all weights.
     */
    getCopyOfTheNetwork(): INetworkData;
    /**
     * Load network data into this network
     * @param data
     */
    loadNetworkWithData(data: INetworkData): void;
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
    compute(inputs: number[]): number[];
    /**
     * Logistic activation function
     * @param  {number} a  [Input Value]
     * @return {number}    [Return Value]
     */
    private activation;
    /**
     * Reset all the layers of this network
     */
    private resetNetwork;
    getLayers(): Layer[];
}
