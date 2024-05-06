function main() {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/LayerList",
		"esri/widgets/Print",
        "dojo/domReady!"
      ], function(Map, MapView, FeatureLayer, LayerList) {

    var map = new Map({
        basemap: "streets"
    });
    
    var view = new MapView({
        container: "mapid",  
        map: map,               
        zoom: 13,
        center: [-96.336335, 30.616988]
        });

    var layerList = new LayerList({
        view: view
    });
    view.ui.add(layerList, {
        position: "top-right"
    })

    var constructionTemplate = {
        title: "Construction",
        content: "<b>Project Name:</b> {Name}<br><b>Start Date:</b> {StartDate}<br><b>End Date:</b" +
        "> {EndDate}",
        fieldInfos: [{
            fieldName: "StartDate",
            format: {
                dateFormat: "long-date"
            }
        }, {
            fieldName: "EndDate",
            format: {
                dateFormat: "long-date"
            }
        }]
		
    };

    const constructionLayer = new FeatureLayer({
        url: "https://gis.tamu.edu/arcgis/rest/services/FCOR/Construction_2018/MapServer/0",
        title: "Construction",
        popupTemplate: constructionTemplate
    })
    map.add(constructionLayer);	
    });
	var url = "https://gis.tamu.edu/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";
	var print = new Print({
		view: view,
		printServiceUrl: url
	});
	view.ui.add(print, {
		position: "top-left"
	});
}