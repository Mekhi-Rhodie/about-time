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
const database = firebase.database();
$(document).ready(function () {
    $("#new-time").on("click", function (event) {
        event.preventDefault()
        const startTime = $("#start-time").val().trim();
        const endTime = $("#end-time").val().trim();
        const eTime = moment(endTime, "H:mma").format("H:mm ");
        const sTime = moment(startTime, "H:mma").format("H:mm ");
        const hourDifference = moment.utc(moment(eTime, "H:mma").diff(moment(sTime, "H:mma"))).format("H");
        const minDifference = moment.utc(moment(eTime, "H:mma").diff(moment(sTime, "H:mma"))).format("m");
        $("#diff-output").empty().append();
        $("#diff-output").empty().append("<output class='output'>" + "<strong>" + "Start Time:" + "</strong>" + "   " + sTime + "       " + "<strong>" + "End Time:" + "</strong>" + "   " + eTime + "</output>" + "<br>" + "<output class='difference'>" + hourDifference + " Hours " + minDifference + " Minutes" + "</output>");
        //"<output class='difference'>" +  + "</output"
    });
    $("#search-button").on("click", function (event) {
        event.preventDefault()
        const search = $("#clock-search").val().trim();
        const region = $("#region-input").val()
        const URL = "http://vip.timezonedb.com/v2.1/get-time-zone?key=SGF912W64G0B&format=json&by=city&city=" + search + "&region=" + region + "&country=US"
        $.ajax({
            url: URL,
            method: "GET"
        }).then(function (response) {
            const regionTimeDate = response.zones[0].formatted;
            const regionTime = moment(regionTimeDate).format("h:mma");
            const regionDate = moment(regionTimeDate).format("MM/DD/YYYY");
            const timeZone = response.zones[0].abbreviation;
            const gmt = response.zones[0].gmtOffset;
            const currentTime = moment().format("h:mm");
            const timeDiff = moment.utc(moment(currentTime, "h:mma").diff(moment(regionTime, "h:mm a"))).format("h");
            const cityState = search + ", " + region;
            $("#city-state").empty().prepend(cityState);
            $("#region-time").empty().prepend(regionTime);
            $("#date").empty().prepend(regionDate);
            $("#time-diff").empty().prepend(timeDiff);
            $("#gmt").empty().append("<strong>" + "GMT: " + "</strong>" + gmt);
            $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>");
            //Add switch statement to print out full time zone phrase base on abbreveation.
        });
    });
    $("#event-submit").on("click", function (event) {
        event.preventDefault();
        const eventDescrip = $("#event-description").val().trim();
        const eventDate = $("#event-date").val().trim();
        const eventTime = $("#event-time").val().trim();
    });
});