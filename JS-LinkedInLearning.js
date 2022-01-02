// Stuff I have learnt in JavaScript

// Objects
var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
  }
  
  console.log(bird)
  // This will show all the characteristics of this object
  console.log(bird.genus)
  // This will show the specified characteristic, genus would be 'corvus'

  // In order to add another characteristic into this object, we would do this:
  bird.whereItLives = "in a tree";
  console.log(bird);
  // When we print the whole object, it should have the new characteristic in the object

  // If you want to delete a characteristic, we would do this:
  delete bird.whereItLives;
  console.log(bird);
  // It should remove the characteristic, when you print it
  

// Arrays
  
  // This is an array ↴
  var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  console.log(daysOfTheWeek);

  // You can also have arrays with strings, numbers and booleans together

  var myArray = [
    0, 1, 2,
    'string1', 'string2', 'string3',
    true, false
    ];
    console.log(myArray)
   
    // You can find the length of an array using:
    console.log(myArray.length)
    // Then you can find a specific part of an array using:
    console.log(myArray[4])
    // You can change a part of the array by doing:
    myArray[2] = "string0"
    // Then when you print it, it should change '2' to 'string0'
    // To delete something, indtead of doing 'delete.', you do '.splice'
    myArray.splice(3, 4)

// Operators

    // A simple operator will look like this ↴
    one === one; // The outcome should be true
    one !== one; // The outcome should be false
    // Normally, 3 equal signs mean that the it will have to be strictly equal in order for it to be true
    // 2 equal signs aren't as strict, because if you compare a string to an integer, it would say true

    // Arithmetic operators are very simple and they look like this
    2+2
    2-2
    2/2 // A Forward Slash is division
    2*2 // An asterisk means multiplication

    // You can also add strings together:
    "dog" + "cat"; //The outcome should be "dogcat", in order to add a space, add it in one of the words

    // && = and, || = or. We can use these to our advantage and do multiple operators at a time.
  
    var animal1 = "monkey";
    var animal2 = "bear";
    var animal3 = "tiger";

    animal1 === "monkey" && animal2 === "bear"; // true
    animal1 === "ape" && animal2 === "bear"; // false
    animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"; // false
    animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true
    animal1 === "monkey" || animal2 === "bear"; // true
    animal1 === "ape" || animal2 === "bear"; // true
    animal1 === "ape" || animal2 === "ostrich"; // false

// If and Else statements

    var cherub = "Cupid";
    // cherub = 'Some Other Guy';

    if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

    if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
    else console.log("I feel nothing!");
    // Basically if the variable called 'cherub' is called Cupid, then it will say the first statement,
    // If it is something else, then it will say the  last statement

  // Terse ifs
    // This is just a short and quick way to write ifs and elses   
    var food = "cake";
      // food = 'Roasted Potatoes';

      food === "cake"
      ? console.log("I will hire you as a baker.")
      : console.log("I will hire you as a chef.");  
    // The question mark means 'if', and the colon means 'else'
    // If you want to be more quicker than that then do this:
      var job = food === "cake" ? "You will be a baker" : "You will be a chef";

    
// For and while loops
    for (var loop = 0; loop < 10; loop += 1) {
      console.log(loop);
    }
    // This will only go upto 10, and then stop from there

  var i = 0;
    while (i < 10) {
    console.log(i + "... This will go until we hit 10");
    i += 1;
    }
  // This piece of code will count the numbers and also say 'This will go until we hit 10'. This is a while loop
  
// Functions
    
  // Functions are lines of code that will be packaged into one line that we can, name, command and etc
  function hello() {
    console.log('Hello');
    console.log('Bonjour');
    console.log('Guten Tag');
    console.log('Hola');
  }
  // Instead of writing console.log all the time, we can do this by doing one single line of code
    hello();
  
  // There are also arguments, which are objects that contain values of arguments passed onto that function
  fuddify("Be very quiet, I'm hunting rabbits.");
  fuddify("You screwy rabbit.");
  fuddify("Rabbit tracks!");

  function fuddify(speech) {
  if (typeof speech !== "string") { // Needs to be a string
    console.error("Nice twy, wabbit!");
    return;
  }

  // example from linkedinlearning
  speech = speech.replace(/r/g, "w");
  speech = speech.replace(/R/g, "W");

  return speech;
}