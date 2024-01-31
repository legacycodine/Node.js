var cnt = 0;

function f1() {
  console.log(1 + 1);
  // f1(); // Recursion happen here,  the function is calling itself here
  // to manage recursion, you can use an if statement.
  if (cnt < 5) {
    cnt = cnt + 1;
    f1();
  }
}

function f2() {
  console.log("function 2");
}
f1();
f2();

function f3(f4AsParameter) {
  console.log("function 3");
  f4AsParameter(); // calling f4 here as a parameter
}

function f4() {
  console.log("function 4");
}
f3(f4);

function parent() {
  var fruit = "banana";
  function child(cbk) {
    cbk();
  }
  child(function () {
    console.log("child eat" + fruit);
  });
}

parent();