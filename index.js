// gapi.load('auth2', function () {
//     gapi.auth2.init({
//         client_id: '1097504830403-uujkl2ue0n6ok3tchisr66ll0pq02cge.apps.googleusercontent.com',
//     });
// });
import jwt_decode from "./jwt-decode"

function handleCredentialResponse(googleUser) {
    console.log('1')
    console.log("Encoded JWT ID token:" + googleUser.credential);
    var userObject = jwt_decode(googleUser.credential);
    console.log(userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true;
    
    console.log(googleUser)
    var profile = googleUser.getBasicProfile();
    var name = profile.getName();
    var imageUrl = profile.getImageUrl();
    // 在页面上显示用户信息
    console.log(profile)
    console.log(name)
    console.log(imageUrl)

    console.log(profile.name)
    console.log(profile.imageUrl)

    document.getElementById('username').innerHTML = name;
    document.getElementById('userimage').src = imageUrl;
}
