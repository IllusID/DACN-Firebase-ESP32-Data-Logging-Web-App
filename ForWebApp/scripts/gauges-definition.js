// Create Temperature Gauge
function createTemperatureGauge() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-temperature',
        width: 120,
        height: 400,
        units: "Temperature C",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 40,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueDec: 2,
        valueInt: 2,
        majorTicks: [
            "0",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40"
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 30,
                "to": 40,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        colorBarProgress: "#CC2936",
        colorBarProgressEnd: "#049faa",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear",
        barWidth: 10,
    });
    return gauge;
}