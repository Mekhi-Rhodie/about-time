var firebaseConfig = {
    apiKey: "AIzaSyB4S-faxpqmTp6ZQesvZK_dHiON0NfmMeY",
    authDomain: "about-time-a5be6.firebaseapp.com",
    databaseURL: "https://about-time-a5be6.firebaseio.com",
    projectId: "about-time-a5be6",
    storageBucket: "about-time-a5be6.appspot.com",
    messagingSenderId: "476425103317",
    appId: "1:476425103317:web:c11bbe158d69c326317f5c",
    measurementId: "G-9VXQTSBBQ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();
const cTime = moment().format("H:mm")
const cDate = moment().format("YYYY-MM-DD")
const currentDateTime = cTime + " " + cDate
console.log(currentDateTime)
const currentYear = moment().format("YYYY");

$(document).ready(function () {
    $("#new-time").on("click", function (event) {
        event.preventDefault()
        const startTime = $("#start-time").val().trim();
        const endTime = $("#end-time").val().trim();
        const eTime = moment(endTime, "H:mma").format("H:mm ");
        const sTime = moment(startTime, "H:mma").format("H:mm ");
        const hourDifference = moment.utc(moment(eTime, "H:mma").diff(moment(sTime, "H:mma"))).format("H");
        const minDifference = moment.utc(moment(eTime, "H:mma").diff(moment(sTime, "H:mma"))).format("m");
        $("#diff-output").slideDown(900).empty().append("<p class='timeDiff'>" + "<strong>" + "Start Time:" + "</strong>" + "   " + startTime + " " + "<strong>" + "End Time:" + "</strong>" + "   " + endTime + "</p>" +
            "<br>" + "<p class='timeDiff'>" + hourDifference + " Hours " + minDifference + " Minutes" + "</p>");
        //"<output class='difference'>" +  + "</output>"
    });
    $("#search-button").on("click", function (event) {
        event.preventDefault()
        const search = $("#clock-search").val().trim();
        const region = $("#region-input").val()
        const URL = "https://vip.timezonedb.com/v2.1/get-time-zone?key=SGF912W64G0B&format=json&by=city&city=" + search + "&region=" + region + "&country=US"
        $.ajax({
            url: URL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            const regionTimeDate = response.zones[0].formatted;
            const regionTime = moment(regionTimeDate).format("h:mm A");
            const regionDate = moment(regionTimeDate).format("MM/DD/YYYY");
            const timeZone = response.zones[0].abbreviation;
            const gmt = response.zones[0].gmtOffset;
            const currentTime = moment().format("h:mm");
            const timeDiff = moment.utc(moment(currentTime, "h:mma").diff(moment(regionTime, "h:mm a"))).format("h");
            const cityState = search + ", " + region;
            $("#city-state").empty().prepend(cityState);
            $("#region-time").empty().prepend(regionTime);
            $("#date").empty().prepend(regionDate);
            $("#time-diff").empty().prepend("-" + timeDiff);
            $("#gmt").empty().append("<strong>" + "GMT: " + "</strong>" + gmt);
            switch (timeZone) {
                case "MST":
                    $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>" + ":  " + "Mountain Standard Time");
                    break;
                case "PST":
                    $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>" + ":  " + "Pacific Standard Time");
                    break;
                case "EST":
                    $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>" + ":  " + "Eastern Standard Time");
                    break;
                case "CST":
                    $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>" + ":  " + "Central Standard Time");
                    break;
                case "AKST":
                    $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>" + ":  " + "Alaskan Standard Time");
                    break;
                case "HST":
                    $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>" + ":  " + "Hawaii-ALeutian Standard Time");
                    break;
                default:
                    $("#time-zone").empty().prepend("<strong>" + "WRONG!!!" + "</strong>");
            }
        });
    });
    auth.onAuthStateChanged(function (user) {
        $("#event-submit").on("click", function (event) {
            event.preventDefault();
            const eventDescrip = $("#event-description").val().trim();
            const eventDate = $("#event-date").val().trim();
            const eventTime = $("#event-time").val().trim();
            db.collection("users").doc(user.email).set({
                event: eventDescrip,
                eventTime: eventTime + " " + eventDate
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        });
    });
    const timeDifference = $("#time-difference").css("position", "value".style)
    console.log(timeDifference)
});

$("#time-difference").draggable().resizable({
    minHeight: 245,
    minWidth: 710
});
$("#world-clock").draggable().resizable({
    minHeight: 275,
    minWidth: 710
});
$("#conversion").draggable().resizable({
    minHeight: 408,
    minWidth: 480
});
$("#events").draggable().resizable({
    minHeight: 408,
    minWidth: 890
});

auth.onAuthStateChanged(function (user) {
    const eventRef = db.collection("users").doc(user.email);
    eventRef.get().then(function (doc) {
        const event = doc.data().event;
        const eventDataTime = doc.data().eventTime;
        const message = "Sorry, you currently have no events scheduled for today."
        if (doc.exists) {
            console.log(event);
            console.log(eventDataTime)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        if (eventDataTime === currentDateTime) {
            $("#event-output").append("<output class='output'>" + event + "</output>" + "<br>")
            $("#event-output").append("<output class='output'>" + eventDataTime + "</output>")
        } else {//(eventDataTime !== currentDateTime){
            $("#event-output").append("<p class='output'>" + message + "</p>")
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
});
auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("User is currently signed-in!")
        const email = user.email;
        const uid = user.uid;
        const providerData = user.providerData;
        console.log(email);
        console.log(uid);
        console.log(providerData);
    } else {
        console.log("No user is currently signed-in")
    }
    $("#log-out").on("click", function (event) {
        firebase.auth().signOut().then(function () {
            window.location.replace("/")
            console.log("Sign-out successful.")
        }).catch(function (error) {
            console.log(error)
        });
    });
});