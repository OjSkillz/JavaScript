const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

  let ages = input.map((element) => element.age);
  let result = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
  console.log(result);