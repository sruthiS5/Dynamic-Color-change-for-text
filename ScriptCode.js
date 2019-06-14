  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    getValues(this);
  }
};
xhttp.open("GET", "values.xml", true);
xhttp.send();

function getValues(xml) {
  var player = GetPlayer();
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName('db');
  player.SetVar("Value1", x[0].getAttribute('value'));
  player.SetVar("Value2", x[1].getAttribute('value'));
  player.SetVar("Value3", x[2].getAttribute('value'));


var filler1 = "<span><font color=";

var filler2 ="'"+ String(x[0].getAttribute('value'))+"'";
var filler3 = ">Hi</font> Sruthi</span>";
var filler4 = filler1+filler2+filler3;

var player = GetPlayer();

player.SetVar("theText",filler4);
}
