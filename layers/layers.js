var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batticaloa_LU_1 = new ol.format.GeoJSON();
var features_Batticaloa_LU_1 = format_Batticaloa_LU_1.readFeatures(json_Batticaloa_LU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batticaloa_LU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batticaloa_LU_1.addFeatures(features_Batticaloa_LU_1);
var lyr_Batticaloa_LU_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batticaloa_LU_1, 
                style: style_Batticaloa_LU_1,
                popuplayertitle: "Batticaloa_LU",
                interactive: true,
    title: 'Batticaloa_LU<br />\
    <img src="styles/legend/Batticaloa_LU_1_0.png" /> Built Up Area<br />\
    <img src="styles/legend/Batticaloa_LU_1_1.png" /> Bund<br />\
    <img src="styles/legend/Batticaloa_LU_1_2.png" /> Canals - Wide<br />\
    <img src="styles/legend/Batticaloa_LU_1_3.png" /> Chena<br />\
    <img src="styles/legend/Batticaloa_LU_1_4.png" /> Coconut<br />\
    <img src="styles/legend/Batticaloa_LU_1_5.png" /> Ela<br />\
    <img src="styles/legend/Batticaloa_LU_1_6.png" /> Forest<br />\
    <img src="styles/legend/Batticaloa_LU_1_7.png" /> Garden<br />\
    <img src="styles/legend/Batticaloa_LU_1_8.png" /> Grassland<br />\
    <img src="styles/legend/Batticaloa_LU_1_9.png" /> Jeep or Cart Track<br />\
    <img src="styles/legend/Batticaloa_LU_1_10.png" /> Lagoon<br />\
    <img src="styles/legend/Batticaloa_LU_1_11.png" /> Lakes<br />\
    <img src="styles/legend/Batticaloa_LU_1_12.png" /> Main Road - Class A<br />\
    <img src="styles/legend/Batticaloa_LU_1_13.png" /> Marsh<br />\
    <img src="styles/legend/Batticaloa_LU_1_14.png" /> Minor Road<br />\
    <img src="styles/legend/Batticaloa_LU_1_15.png" /> Other Plantation<br />\
    <img src="styles/legend/Batticaloa_LU_1_16.png" /> Paddy<br />\
    <img src="styles/legend/Batticaloa_LU_1_17.png" /> River<br />\
    <img src="styles/legend/Batticaloa_LU_1_18.png" /> Rock<br />\
    <img src="styles/legend/Batticaloa_LU_1_19.png" /> Sand or Beach<br />\
    <img src="styles/legend/Batticaloa_LU_1_20.png" /> Scrub<br />\
    <img src="styles/legend/Batticaloa_LU_1_21.png" /> Sea<br />\
    <img src="styles/legend/Batticaloa_LU_1_22.png" /> Tank with Bund - Abandoned<br />\
    <img src="styles/legend/Batticaloa_LU_1_23.png" /> Tank with Bund - Working<br />\
    <img src="styles/legend/Batticaloa_LU_1_24.png" /> Water Hole<br />\
    <img src="styles/legend/Batticaloa_LU_1_25.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Batticaloa_LU_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Batticaloa_LU_1];
lyr_Batticaloa_LU_1.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'AREA_HA': 'AREA_HA', });
lyr_Batticaloa_LU_1.set('fieldImages', {'ID': 'Range', 'NAME': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Batticaloa_LU_1.set('fieldLabels', {'ID': 'inline label - always visible', 'NAME': 'inline label - always visible', 'DESCRIPTIO': 'inline label - always visible', 'AREA_HA': 'inline label - always visible', });
lyr_Batticaloa_LU_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});