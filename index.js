// gapi.load('auth2', function () {
//     gapi.auth2.init({
//         client_id: '1097504830403-uujkl2ue0n6ok3tchisr66ll0pq02cge.apps.googleusercontent.com',
//     });
// });
// import jwt_decode from "./jwt-decode"

// const cleanHtml = DOMPurify.sanitize(dirtyHtml, { USE_PROFILES: { html: true } });
// const trustedHtml = TrustedHTML.parseHTML(cleanHtml);

function handleCredentialResponse(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
 }
// function start() {
//     // 2. Initialize the JavaScript client library.
//     gapi.client.init({
//       'apiKey': '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',
//       // Your API key will be automatically added to the Discovery Document URLs.
//       'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//       // clientId and scope are optional if auth is not required.
//       'clientId': '1097504830403-uujkl2ue0n6ok3tchisr66ll0pq02cge.apps.googleusercontent.com',
//       'scope': 'profile',
//     }).then(function() {
//       // 3. Initialize and make the API request.
//       return gapi.client.request({
//         'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
//       })
//     }).then(function(response) {
//       console.log(response.result);
//     }, function(reason) {
//       console.log('Error: ' + reason.result.error.message);
//     });
//   };
//   // 1. Load the JavaScript client library.
//   gapi.load('client', start);

//   function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     var name = profile.getName();
//     var email = profile.getEmail();
//     var imageUrl = profile.getImageUrl();
//     // 在页面上显示用户信息
//     console.log(name);
//     console.log(email);
//     console.log(imageUrl);
//   }


// function handleCredentialResponse(googleUser) {
//     // console.log('1')
//     // console.log("Encoded JWT ID token:" + googleUser.credential);
//     // var userObject = jwt_decode(googleUser.credential);
//     // console.log(userObject)
//     // setUser(userObject)
//     // document.getElementById("signInDiv").hidden = true;
    
//     console.log(googleUser)
//     var profile = googleUser.getBasicProfile();
//     var name = profile.getName();
//     var imageUrl = profile.getImageUrl();
//     // 在页面上显示用户信息
//     console.log(profile)
//     console.log(name)
//     console.log(imageUrl)

//     console.log(profile.name)
//     console.log(profile.imageUrl)

//     document.getElementById('username').innerHTML = name;
//     document.getElementById('userimage').src = imageUrl;
// }
