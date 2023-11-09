// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCihK4VumiqDMH8xwubBVU9TqddYBrxj5I",
    authDomain: "apcodjellal.firebaseapp.com",
    databaseURL: "https://apcodjellal-default-rtdb.firebaseio.com",
    projectId: "apcodjellal",
    storageBucket: "apcodjellal.appspot.com",
    messagingSenderId: "969237585052",
    appId: "1:969237585052:web:de3531be7adcc57d496159",
    measurementId: "G-J7JTH7H0H4"
};

// Initialize Firebase
firebase.initializeApp(config);

function get_hash_slice() {

    var bl = window.location.hash.slice(1).split('?');
    var a = new Array();
    if(bl.length >= 1) {
        for(var i = 0; i < bl.length; i += 1){



            switch (bl[i].split('=')[0]) {
                case 'id':
                    postid = bl[i].split('=')[1];
                    break;
                default:
                    null;
                    break;
            }
        }
    }
}