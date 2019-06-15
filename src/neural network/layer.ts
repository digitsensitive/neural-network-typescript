/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2017 - 2019 Digitsensitive
 * @description  Neuroevolution: Layer
 * @license      Digitsensitive
 */

import { Neuron } from "./neurons/neuron";
import { Perceptron } from "./neurons/perceptron";
import { SigmoidNeuron } from "./neurons/sigmoid";

export class Layer {
  private id: number;
  private neurons: SigmoidNeuron[] | Perceptron[];
  private neuronType: string;

  constructor(index: number, type: string) {
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
  public populate(numberNeurons: number, numberInputs: number): void {
    for (let i = 0; i < numberNeurons; i++) {
      let randomInputs: number[] = [];
      for (let i = 0; i < numberInputs; i++) {
        randomInputs.push(0);
      }

      // create new neuron
      let newNeuron: SigmoidNeuron | Perceptron;
      if (this.neuronType === "sigmoid") {
        newNeuron = new SigmoidNeuron({ inputs: randomInputs });
      } else if (this.neuronType === "perceptron") {
        newNeuron = new Perceptron({ inputs: randomInputs });
      }

      // push the neuron to the layer
      this.neurons.push(newNeuron);
    }
  }

  /**
   * Get the neurons of this layer
   */
  public getNeurons(): SigmoidNeuron[] | Perceptron[] {
    return this.neurons;
  }

  /**
   * Reset all the neurons in this layer.
   */
  public resetLayer(): void {
    this.neurons = [];
  }
}
