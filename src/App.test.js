import { render, screen } from '@testing-library/react';
import App from './App';
import combinations from "./functions/combinations";

const sentence = "show me the code";

test('testing example sentence[4] to be equal "me"', () => {
  let combinationOut = combinations(...sentence.split(" "));
  expect(combinationOut[4]).toEqual("me");

});
