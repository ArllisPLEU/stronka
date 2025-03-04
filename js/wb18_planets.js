document.addEventListener('DOMContentLoaded', function(event)
{
   var headerMenu_dropdownToggle = document.querySelectorAll('#headerMenu .dropdown-toggle');
   headerMenu_dropdownToggle.forEach(item => 
   {
      var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
   });
   var headerMenu_dropdown = document.querySelectorAll('#headerMenu .dropdown');
   headerMenu_dropdown.forEach(item => 
   {
      item.addEventListener('shown.bs.dropdown', function(e)
      {
         e.currentTarget.classList.add('show');
      });
      item.addEventListener('hidden.bs.dropdown', function(e)
      {
         e.currentTarget.classList.remove('show');
      });
   });
   document.addEventListener('click', function (e)
   {
      var isChildOfDropdownMenu = false;
      var target = e.target;
      while (target !== null)
      {
         if (target.classList && target.classList.contains('headerMenu-navbar-collapse') && target.classList.contains('show'))
         {
            isChildOfDropdownMenu = true;
            break;
         }
         target = target.parentNode;
      }
      if (isChildOfDropdownMenu)
      {
         if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('dropdown-toggle'))
         {
            const dropdownMenu = document.querySelector('.headerMenu-navbar-collapse');
            if (dropdownMenu)
            {
               const collapseInstance = bootstrap.Collapse.getInstance(dropdownMenu);
               if (collapseInstance)
               {
                  collapseInstance.hide();
               }
            }
         }
      }
   });
   var Toast1 = document.getElementById('Toast1');
   var bsToast1 = new bootstrap.Toast(Toast1, {animation: true, autohide: true, delay: 10000});
   setTimeout(function(){ bsToast1.show(); }, 10);
});
$(document).ready(function()
{
   $("a[href*='#header']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
   });
});
