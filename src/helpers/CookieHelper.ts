export default class CookieHelper {

  static setCookie(name: string, value: object, days: number = 1) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + JSON.stringify(value) + expires + '; path=/';
    return value;
  }

  static getCookie(name: string) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length, c.length));
    }
    return null;
  }
  static eraseCookie(name: string) {
    document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  
  static clearAllCookies() {
    // Split cookies correctly
    const cookies = document.cookie.split('; ');
    
    // Clear all variations
    for (const cookie of cookies) {
      const [name] = cookie.split('=').map(c => c.trim());
      if (!name) continue;
  
      // Base deletion
      document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      
      // Subdomain/path coverage
      document.cookie = `${name}=; Path=/; Domain=${window.location.hostname}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      document.cookie = `${name}=; Path=/; Domain=.${window.location.hostname}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
  }
}