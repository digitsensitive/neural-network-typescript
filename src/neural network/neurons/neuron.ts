/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: The base artificial neuron class
 * @license      Digitsensitive
 */

export class Neuron {
  protected inputs: number[];
  protected value: number;
  protected weights: number[];

  constructor() {
    this.weights = [];
  }

  /**
   * Set a new neuron value.
   * @param value
   */
  public setValue(value: number): void {
    this.value = value;
  }

  /**
   * Get the neuron value.
   */
  public getValue(): number {
    return this.value;
  }

  /**
   * Populate the neuron with random weights for each connection
   * @param numberOfInputs [Number of inputs].
   */
  public populate(numberOfInputs: number): void {
    for (let i = 0; i < numberOfInputs; i++) {
      this.weights.push(this.randomClamped());
    }
  }

  /**
   * Get all the neuron weights
   */
  public getWeights(): number[] {
    return this.weights;
  }

  /**
   * Reset all the weights
   */
  public resetWeights(): void {
    this.weights = [];
  }

  /**
   * Returns a random value between [-1,1)
   */
  private randomClamped(): number {
    return Math.random() * 2 - 1;
  }
}
