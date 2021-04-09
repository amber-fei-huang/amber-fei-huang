////Learning partner///
function myFunction() {
  document.getElementById("popup").style.display ="none";
  document.getElementById("partner").style.display ="block";
}

////Emoji panel///
const showUp = () => document.getElementById("emojilist").classList.toggle("emojilist-show");
  ////expand vocab cards////
  const displayVocab = () => {
    document.getElementById("contentcard").classList.toggle("contentcard-show");
    document.getElementById("arrow").classList.toggle("expandcad-rotate");
  }
  ////Invite users///????why is it not working?
const inviteUser = () => document.getElementById("grabit").classList.toggle("grabit-show");
  
//////Trun on subtitle////
function myFunc() {
  document.getElementById("title").style.display ="block";}
  ////open vocab card////
  function openFlower() {
    document.getElementById("flowcard").style.display ="block";}
    function closecard() {
      document.getElementById("flowcard").style.display ="none";}

      //////open setting
      function openSet() {
        document.getElementById("videoSet").style.display ="block";}
        function closeSetting() {
          document.getElementById("videoSet").style.display ="none";}

  /////add friend////
  function myFun() {
    document.getElementById("addf").style.display ="block";}
    function yes() {
      document.getElementById("addf").style.display ="none";}
      /////block user////
  function block() {
    document.getElementById("blocku").style.display ="block";}
    function no() {
      document.getElementById("blocku").style.display ="none";}
  /////report user////
  function report() {
    document.getElementById("reportu").style.display ="block";}
    function cancel() {
      document.getElementById("reportu").style.display ="none";}
      /////add button color///
  const addReport = e => e.target.classList.toggle("tag-selected");
  ////bring up chat box////
  function bringChat() {
    document.getElementById("chatWith").style.display ="block";}
    function closeChat() {
      document.getElementById("chatWith").style.display ="none";}
 
      