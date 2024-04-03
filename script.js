//mad lib with javascript by Mr.v
// eventlistener
document.getElementById("mad-lib-btn").addEventListener("click", BuildMabLib);
//event function
function BuildMabLib() {
  //input
  let pluralnoun = documen.getElementById("pural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  //process
  let result =
    '"There are to many' +
    pluralnoun +
    "on this" +
    adjective +
    'airplane!", I screamed. "somebody has to ' +
    verb +
    " on the " +
    noun +
    ' to solve this problem."';
  //output
  document.getElementById("result").innerhtml = result;
}
