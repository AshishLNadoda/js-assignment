let shoppingList = ["maggi","pepsi","sugar","tea","cup"];
for(let i=0;i < shoppingList.length;i++)
  {
    console.log(shoppingList[i]);
  }
  shoppingList.push("cake");
  console.log(shoppingList);
  shoppingList.pop();
  console.log(shoppingList);
  shoppingList.shift();
  console.log(shoppingList);
  shoppingList.unshift("Lemon","Pineapple");
  console.log(shoppingList);
  var slicearr=shoppingList.slice(1, 3);
  console.log(slicearr);
  shoppingList.splice(1, 3);
  console.log(shoppingList)
  shoppingList.sort();
  console.log(shoppingList);
