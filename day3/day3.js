var obj = { name: 'ashish',
            age: '22', 
            email: "ashishnadoda007@gmail.com",
            hobbies: "sports",
           
            family: {
                
                mother: {
                   name: '101',
                    age: 'Stree Line',   
                },
                father: {
                    name: '101',
                     age: 'Stree Line',   
                 },
                 sibling: [
                    name= '101',
                     age ='Stree Line',   
                 ]
            }
            };
            obj.locetion="india"
            obj['email']="ashish";
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
