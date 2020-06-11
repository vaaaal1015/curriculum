var table = [];
let week = ['日','一','二','三','四','五','六'];
let csis = ["資工一", "資工二", "資工三", "資工四"];

$(document).ready(function(){
    //let $output = $('#output');

    firebase.initializeApp({
        apiKey: "AIzaSyCVzH3_sUn5zVaEhRHxu9zrL6x8NerYHPc",
        authDomain: "class-885a7.firebaseapp.com",
        databaseURL: "https://class-885a7.firebaseio.com",
        projectId: "class-885a7",
        storageBucket: "class-885a7.appspot.com",
        messagingSenderId: "223325329093",
        appId: "1:223325329093:web:b8af6a27230eeea9dbcaa7"
    });

    /*
    let db = firebase.firestore();
    let usersRef = db.collection("資工一");
    let docRef = usersRef.doc("課表");

    docRef.onSnapshot(function(doc) {
        let str = "<thead><tr><th></th><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody>";
        var i;
        var j;
        let week = ['日','一','二','三','四','五','六'];  

        for(i = 1; i <= 13; i++) {
            str += `<tr><td>${i}</td>`
            for(j = 0; j < week.length; j++) {
                //console.log(doc.data()[week[j]][i]);
                str += `<td>${doc.data()[week[j]][i]}</td>`;
            }
            str += "</tr>"
        }
        
        $output.html(`${str}</tbody>`);
    });
    */
    
    var docRef;
    var i = 0;
    var j = 0;
    var k = 0;


    for(i = 0; i < csis.length; i++) {
        docRef = firebase.firestore().collection(csis[i]).doc("課表")
        docRef.get().then(function(doc) {
            table.push(doc.data());
            //console.log("1");
        });
    }

    /*
    for(i = 1; i <= 13; i++) {
        str += `<tr><td>${i}</td>`;
        for(j = 0; j < week.length; j++) {
            str += "<td>";
            for(k = 0; k < table.length; k++) {
                str += `${table[k][week[j]][i]}<br>`;
                console.log(table[k][week[j]][i]);
                console.log("2");
            }
            console.log("3");
            str += "</td>";
        }
        str += "</tr>";
    }
    $output.html(`${str}</tbody>`);
    */
});

function ShowTable() {
    let str = "<thead><tr><th></th><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody>";
    let $output = $('#output');
    
    var text = document.getElementById("input").value ;
    alert(text);

    for(i = 1; i <= 13; i++) {
        str += `<tr><td>${i}</td>`;
        for(j = 0; j < week.length; j++) {
            str += "<td>";
            for(k = 0; k < table.length; k++) {
                if(text == table[k][week[j]][i] && text != "") {
                    str += `<p class="selection">(${k+1})${table[k][week[j]][i]}</p>`;
                }
                else {
                    str += `<p>(${k+1})${table[k][week[j]][i]}</p>`;
                }
                //console.log(table[k][week[j]][i]);
                //console.log("2");
            }
            //console.log("3");
            str += "</td>";
        }
        str += "</tr>";
    }
    $output.html(`${str}</tbody>`);
}