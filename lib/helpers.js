"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a random value between [-1,1)
 */
function randomClamped() {
    return Math.random() * 2 - 1;
}
exports.randomClamped = randomClamped;
