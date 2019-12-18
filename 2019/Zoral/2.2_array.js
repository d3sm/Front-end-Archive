let sales = [
    {
      amount: "20000",
      quantity: 20
    },
    {
      amount: "40000",
      quantity: 40
    },
    {
      amount: "10000",
      quantity: 10
    },
    {
      amount: "30000",
      quantity: 30
      }
  ];

  sales.sort(function(a, b) { 
    return (a.amount - b.amount); 
});

console.log(sales);