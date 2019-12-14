function millenniumConversion(x, y, value) {
    switch (x === "Millennium") {
        case y === "Millennium":
            console.log(parseInt(value));
            break;
        case y === "Century":
            console.log(value * 10);
            break;
        case y === "Decade":
            console.log(value * 100);
            break;
        case y === "Year":
            console.log(value * 1000);
            break;
        case y === "Month":
            console.log(value * 12000);
            break;
        case y === "Week":
            console.log(value * 52142.85);
            break;
        case y === "Day":
            console.log(value * 365000);
            break;
        case y === "Hour":
            console.log(value * 8760000);
            break;
        case y === "Minute":
            console.log(value * 525600000);
            break;
        case y === "Second":
            console.log(value * 31536000000);
            break;
        case y === "Millisecond":
            console.log(value * 31536000000000);
            break;
        default:
            console.log("It didn't work");
    }
};
function centuryConversion(x, y, value) {
    switch (x === "Century") {
        case y === "Millennium":
            console.log(value / 10);
            break;
        case y === "Century":
            console.log(parseInt(value));
            break;
        case y === "Decade":
            console.log(value * 10);
            break;
        case y === "Year":
            console.log(value * 100);
            break;
        case y === "Month":
            console.log(value * 1200);
            break;
        case y === "Week":
            console.log(value * 5214.28);
            break;
        case y === "Day":
            console.log(value * 36500);
            break;
        case y === "Hour":
            console.log(value * 876000);
            break;
        case y === "Minute":
            console.log(value * 52560000);
            break;
        case y === "Second":
            console.log(value * 3153600000);
            break;
        case y === "Millisecond":
            console.log(value * 3153600000000);
            break;
        default:
            console.log("It didn't work");
    };
};

function decadeConversion(x, y, value) {
    switch (x === "Decade") {
        case y === "Millennium":
            console.log(value / 100);
            break;
        case y === "Century":
            console.log(value / 10);
            break;
        case y === "Decade":
            console.log(parseInt(value));
            break;
        case y === "Year":
            console.log(value * 10);
            break;
        case y === "Month":
            console.log(value * 120);
            break;
        case y === "Week":
            console.log(value * 521.42);
            break;
        case y === "Day":
            console.log(value * 3650);
            break;
        case y === "Hour":
            console.log(value * 87600);
            break;
        case y === "Minute":
            console.log(value * 5256000);
            break;
        case y === "Second":
            console.log(value * 315360000);
            break;
        case y === "Millisecond":
            console.log(value * 315360000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function yearConversion(x, y, value) {
    switch (x === "Year") {
        case y === "Millennium":
            console.log(value / 1000);
            break;
        case y === "Century":
            console.log(value / 100);
            break;
        case y === "Decade":
            console.log(value / 10);
            break;
        case y === "Year":
            console.log(parseInt(value));
            break;
        case y === "Month":
            console.log(value * 12);
            break;
        case y === "Week":
            console.log(value * 52.14);
            break;
        case y === "Day":
            console.log(value * 365);
            break;
        case y === "Hour":
            console.log(value * 8760);
            break;
        case y === "Minute":
            console.log(value * 525600);
            break;
        case y === "Second":
            console.log(value * 31536000);
            break;
        case y === "Millisecond":
            console.log(value * 31536000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function monthConversion(x, y, value) {
    switch (x === "Month") {
        case y === "Millennium":
            console.log(value / 11999.987);
            break;
        case y === "Century":
            console.log(value / 1199.999);
            break;
        case y === "Decade":
            console.log(value / 120);
            break;
        case y === "Year":
            console.log(value / 12);
            break;
        case y === "Month":
            console.log(value);
            break;
        case y === "Week":
            console.log(value * 4.345);
            break;
        case y === "Day":
            console.log(value * 30.417);
            break;
        case y === "Hour":
            console.log(value * 730.001);
            break;
        case y === "Minute":
            console.log(value * 43800.048);
            break;
        case y === "Second":
            console.log(value * 2.628e+6);
            break;
        case y === "Millisecond":
            console.log(value *  2.628e+9);
            break;
        default:
            console.log("It didn't work");
    };
};

function weekConversion(x, y, value) {
    switch (x === "Week") {
        case y === "Millennium":
            console.log(value / 52142.857);
            break;
        case y === "Century":
            console.log(value / 5214.286);
            break;
        case y === "Decade":
            console.log(value / 521.429);
            break;
        case y === "Year":
            console.log(value / 52.143);
            break;
        case y === "Month":
            console.log(value / 4.345);
            break;
        case y === "Week":
            console.log(value);
            break;
        case y === "Day":
            console.log(value * 7);
            break;
        case y === "Hour":
            console.log(value * 168);
            break;
        case y === "Minute":
            console.log(value * 10080);
            break;
        case y === "Second":
            console.log(value * 604800);
            break;
        case y === "Millisecond":
            console.log(value * 6.048e+8);
            break;
        default:
            console.log("It didn't work");
    };
};

function dayConversion(x, y, value) {
    switch (x === "Day") {
        case y === "Millennium":
            console.log(value / 365000);
            break;
        case y === "Century":
            console.log(value / 36500);
            break;
        case y === "Decade":
            console.log(value / 3650);
            break;
        case y === "Year":
            console.log(value / 365);
            break;
        case y === "Month":
            console.log(value / 30.417);
            break;
        case y === "Week":
            console.log(value / 7);
            break;
        case y === "Day":
            console.log(value);
            break;
        case y === "Hour":
            console.log(value * 24);
            break;
        case y === "Minute":
            console.log(value * 1440);
            break;
        case y === "Second":
            console.log(value * 86400);
            break;
        case y === "Millisecond":
            console.log(value * 8.64e+7);
            break;
        default:
            console.log("It didn't work");
    };
};

function hourConversion(x, y, value) {
    switch (x === "Hour") {
        case y === "Millennium":
            console.log(value / 8.76e+6);
            break;
        case y === "Century":
            console.log(value / 876000);
            break;
        case y === "Decade":
            console.log(value / 87600);
            break;
        case y === "Year":
            console.log(value / 8760);
            break;
        case y === "Month":
            console.log(value / 730.001);
            break;
        case y === "Week":
            console.log(value / 168);
            break;
        case y === "Day":
            console.log(value / 24);
            break;
        case y === "Hour":
            console.log(value);
            break;
        case y === "Minute":
            console.log(value * 60);
            break;
        case y === "Second":
            console.log(value * 3600);
            break;
        case y === "Millisecond":
            console.log(value *  3.6e+6);
            break;
        default:
            console.log("It didn't work");
    };
};
function minuteConversion(x, y, value) {
    switch (x === "Minute") {
        case y === "Millennium":
            console.log(value / 5.256e+8);
            break;
        case y === "Century":
            console.log(value / 5.256e+7);
            break;
        case y === "Decade":
            console.log(value / 5.256e+6);
            break;
        case y === "Year":
            console.log(value / 525600);
            break;
        case y === "Month":
            console.log(value / 43800.048);
            break;
        case y === "Week":
            console.log(value / 10080);
            break;
        case y === "Day":
            console.log(value / 1440);
            break;
        case y === "Hour":
            console.log(value / 60);
            break;
        case y === "Minute":
            console.log(value);
            break;
        case y === "Second":
            console.log(value * 1000);
            break;
        case y === "Millisecond":
            console.log(value * 60000);
            break;
        default:
            console.log("It didn't work");
    };
};
function secondConversion(x, y, value) {
    switch (x === "Second") {
        case y === "Millennium":
            console.log(value / 3.154e+10);
            break;
        case y === "Century":
            console.log(value / 3.154e+9);
            break;
        case y === "Decade":
            console.log(value / 3.154e+8);
            break;
        case y === "Year":
            console.log(value / 3.154e+7);
            break;
        case y === "Month":
            console.log(value / 2.628e+6);
            break;
        case y === "Week":
            console.log(value / 604800);
            break;
        case y === "Day":
            console.log(value / 86400);
            break;
        case y === "Hour":
            console.log(value / 3600);
            break;
        case y === "Minute":
            console.log(value / 60);
            break;
        case y === "Second":
            console.log(value);
            break;
        case y === "Millisecond":
            console.log(value * 1000);
            break;
        default:
            console.log("It didn't work");
    };
};
function millisecondConversion(x, y, value) {
    switch (x === "Month") {
        case y === "Millennium":
            console.log(value / 3.154e+13);
            break;
        case y === "Century":
            console.log(value / 3.154e+12);
            break;
        case y === "Decade":
            console.log(value / 3.154e+11);
            break;
        case y === "Year":
            console.log(value / 3.154e+10);
            break;
        case y === "Month":
            console.log(value / 2.628e+9);
            break;
        case y === "Week":
            console.log(value / 6.048e+8);
            break;
        case y === "Day":
            console.log(value / 8.64e+7);
            break;
        case y === "Hour":
            console.log(value / 3.6e+6);
            break;
        case y === "Minute":
            console.log(value / 60000);
            break;
        case y === "Second":
            console.log(value / 1000);
            break;
        case y === "Millisecond":
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