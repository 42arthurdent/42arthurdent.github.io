var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_2014v2facilities_0 = new ol.format.GeoJSON();
var features_2014v2facilities_0 = format_2014v2facilities_0.readFeatures(json_2014v2facilities_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014v2facilities_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2014v2facilities_0.addFeatures(features_2014v2facilities_0);var lyr_2014v2facilities_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2014v2facilities_0, 
                style: style_2014v2facilities_0,
    title: '2014v2facilities<br />\
    <img src="styles/legend/2014v2facilities_0_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/2014v2facilities_0_1.png" />  0.01 - 4424 <br />\
    <img src="styles/legend/2014v2facilities_0_2.png" />  4424 - 8847 <br />\
    <img src="styles/legend/2014v2facilities_0_3.png" />  8847 - 13271 <br />\
    <img src="styles/legend/2014v2facilities_0_4.png" />  13271 - 17694 <br />\
    <img src="styles/legend/2014v2facilities_0_5.png" />  17694 - 22118 <br />'
        });

lyr_2014v2facilities_0.setVisible(true);
var layersList = [baseLayer,lyr_2014v2facilities_0];
lyr_2014v2facilities_0.set('fieldAliases', {'eis_facility_site_id': 'eis_facility_site_id', 'program_system_code': 'program_system_code', 'alt_agency_id': 'alt_agency_id', 'region_cd': 'region_cd', 'st_usps_cd': 'st_usps_cd', 'county_name': 'county_name', 'state_and_county_fips_code': 'state_and_county_fips_code', 'tribal_name': 'tribal_name', 'facility_site_name': 'facility_site_name', 'naics_cd': 'naics_cd', 'naics_description': 'naics_description', 'facility_source_type': 'facility_source_type', 'latitude_msr': 'latitude_msr', 'longitude_msr': 'longitude_msr', 'location_address_text': 'location_address_text', 'locality': 'locality', 'addr_state_cd': 'addr_state_cd', 'address_postal_code': 'address_postal_code', 'emissions_operating_type': 'emissions_operating_type', 'pollutant_cd': 'pollutant_cd', 'pollutant_desc': 'pollutant_desc', 'total_emissions': 'total_emissions', 'uom': 'uom', 'fips_state_code': 'fips_state_code', 'company_name': 'company_name', 'reporting_period': 'reporting_period', });
lyr_2014v2facilities_0.set('fieldImages', {'eis_facility_site_id': 'TextEdit', 'program_system_code': 'TextEdit', 'alt_agency_id': 'TextEdit', 'region_cd': 'TextEdit', 'st_usps_cd': 'TextEdit', 'county_name': 'TextEdit', 'state_and_county_fips_code': 'TextEdit', 'tribal_name': 'TextEdit', 'facility_site_name': 'TextEdit', 'naics_cd': 'TextEdit', 'naics_description': 'TextEdit', 'facility_source_type': 'TextEdit', 'latitude_msr': 'TextEdit', 'longitude_msr': 'TextEdit', 'location_address_text': 'TextEdit', 'locality': 'TextEdit', 'addr_state_cd': 'TextEdit', 'address_postal_code': 'TextEdit', 'emissions_operating_type': 'TextEdit', 'pollutant_cd': 'TextEdit', 'pollutant_desc': 'TextEdit', 'total_emissions': 'TextEdit', 'uom': 'TextEdit', 'fips_state_code': 'TextEdit', 'company_name': 'TextEdit', 'reporting_period': 'TextEdit', });
lyr_2014v2facilities_0.set('fieldLabels', {'eis_facility_site_id': 'no label', 'program_system_code': 'no label', 'alt_agency_id': 'no label', 'region_cd': 'no label', 'st_usps_cd': 'no label', 'county_name': 'no label', 'state_and_county_fips_code': 'no label', 'tribal_name': 'no label', 'facility_site_name': 'inline label', 'naics_cd': 'no label', 'naics_description': 'no label', 'facility_source_type': 'no label', 'latitude_msr': 'no label', 'longitude_msr': 'no label', 'location_address_text': 'no label', 'locality': 'no label', 'addr_state_cd': 'no label', 'address_postal_code': 'no label', 'emissions_operating_type': 'no label', 'pollutant_cd': 'no label', 'pollutant_desc': 'inline label', 'total_emissions': 'inline label', 'uom': 'no label', 'fips_state_code': 'no label', 'company_name': 'no label', 'reporting_period': 'no label', });
lyr_2014v2facilities_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});