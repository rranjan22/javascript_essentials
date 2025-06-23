// Local Storage and Session Storage are both part of the Web Storage API used for storing key-value pairs in the browser. Local Storage persists data even after the browser is closed and is accessible across all tabs of the same origin, making it suitable for long-term storage like user preferences. Session Storage, on the other hand, is limited to the current tab and is cleared when the tab or browser is closed, making it ideal for temporary data like form drafts. Local Storage typically offers around 5–10MB of space per origin, while Session Storage usually provides about 5MB per tab. Both are accessible via JavaScript and should not be used to store sensitive information due to XSS vulnerabilities.


// "Same origin" means same protocol, domain, and port (e.g., https://example.com:443).
// Two pages like https://example.com/page1 and https://example.com/page2 are same-origin.

//http://example.com vs https://example.com (different protocol)
//https://sub.example.com vs https://example.com (different subdomain)
//https://example.com:3000 vs https://example.com:443 (different port)


localStorage.setItem("token", "sweghshwahrgwag!!!");

console.log(localStorage.getItem("token"));