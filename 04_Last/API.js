console.log("Hello, API");

//using XmlHttpRequest for sending and receiving data (Legacy Methods, not used in modern day apps)


/**
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
 */

//since XMLHttpRequest is a class, we have to make an object of it
const requestUrl = 'https://api.github.com/users/ToxicEyes';
const xmr = new XMLHttpRequest();
xmr.open('GET', requestUrl);
console.log(xmr.readyState);
xmr.send();