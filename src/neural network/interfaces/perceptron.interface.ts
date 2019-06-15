/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Neural Network: Perceptron Interface
 * @license      Digitsensitive
 */

export interface IPerceptron {
  bias?: number;
  inputs?: number[];
  learningRate?: number;
  threshold?: number;
  weights?: number[];
}
