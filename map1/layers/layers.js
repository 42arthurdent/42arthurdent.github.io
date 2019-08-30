var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format_nei2014_PA_0 = new ol.format.GeoJSON();
var features_nei2014_PA_0 = format_nei2014_PA_0.readFeatures(json_nei2014_PA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nei2014_PA_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nei2014_PA_0.addFeatures(features_nei2014_PA_0);var lyr_nei2014_PA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nei2014_PA_0, 
                style: style_nei2014_PA_0,
    title: 'nei2014_PA<br />\
    <img src="styles/legend/nei2014_PA_0_0.png" /> 0 - 73<br />\
    <img src="styles/legend/nei2014_PA_0_1.png" /> 73-4202<br />\
    <img src="styles/legend/nei2014_PA_0_2.png" /> 4202-8831<br />\
    <img src="styles/legend/nei2014_PA_0_3.png" /> 8831-12460<br />\
    <img src="styles/legend/nei2014_PA_0_4.png" /> 12460-16590<br />\
    <img src="styles/legend/nei2014_PA_0_5.png" /> 16950-20718<br />\
    <img src="styles/legend/nei2014_PA_0_6.png" /> >20718<br />'
        });var format_nei2014_NJ_1 = new ol.format.GeoJSON();
var features_nei2014_NJ_1 = format_nei2014_NJ_1.readFeatures(json_nei2014_NJ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nei2014_NJ_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nei2014_NJ_1.addFeatures(features_nei2014_NJ_1);var lyr_nei2014_NJ_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nei2014_NJ_1, 
                style: style_nei2014_NJ_1,
    title: 'nei2014_NJ<br />\
    <img src="styles/legend/nei2014_NJ_1_0.png" /> 0 - 73<br />\
    <img src="styles/legend/nei2014_NJ_1_1.png" /> 73-4202<br />\
    <img src="styles/legend/nei2014_NJ_1_2.png" /> 4202-8831<br />\
    <img src="styles/legend/nei2014_NJ_1_3.png" /> 8831-12460<br />\
    <img src="styles/legend/nei2014_NJ_1_4.png" /> 12460-16590<br />\
    <img src="styles/legend/nei2014_NJ_1_5.png" /> 16950-20718<br />\
    <img src="styles/legend/nei2014_NJ_1_6.png" /> >20718<br />'
        });

lyr_nei2014_PA_0.setVisible(true);lyr_nei2014_NJ_1.setVisible(true);
var layersList = [baseLayer,lyr_nei2014_PA_0,lyr_nei2014_NJ_1];
lyr_nei2014_PA_0.set('fieldAliases', {'eis_facility_site_id': 'eis_facility_site_id', 'program_system_code': 'program_system_code', 'alt_agency_id': 'alt_agency_id', 'region_cd': 'region_cd', 'st_usps_cd': 'st_usps_cd', 'county_name': 'county_name', 'state_and_county_fips_code': 'state_and_county_fips_code', 'tribal_name': 'tribal_name', 'facility_site_name': 'facility_site_name', 'naics_cd': 'naics_cd', 'naics_description': 'naics_description', 'facility_source_type': 'facility_source_type', 'latitude_msr': 'latitude_msr', 'longitude_msr': 'longitude_msr', 'location_address_text': 'location_address_text', 'locality': 'locality', 'addr_state_cd': 'addr_state_cd', 'address_postal_code': 'address_postal_code', 'emissions_operating_type': 'emissions_operating_type', 'pollutant_cd': 'pollutant_cd', 'pollutant_desc': 'pollutant_desc', 'total_emissions': 'total_emissions', 'uom': 'uom', 'fips_state_code': 'fips_state_code', 'company_name': 'company_name', 'reporting_period': 'reporting_period', });
lyr_nei2014_NJ_1.set('fieldAliases', {'eis_facility_site_id': 'eis_facility_site_id', 'program_system_code': 'program_system_code', 'alt_agency_id': 'alt_agency_id', 'region_cd': 'region_cd', 'st_usps_cd': 'st_usps_cd', 'county_name': 'county_name', 'state_and_county_fips_code': 'state_and_county_fips_code', 'tribal_name': 'tribal_name', 'facility_site_name': 'facility_site_name', 'naics_cd': 'naics_cd', 'naics_description': 'naics_description', 'facility_source_type': 'facility_source_type', 'latitude_msr': 'latitude_msr', 'longitude_msr': 'longitude_msr', 'location_address_text': 'location_address_text', 'locality': 'locality', 'addr_state_cd': 'addr_state_cd', 'address_postal_code': 'address_postal_code', 'emissions_operating_type': 'emissions_operating_type', 'pollutant_cd': 'pollutant_cd', 'pollutant_desc': 'pollutant_desc', 'total_emissions': 'total_emissions', 'uom': 'uom', 'fips_state_code': 'fips_state_code', 'company_name': 'company_name', 'reporting_period': 'reporting_period', });
lyr_nei2014_PA_0.set('fieldImages', {'eis_facility_site_id': 'TextEdit', 'program_system_code': 'TextEdit', 'alt_agency_id': 'TextEdit', 'region_cd': 'TextEdit', 'st_usps_cd': 'TextEdit', 'county_name': 'TextEdit', 'state_and_county_fips_code': 'TextEdit', 'tribal_name': 'TextEdit', 'facility_site_name': 'TextEdit', 'naics_cd': 'TextEdit', 'naics_description': 'TextEdit', 'facility_source_type': 'TextEdit', 'latitude_msr': 'TextEdit', 'longitude_msr': 'TextEdit', 'location_address_text': 'TextEdit', 'locality': 'TextEdit', 'addr_state_cd': 'TextEdit', 'address_postal_code': 'TextEdit', 'emissions_operating_type': 'TextEdit', 'pollutant_cd': 'TextEdit', 'pollutant_desc': 'TextEdit', 'total_emissions': 'TextEdit', 'uom': 'TextEdit', 'fips_state_code': 'TextEdit', 'company_name': 'TextEdit', 'reporting_period': 'TextEdit', });
lyr_nei2014_NJ_1.set('fieldImages', {'eis_facility_site_id': 'TextEdit', 'program_system_code': 'TextEdit', 'alt_agency_id': 'TextEdit', 'region_cd': 'TextEdit', 'st_usps_cd': 'TextEdit', 'county_name': 'TextEdit', 'state_and_county_fips_code': 'TextEdit', 'tribal_name': 'TextEdit', 'facility_site_name': 'TextEdit', 'naics_cd': 'TextEdit', 'naics_description': 'TextEdit', 'facility_source_type': 'TextEdit', 'latitude_msr': 'TextEdit', 'longitude_msr': 'TextEdit', 'location_address_text': 'TextEdit', 'locality': 'TextEdit', 'addr_state_cd': 'TextEdit', 'address_postal_code': 'TextEdit', 'emissions_operating_type': 'TextEdit', 'pollutant_cd': 'TextEdit', 'pollutant_desc': 'TextEdit', 'total_emissions': 'TextEdit', 'uom': 'TextEdit', 'fips_state_code': 'TextEdit', 'company_name': 'TextEdit', 'reporting_period': 'TextEdit', });
lyr_nei2014_PA_0.set('fieldLabels', {'eis_facility_site_id': 'no label', 'program_system_code': 'no label', 'alt_agency_id': 'no label', 'region_cd': 'no label', 'st_usps_cd': 'no label', 'county_name': 'no label', 'state_and_county_fips_code': 'no label', 'tribal_name': 'no label', 'facility_site_name': 'inline label', 'naics_cd': 'no label', 'naics_description': 'no label', 'facility_source_type': 'no label', 'latitude_msr': 'no label', 'longitude_msr': 'no label', 'location_address_text': 'no label', 'locality': 'no label', 'addr_state_cd': 'no label', 'address_postal_code': 'no label', 'emissions_operating_type': 'no label', 'pollutant_cd': 'no label', 'pollutant_desc': 'no label', 'total_emissions': 'inline label', 'uom': 'no label', 'fips_state_code': 'no label', 'company_name': 'no label', 'reporting_period': 'no label', });
lyr_nei2014_NJ_1.set('fieldLabels', {'eis_facility_site_id': 'no label', 'program_system_code': 'no label', 'alt_agency_id': 'no label', 'region_cd': 'no label', 'st_usps_cd': 'no label', 'county_name': 'no label', 'state_and_county_fips_code': 'no label', 'tribal_name': 'no label', 'facility_site_name': 'inline label', 'naics_cd': 'no label', 'naics_description': 'no label', 'facility_source_type': 'no label', 'latitude_msr': 'no label', 'longitude_msr': 'no label', 'location_address_text': 'no label', 'locality': 'no label', 'addr_state_cd': 'no label', 'address_postal_code': 'no label', 'emissions_operating_type': 'no label', 'pollutant_cd': 'no label', 'pollutant_desc': 'no label', 'total_emissions': 'inline label', 'uom': 'no label', 'fips_state_code': 'no label', 'company_name': 'no label', 'reporting_period': 'no label', });
lyr_nei2014_NJ_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});