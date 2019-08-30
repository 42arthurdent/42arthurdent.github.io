var size = 0;
var placement = 'point';

var style_nei2014_PA_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("total_emissions");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value > 0.000000 && value <= 222.200300) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 222.200300 && value <= 1066.000600) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 1066.000600 && value <= 3005.140000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 3005.140000 && value <= 6101.167500) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 6101.167500 && value <= 12391.054200) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 14.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 12391.054200 && value <= 18563.201600) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 17.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 18563.201600 && value <= 22117.976500) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 20.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
