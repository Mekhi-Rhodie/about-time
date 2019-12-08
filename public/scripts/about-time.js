$(document).ready(function () {
    $("#new-time").on("click", function (event) {
        event.preventDefault()
        const startTime = $("#start-time").val().trim();
        const endTime = $("#end-time").val().trim();
        const eTime = moment(endTime, "hh:mma").format("hh:mma");
        const sTime = moment(startTime, "hh:mma").format("hh:mma");
        const difference = moment.utc(moment(sTime, "h:mma").diff(moment(eTime, "h:mma"))).format("h:mm");
        console.log(difference);
        $("#difference").empty().append(difference)
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
            const regionTime = moment(regionTimeDate).format("h:mm");
            const regionDate = moment(regionTimeDate).format("DD-MM-YYYY");
            const timeZone = response.zones[0].abbreviation;
            const gmt = response.zones[0].gmtOffset;
            const currentTime = moment().format("h:mm");
            const timeDiff = moment.utc(moment(currentTime, "h:mma").diff(moment(regionTime, "h:mma"))).format("h");
            const cityState =  search + ", " + region;
//<------------------------------------------------------------------------------------------------------------------------------------------------------------------>

            console.log(regionDate);
            console.log(regionTime);
            console.log(timeZone);
            console.log(gmt);
            console.log(search);
            console.log(region);
            console.log(timeDiff);
            console.log(currentTime);
            console.log(cityState);
//<------------------------------------------------------------------------------------------------------------------------------------------------------------------>

            $("#city-state").empty().prepend(cityState);
            $("#region-time").empty().prepend(regionTime);
            $("#date").empty().prepend(regionDate);
            $("#time-diff").empty().prepend(timeDiff);
            $("#gmt").empty().append(gmt);
            $("#time-zone").empty().prepend(timeZone);
            //Add switch statement to print out full time zone phrase base on abbreveation.
        });
    });
    $("#event-submit").on("click", function(event){
        event.preventDefault();
        const eventDescrip = $("#event-description").val().trim();
        const eventDate = $("#event-date").val().trim();
        const eventTime =$("#event-time").val().trim();
        //---------------------------------------------------------------//
        console.log(eventDescrip);
        console.log(eventDate);
        console.log(eventTime);
    }); 
    
}); 