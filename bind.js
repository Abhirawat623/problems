      // function borrowing -- 



      const user1 ={
        name:"Abhi",
        age: 90,
        displayMessage(){
            console.log(this.name);
        }
    
      
        
        // sayHi(){console.log(this.name);}
    };

  
    const user2 ={
        name:"Ankit",
        age: 19,
        // sayHi(){console.log(this.name);}
    };
    
    const user3 ={
        name:"Surbhi",
        age: 75,
        sayHi(){console.log(this.name);}
    };
    


    function sayHi(degree,year){
    //implicit binding
    
    console.log(this.name,degree, year);
       
    }
    // user1.sayHi();
    //explicit function
    
    // sayHi.call(user1,"Bca", 2100);// the value os user1     {call}
    // sayHi.call(user2,"Btech", 2111);// the value of user2
    // sayHi.call(user3,"MCA",5201);// the value of user3
    
    // sayHi.apply(user1,["Btech"], 2100);// the value os user1     {apply}
    // sayHi.apply(user2,["Btech"], 2111);// the value of user2
    // sayHi.apply(user3,["Btech"],5201);// the value of user3

    const result = sayHi.bind(user3,"btech-exe");
    result(2022);
    user1.displayMessage();
   //used to put other data in repsectiv arrays by using functions