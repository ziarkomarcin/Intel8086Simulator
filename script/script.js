function wyczysc() 
{
  var entered = document.getElementsByTagName("input");
  for(var a = 0; a < entered.length; a++) 
  {
      if(entered[a].type == "number") entered[a].value = "";
  }
}

function mov() 
{
  var a = document.getElementById("from");
  var axx = a.options[a.selectedIndex].value;

  var b = document.getElementById("to");
  var bxx = b.options[b.selectedIndex].value;

  var exe = document.getElementById(axx).value;
  document.getElementById(axx).value = "";
  document.getElementById(bxx).value = exe;
}

function xchg() 
{
  var a = document.getElementById("from");
  var axx = a.options[a.selectedIndex].value;

  var b = document.getElementById("to");
  var bxx = b.options[b.selectedIndex].value;

  var exe = document.getElementById(axx).value;
  var exed = document.getElementById(bxx).value;
  document.getElementById(axx).value = exed;
  document.getElementById(bxx).value = exe;
}
