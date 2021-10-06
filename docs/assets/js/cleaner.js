window.addEventListener("DOMContentLoaded", function() {
  function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999; SameSite=Lax';
  }

  eraseCookie('_ga');
  eraseCookie('_ga_ZV3YSTSREF');
  eraseCookie('_gid');
});