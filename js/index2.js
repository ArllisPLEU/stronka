document.addEventListener('DOMContentLoaded', function(event)
{
   var headerMenu = document.querySelector('#wb_headerMenu');
   var bsheaderMenu = new bootstrap.Tooltip(headerMenu, {offset:[0,14],placement:'bottom', html: true, sanitize: false, title: '<span style="color:#000000;font-family:Arial;font-size:13px;">Rozwiń menu</span>', trigger: 'manual', animation: true, customClass:'ToolTip1'});
   headerMenu.addEventListener('inserted.bs.tooltip', function(e)
   {
      var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
      tooltip.classList.add('animate-show');
   });
   headerMenu.addEventListener('hide.bs.tooltip', function(e)
   {
      var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
      tooltip.classList.remove('animate-show');
      var forceReflow = e.target.offsetWidth;
   });
   TimerStartTimer1();
});
$(document).ready(function()
{
   $("#headerMenu").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: false, display: 'overlay', position: 'left', toggle: true});
});
var wb_Timer1;
function TimerStartTimer1()
{
   wb_Timer1 = setTimeout(function()
   {
      var event = null;
      bootstrap.Tooltip.getInstance('#wb_headerMenu').show();
   }, 1000);
}
function TimerStopTimer1()
{
   clearTimeout(wb_Timer1);
}
