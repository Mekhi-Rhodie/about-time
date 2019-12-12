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
            console.log(value * 4.34);
            break;
        case y === "Day":
            console.log(value * 30.41);
            break;
        case y === "Hour":
            console.log(value * 730);
            break;
        case y === "Minute":
            console.log(value * 43800);
            break;
        case y === "Second":
            console.log(value * 2628000);
            break;
        case y === "Millisecond":
            console.log(value * 2628000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function weekConversion(x, y, value) {
    switch (x === "Week") {
        case y === "Millennium":
            console.log(value / 100000);
            break;
        case y === "Century":
            console.log(value / 10000);
            break;
        case y === "Decade":
            console.log(value / 1000);
            break;
        case y === "Year":
            console.log(value / 100);
            break;
        case y === "Month":
            console.log(value / 10);
            break;
        case y === "Week":
            console.log(value * 4.34);
            break;
        case y === "Day":
            console.log(value * 30.41);
            break;
        case y === "Hour":
            console.log(value * 730);
            break;
        case y === "Minute":
            console.log(value * 43800);
            break;
        case y === "Second":
            console.log(value * 2628000);
            break;
        case y === "Millisecond":
            console.log(value * 2628000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function dayConversion(x, y, value) {
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
            console.log(value * 4.34);
            break;
        case y === "Day":
            console.log(value * 30.41);
            break;
        case y === "Hour":
            console.log(value * 730);
            break;
        case y === "Minute":
            console.log(value * 43800);
            break;
        case y === "Second":
            console.log(value * 2628000);
            break;
        case y === "Millisecond":
            console.log(value * 2628000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function hourConversion(x, y, value) {
    switch (x === "Week") {
        case y === "Millennium":
            console.log(value / 100000);
            break;
        case y === "Century":
            console.log(value / 10000);
            break;
        case y === "Decade":
            console.log(value / 1000);
            break;
        case y === "Year":
            console.log(value / 100);
            break;
        case y === "Month":
            console.log(value / 10);
            break;
        case y === "Week":
            console.log(value * 4.34);
            break;
        case y === "Day":
            console.log(value * 30.41);
            break;
        case y === "Hour":
            console.log(value * 730);
            break;
        case y === "Minute":
            console.log(value * 43800);
            break;
        case y === "Second":
            console.log(value * 2628000);
            break;
        case y === "Millisecond":
            console.log(value * 2628000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function minuteConversion(x, y, value) {
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
            console.log(value * 4.34);
            break;
        case y === "Day":
            console.log(value * 30.41);
            break;
        case y === "Hour":
            console.log(value * 730);
            break;
        case y === "Minute":
            console.log(value * 43800);
            break;
        case y === "Second":
            console.log(value * 2628000);
            break;
        case y === "Millisecond":
            console.log(value * 2628000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function secondConversion(x, y, value) {
    switch (x === "Week") {
        case y === "Millennium":
            console.log(value / 100000);
            break;
        case y === "Century":
            console.log(value / 10000);
            break;
        case y === "Decade":
            console.log(value / 1000);
            break;
        case y === "Year":
            console.log(value / 100);
            break;
        case y === "Month":
            console.log(value / 10);
            break;
        case y === "Week":
            console.log(value * 4.34);
            break;
        case y === "Day":
            console.log(value * 30.41);
            break;
        case y === "Hour":
            console.log(value * 730);
            break;
        case y === "Minute":
            console.log(value * 43800);
            break;
        case y === "Second":
            console.log(value * 2628000);
            break;
        case y === "Millisecond":
            console.log(value * 2628000000);
            break;
        default:
            console.log("It didn't work");
    };
};
function millisecondConversion(x, y, value) {
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
            console.log(value * 4.34);
            break;
        case y === "Day":
            console.log(value * 30.41);
            break;
        case y === "Hour":
            console.log(value * 730);
            break;
        case y === "Minute":
            console.log(value * 43800);
            break;
        case y === "Second":
            console.log(value * 2628000);
            break;
        case y === "Millisecond":
            console.log(value * 2628000000);
            break;
        default:
            console.log("It didn't work");
    };
};
$("#unit-convert").on("click", function (event) {
    event.preventDefault();
    const x = $("#unit-select1").val();
    const y = $("#unit-select2").val();
    const value = $("#unit-value").val().trim();
    //millenniumConversion(x, y, value);
    //decadeConversion(x, y, value);
    //centuryConversion(x, y, value);
    //yearConversion(x, y, value);
    monthConversion(x, y, value);
    //weekConversion(x, y, value);
    //dayConversion(x, y, value);
    //hourConversion(x, y, value);
    //minuteConversion(x, y, value);
    //secondConversion(x, y, value);
    //millisecondConversion(x, y, value);
});

// Put equation at the buttom of screen.