function valueAppend(unit){
    $("#unit-output").append(unit)
};


function millenniumConversion(x, y, value) {
    switch (x === "Millennium") {
        case y === "Millennium":
            console.log(parseInt(value));
            break;
        case y === "Century":
            //$("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "=" + y +"</p>");
            $("#unitOutput").empty().append("<p class='output'>"+ value * 10 +"</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 100 +"</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 1000 +"</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 12000 +"</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 52142.85 +"</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 365000 +"</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 8760000 +"</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 525600000 +"</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 31536000000 +"</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 31536000000000 +"</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>"+ "Please input a valid unit!" +"</p>");
    }
};
function centuryConversion(x, y, value) {
    switch (x === "Century") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 10 +"</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ parseInt(value) +"</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 10 +"</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 100 +"</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 1200 +"</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 5214.28 +"</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 36500 +"</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 876000 +"</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 52560000 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 3153600000 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 3153600000000 +"</p>");
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};

function decadeConversion(x, y, value) {
    switch (x === "Decade") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 100 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 10 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ parseInt(value) +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 10 +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 120 +"</p>");
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 521.42 +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 3650 +"</p>");
            console.log();
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 87600 +"</p>");
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 5256000 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 315360000 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 31536000000 +"</p>");
            console.log(0);
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>"+ "Please input a valid unit" +"</p>");;
    };
};
function yearConversion(x, y, value) {
    switch (x === "Year") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 1000 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 100 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 10 +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ parseInt(value) +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 12 +"</p>");
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 52.14 +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 365 +"</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 8760 +"</p>");
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 525600 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 31536000 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 31536000000 +"</p>");
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};
function monthConversion(x, y, value) {
    switch (x === "Month") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 11999.987 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 1199.999 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 120 +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 12 +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value +"</p>");
            console.log(value);
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 4.345 +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 30.417 +"</p>");
            console.log();
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 730.001 +"</p>");
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 43800.048 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 2.628e+6 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value *  2.628e+9 +"</p>");
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};

function weekConversion(x, y, value) {
    switch (x === "Week") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 52142.857 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 5214.286 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 521.429 +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 52.143 +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 4.345 +"</p>");
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 7 +"</p>");
            console.log();
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 168 +"</p>");
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 10080 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 604800 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 6.048e+8 +"</p>");
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};

function dayConversion(x, y, value) {
    switch (x === "Day") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 365000 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 36500 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3650 +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 365 +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 30.417 +"</p>");
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 7 +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value +"</p>");
            console.log(value);
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 24 +"</p>");
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 1440 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 86400 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 8.64e+7 +"</p>");
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};

function hourConversion(x, y, value) {
    switch (x === "Hour") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 8.76e+6 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 876000 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 87600 +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 8760 +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 730.001 +"</p>");
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 168 +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 24 +"</p>");
            console.log();
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value +"</p>");
            console.log(value);
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 60 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 3600 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value *  3.6e+6 +"</p>");
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};
function minuteConversion(x, y, value) {
    switch (x === "Minute") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 5.256e+8 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 5.256e+7 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 5.256e+6 +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 525600 +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 43800.048 +"</p>");
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 10080 +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 1440 +"</p>");
            console.log();
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 60 +"</p>");
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value +"</p>"); 
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 1000 +"</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 60000 +"</p>");
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};
function secondConversion(x, y, value) {
    switch (x === "Second") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+10 +"</p>");
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+9 +"</p>");
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+8 +"</p>");
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+7 +"</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 2.628e+6 +"</p>");
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 604800 +"</p>");
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 86400 +"</p>");
            console.log();
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3600 +"</p>");
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 60 +"</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value +"</p>")
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value * 1000 +"</p>")
            console.log();
            break;
        default:
            console.log("It didn't work");
    };
};
function millisecondConversion(x, y, value) {
    switch (x === "Month") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+13 +"</p>")
            console.log();
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+12 +"</p>")
            console.log();
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+11 +"</p>")
            console.log();
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.154e+10 +"</p>")
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 2.628e+9 +"</p>")
            console.log();
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 6.048e+8 +"</p>")
            console.log();
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 8.64e+7 +"</p>")
            console.log();
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 3.6e+6 +"</p>")
            console.log();
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 60000 +"</p>")
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value / 1000 +"</p>")
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value +"</p>")
            console.log(value);
            break;
        default:
            console.log("It didn't work");
    };
};
$("#unit-convert").on("click", function (event) {
    event.preventDefault();
    const x = $("#unit-1").val();
    const y = $("#unit-2").val();
    const value = $("#unit-value").val().trim();
    switch(x){
        case "Millennium":
            millenniumConversion(x, y, value);
            break;
        case "Century":
            centuryConversion(x, y, value);
            break;
        case "Decade":
            decadeConversion(x, y, value);
            break;
        case "Year":
            yearConversion(x, y, value);
            break;
        case "Month":
            monthConversion(x, y, value);
            break;
        case "Week":
            weekConversion(x, y, value);
            break;
        case "Day":
            dayConversion(x, y, value);
            break;
        case "Hour":
            hourConversion(x, y, value);
            break;
        case "Minute":
            minuteConversion(x, y, value);
            break;
        case "Second":
            secondConversion(x, y, value);
            break;
        case "Millisecond":
            millisecondConversion(x, y, value);
            break;
        default:
            console.log("Doesn't Work!")
    }
});

// Put equation at the buttom of screen.