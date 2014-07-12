(function() {
  var fill;

  fill = function(container, liquid) {
    if (liquid == null) {
      liquid = "coffee";
    }
    return "Filling the " + container + " with " + liquid + "... yes, yes... this is grand.";
  };

}).call(this);

(function() {
  var addTheseGuys;

  addTheseGuys = function(num1, num2) {
    return num1 + num2 + " oh hai there, I am dingus. Woah.";
  };

}).call(this);
