window.addEventListener("DOMContentLoaded", function() {
  function eraseCookie(name) {   
    document.cookie = name+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  eraseCookie('_ga');
  eraseCookie('_ga_ZV3YSTSREF');
});