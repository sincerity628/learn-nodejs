let arrayTable = {
  A: { id: '1', name: 'apple' },
  B: { id: '2', name: 'banana' },
  C: { id: '3', name: 'orange' }
};

console.table(arrayTable);
// ┌─────────┬─────┬──────────┐
// │ (index) │ id  │   name   │
// ├─────────┼─────┼──────────┤
// │    A    │ '1' │ 'apple'  │
// │    B    │ '2' │ 'banana' │
// │    C    │ '3' │ 'orange' │
// └─────────┴─────┴──────────┘
