$(document).ready(function () {
    $("#new-time").on("click", function (event) {
        event.preventDefault()
        const startTime = $("#start-time").val().trim();
        const endTime = $("#end-time").val().trim();
        const eTime = moment(endTime, "H:mma").format("H:mma");
        const sTime = moment(startTime, "H:mma").format("H:mma");
        const hourDifference = moment.utc(moment(eTime, "H:mma").diff(moment(sTime, "H:mma"))).format("H");
        const minDifference = moment.utc(moment(eTime, "H:mma").diff(moment(sTime, "H:mma"))).format("m");
        console.log(eTime)
        console.log(sTime)
        console.log(hourDifference);
        console.log(minDifference);
        $("#difference").empty().append(hourDifference + " Hours " + minDifference + " Minutes");
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

            $("#city-state").empty().prepend(cityState).slideDown;
            $("#region-time").empty().prepend(regionTime);
            $("#date").empty().prepend(regionDate);
            $("#time-diff").empty().prepend(timeDiff);
            $("#gmt").empty().append("<strong>"+ "GMT: "+"</strong>" + gmt);
            $("#time-zone").empty().prepend("<strong>" + timeZone + "</strong>");
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
    $("#unit-convert").on("click", function(event){
        event.preventDefault();
        const x = $("#unit-select1").val();
        const y = $("#unit-select2").val();
        const value = $("#unit-value").val().trim();
        console.log(x)
        console.log(y)
        console.log(value)
    });
});