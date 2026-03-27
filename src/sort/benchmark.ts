import { quickSort } from "./quickSort";
import { mergeSort } from "./mergeSort";
import { bestCase, worstCase, averageCase } from "./dataGenerator";

function measure(fn: (arr: number[]) => number[], arr: number[]) {
  const start = performance.now();
  fn([...arr]);
  const end = performance.now();
  return end - start;
}

function runExperiment(name: string, generator: (n: number) => number[]) {
  const sizes = [1000, 5000, 10000];

  for (const size of sizes) {
    const resultsQuick: number[] = [];
    const resultsMerge: number[] = [];

    for (let i = 0; i < 30; i++) {
      const data = generator(size);

      resultsQuick.push(measure(quickSort, [...data]));
      resultsMerge.push(measure(mergeSort, [...data]));
    }

    const avgQuick = average(resultsQuick);
    const avgMerge = average(resultsMerge);

    console.log(`\nCaso: ${name} | N=${size}`);
    console.log(`QuickSort: ${avgQuick.toFixed(4)} ms`);
    console.log(`MergeSort: ${avgMerge.toFixed(4)} ms`);
  }
}

function average(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function runBenchmarks() {
  runExperiment("Melhor Caso", bestCase);
  runExperiment("Caso Médio", averageCase);
  runExperiment("Pior Caso", worstCase);
}
