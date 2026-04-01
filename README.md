# Projeto III – Benchmark de Algoritmos de Ordenação

Este projeto tem como objetivo implementar e analisar o desempenho de algoritmos de ordenação, comparando resultados experimentais com a complexidade teórica.

## Algoritmos implementados

Foram implementados os seguintes algoritmos:

- Quick Sort
- Merge Sort

Ambos foram desenvolvidos em TypeScript.

---

# Cenários avaliados

Os algoritmos foram testados em três tipos de entrada:

## Melhor caso

Array já ordenado em ordem crescente.

Exemplo:

```
[1, 2, 3, 4, 5, 6]
```

## Caso médio

Array com valores aleatórios.

Exemplo:

```
[7, 2, 9, 1, 5, 3]
```

## Pior caso

Array ordenado em ordem decrescente.

Exemplo:

```
[6, 5, 4, 3, 2, 1]
```

---

# Metodologia dos Experimentos

Os experimentos seguem os seguintes critérios:

- 3 tamanhos de entrada
  - 1000 elementos
  - 5000 elementos
  - 10000 elementos

- Cada experimento é executado **30 vezes**.

O tempo de execução é medido utilizando:

```
performance.now()
```

Após as execuções é calculada a média do tempo de execução.

---

# Complexidade Teórica

| Algoritmo  | Melhor Caso | Caso Médio | Pior Caso  |
| ---------- | ----------- | ---------- | ---------- |
| Quick Sort | O(n log n)  | O(n log n) | O(n²)      |
| Merge Sort | O(n log n)  | O(n log n) | O(n log n) |

## Observações

O Merge Sort mantém desempenho estável em todos os cenários.

O Quick Sort pode apresentar degradação de desempenho dependendo da escolha do pivô, podendo atingir complexidade O(n²) no pior caso.

---

# Estrutura do Projeto

```
src
 ├── sort
 │    ├── quickSort.ts
 │    ├── mergeSort.ts
 │    ├── dataGenerator.ts
 │    └── benchmark.ts
 │
 └── index.ts
```

---

# Como executar o projeto

## 1. Instalar dependências

```
npm install
```

## 2. Compilar o projeto

```
npm run build
```

## 3. Executar benchmark

```
npm run start
```

---

# Exemplo de saída

```
Caso: Melhor Caso | N=1000
QuickSort: 2.13 ms
MergeSort: 3.02 ms

Caso: Caso Médio | N=1000
QuickSort: 2.40 ms
MergeSort: 3.10 ms

Caso: Pior Caso | N=1000
QuickSort: 15.21 ms
MergeSort: 3.05 ms
```

---

# Conclusão

Os experimentos demonstram que o Merge Sort apresenta comportamento estável independentemente da distribuição dos dados.

O Quick Sort tende a ser muito eficiente na prática, porém pode sofrer degradação significativa no pior caso dependendo da escolha do pivô.

Os resultados experimentais observados estão de acordo com a análise teórica dos algoritmos.
