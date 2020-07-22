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
  var axx = a.options[a.selectedIndex].value; //pobranie wartości (odpowiedniego rejestru)
                                              //z diva "from"
  var b = document.getElementById("to");
  var bxx = b.options[b.selectedIndex].value; //pobranie wartości (odpowiedniego rejestru)
                                              //z diva "to"

  var exe = document.getElementById(axx).value;
  document.getElementById(axx).value = "";
  document.getElementById(bxx).value = exe;   //nadpisanie wprowadzonej wartości
                                              //do odpowiedniego rejestru;
                                              //"wyczyszczenie" poprzedniego rejestru
}

function xchg() 
{
  var a = document.getElementById("from");
  var axx = a.options[a.selectedIndex].value; //pobranie wartości (odpowiedniego rejestru)
                                              //z diva "from"

  var b = document.getElementById("to");
  var bxx = b.options[b.selectedIndex].value; //pobranie wartości (odpowiedniego rejestru)
                                              //z diva "to"

  var exe = document.getElementById(axx).value;   //pobranie wartości ze zmiennej axx
  var exed = document.getElementById(bxx).value;  //pobranie wartości ze zmiennej bxx
  document.getElementById(axx).value = exed;      //wartość ze zmiennej bxx wprowadzona do axx
  document.getElementById(bxx).value = exe;       //wartość ze zmiennej axx wprowadzona do bxx
}
