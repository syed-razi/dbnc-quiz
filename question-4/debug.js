var server_echo;
var json = {
  json: JSON.stringify({ // (1)
    a: 1,
    b: 2,
  }),
  delay: 3,
};
fetch("/echo/", { // (2)
  method: "post",
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body:
    "json=" +
    encodeURIComponent(JSON.stringify(json.json)) +
    "&delay=" +
    json.delay,
})
  .then(function (response) {
    server_echo = response.json().echo; // (3)
    return response.json();
  })
  .then(function (result) {
    alert(result); // (4)
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
server_echo.forEach((element) => console.log(element)); // (5)

/*

Problems with the above code:

(1) Assumming that this is the Echo from jsFiddle, the correct
    path should be /echo/json

(2) JSON.stringify can be removed here as it is already used on
    line 17 in the body

(3) reponse.json() returns a promise and does not have an echo
    property. This line should be removed and instead server_echo
    should be moved to the next then() method at position (4)

(4) This is not really causing an error, but the alert is meaningless
    since result is an object. Something like Object.entries(result)
    would actually show something.

(5) This line may run before the fetch call since fetch is
    asynchronous. This will lead to a "Cannot read properties of undefined"
    error since server_echo will not have been defined yet. To
    fix this, we should move server_echo into the same then()
    method where server_echo is created, and put it underneath. Otherwise
    we can put it in it's own then() block altogether.

    The other issue with this line is that it is using forEach which is not
    a method available for objects. In order to use forEach we would first
    have to do something like Object.entries(server_echo).forEach(...)

*/