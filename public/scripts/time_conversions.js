function valueAppend(unit) {
    $("#unit-output").append(unit)
};
/*$("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "*" + "  " + "10" + "</p>");*/
//value * 10
function millenniumConversion(x, y, value) {
    switch (x === "Millennium") {
        case y === "Millennium":
            console.log(parseInt(value));
            break;
        case y === "Century":
            //$("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "=" + y +"</p>");
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 10 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "10" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 100 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "100" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 1000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "1000" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 12000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "12000" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 52142 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "52142" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 365000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "365000" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 8760000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "8760000" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 525600000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "525600000" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 31536000000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "31536000000" + "</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 31536000000000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "31536000000000" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    }
};
function centuryConversion(x, y, value) {
    switch (x === "Century") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 10 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "10" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>" + parseInt(value) + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 10 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "10" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 100 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "100" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 1200 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "1200" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 5214 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "5214" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 36500 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "36500" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 876000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "876000" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 52560000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "52560000" + "</p>");
            console.log();
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 3153600000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "3153600000" + "</p>");
            console.log();
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 3153600000000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "3153600000000" + "</p>");
            console.log();
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};

function decadeConversion(x, y, value) {
    switch (x === "Decade") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 100 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "100" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 10 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "10" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + parseInt(value) + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 10 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "10" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 120 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "120" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 521 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "521" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 3650 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "3650" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 87600 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "87600" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 5256000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "5256000" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 315360000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "315360000" + "</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 31536000000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "31536000000" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit" + "</p>");;
    };
};
function yearConversion(x, y, value) {
    switch (x === "Year") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 1000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "1000" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 100 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "100" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 10 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "10" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + parseInt(value) + "</p>");
            console.log();
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 12 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "12" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 52 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "52" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 365 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "365" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 8760 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "8760" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 525600 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "525600" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 31536000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "31536000" + "</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 31536000000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "31536000000" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};
function monthConversion(x, y, value) {
    switch (x === "Month") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 11999 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "11999" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 1199 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "1199" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 120 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "120" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 12 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "12" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 4.34 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "4.34" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 30.41 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "30.41" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 730 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "730" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 43800 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "43800" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 2.628e+6 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "2.628+6" + "</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 2.628e+9 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "2.628+9" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};

function weekConversion(x, y, value) {
    switch (x === "Week") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 52142 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "52142" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 5214.28 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "5214.28" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 521.42 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "521.42" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 52.14 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "52.14" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 4.34 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "4.34" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 7 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "7" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 168 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "168" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 10080 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "10080" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 604800 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "604800" + "</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 6.048e+8 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "6.048+8" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};

function dayConversion(x, y, value) {
    switch (x === "Day") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 365000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "365000" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 36500 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "36500" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 3650 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "3650" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 365 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "365" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 30.41 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "30.41" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 7 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "7" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 24 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "24" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 1440 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "1440" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 86400 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "86400" + "</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 8.64e+7 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "8.64e+7" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};

function hourConversion(x, y, value) {
    switch (x === "Hour") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 8.76e+6 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "8.76e+6" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 876000 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "876000" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 87600 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "87600" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 8760 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "8760" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 730 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "730" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 168 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "168" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value / 24 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "/" + "  " + "224" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>" + value + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 60 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "60" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 3600 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "3600" + "</p>");
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "  " + x + "  " + "=" + "  " + value * 3.6e+6 + "  " + y + "</p>" +
                "<br>" + "<p class='output'>" + "Formula  =" + "   " + value + "  " + "*" + "  " + "3.6e+6" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};
function minuteConversion(x, y, value) {
    switch (x === "Minute") {
        case y === "Millennium":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 5.256e+8  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "5.256e+8" + "</p>");
            break;
        case y === "Century":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 5.256e+7  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "5.256e+7" + "</p>");
            break;
        case y === "Decade":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +   value / 5.256e+6  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "5.256e+6" + "</p>");
            break;
        case y === "Year":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 525600   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "525600" + "</p>");
            break;
        case y === "Month":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 43800.04  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "43800.04" + "</p>");
            break;
        case y === "Week":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 10080   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "10080" + "</p>");
            break;
        case y === "Day":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +   value / 1440 + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "1440" + "</p>");
            break;
        case y === "Hour":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 60  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "60" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>" + value + "</p>");
            break;
        case y === "Second":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value * 1000  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "*" + "  " + "1000" + "</p>");
            break;
        case y === "Millisecond":
        $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value * 60000   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "*" + "  " + "60000" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};
function secondConversion(x, y, value) {
    switch (x === "Second") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3.154e+10   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+10" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3.154e+9  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+9" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3.154e+8   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+8" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3.154e+7  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+7" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 2.628e+6   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "2.628e+6" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 604800  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "604800" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 86400   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "86400" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3600  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3600" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 60 + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "60" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>" + value + "</p>")
            break;
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value * 1000 + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "*" + "  " + "1000" + "</p>");
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};
function millisecondConversion(x, y, value) {
    switch (x === "Millisecond") {
        case y === "Millennium":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3.154e+13  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+13" + "</p>");
            break;
        case y === "Century":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3.154e+12   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+12" + "</p>");
            break;
        case y === "Decade":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " + value / 3.154e+11  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+11" + "</p>");
            break;
        case y === "Year":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 3.154e+10   + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.154e+10" + "</p>");
            break;
        case y === "Month":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 2.628e+9 + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "2.628e+9" + "</p>");
            break;
        case y === "Week":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +   value / 6.048e+8  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "6.048e+8" + "</p>");
            break;
        case y === "Day":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +   value / 8.64e+7  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "8.64e+7" + "</p>");
            break;
        case y === "Hour":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 3.6e+6  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "3.6e+6" + "</p>");
            break;
        case y === "Minute":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 60000  + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "60000" + "</p>");
            break;
        case y === "Second":
            $("#unitOutput").empty().append("<p class='output'>"+ value + "  " + x + "  " + "=" + "  " +  value / 1000 + "  " + y +"</p>" + 
            "<br>" + "<p class='output'>" +"Formula  =" + "   " + value + "  " + "/" + "  " + "1000" + "</p>");
            break
        case y === "Millisecond":
            $("#unitOutput").empty().append("<p class='output'>" + value + "</p>")
            break;
        default:
            $("#unitOutput").empty().append("<p class='output'>" + "Please input a valid unit!" + "</p>");
    };
};
$("#unit-convert").on("click", function (event) {
    event.preventDefault();
    const x = $("#unit-1").val();
    const y = $("#unit-2").val();
    const value = $("#unit-value").val().trim();
    switch (x) {
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