$(document).ready(function(){
    let $output = $('#output');

    firebase.initializeApp({
        apiKey: "AIzaSyCVzH3_sUn5zVaEhRHxu9zrL6x8NerYHPc",
        authDomain: "class-885a7.firebaseapp.com",
        databaseURL: "https://class-885a7.firebaseio.com",
        projectId: "class-885a7",
        storageBucket: "class-885a7.appspot.com",
        messagingSenderId: "223325329093",
        appId: "1:223325329093:web:b8af6a27230eeea9dbcaa7"
    });

    let db = firebase.firestore();
    let usersRef = db.collection("資工一"); 
    let docRef = usersRef.doc("課表");
    let str = "";

    docRef.onSnapshot(function(doc) {
        let str = "";
        var i;
        var j;
        let week = ['日','一','二','三','四','五','六'];  

        for(i = 1; i <= 13; i++) {
            str += "<tr>"
            for(j = 0; j < week.length; j++) {
                console.log(doc.data()[week[j]][i]);
                str += `<td>${doc.data()[week[j]][i]}</td>`;
            }
            str += "</tr>"
        }
        
        $output.html(`<tbody>${str}</tbody>`);
    });


});