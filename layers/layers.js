var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordepartamentoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_3 = format_PoblacinpordepartamentoINDEC_3.readFeatures(json_PoblacinpordepartamentoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_3.addFeatures(features_PoblacinpordepartamentoINDEC_3);
var lyr_PoblacinpordepartamentoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_3, 
                style: style_PoblacinpordepartamentoINDEC_3,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_0.png" /> 1.725 - 7.425<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_1.png" /> 7.426 - 35.325<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_2.png" /> 35.326 - 133.500<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_3.png" /> 133.501 o más<br />'
        });
var format_ViviendasenreasruralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_4 = format_ViviendasenreasruralesINDEC_4.readFeatures(json_ViviendasenreasruralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_4.addFeatures(features_ViviendasenreasruralesINDEC_4);
var lyr_ViviendasenreasruralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_4, 
                style: style_ViviendasenreasruralesINDEC_4,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_0.png" /> 750 - 850<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_1.png" /> 851 - 1.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_2.png" /> 1.501 - 5.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_3.png" /> 5.001 o más<br />'
        });
var format_PEAINDEC_5 = new ol.format.GeoJSON();
var features_PEAINDEC_5 = format_PEAINDEC_5.readFeatures(json_PEAINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_5.addFeatures(features_PEAINDEC_5);
var lyr_PEAINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_5, 
                style: style_PEAINDEC_5,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_5_0.png" /> 1.000 - 8.500<br />\
    <img src="styles/legend/PEAINDEC_5_1.png" /> 8.501 - 22.500<br />\
    <img src="styles/legend/PEAINDEC_5_2.png" /> 22.501 - 90.500<br />\
    <img src="styles/legend/PEAINDEC_5_3.png" /> 90.501 - 210.000<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 25 - 450<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 451 - 1.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 1.001 - 4.375<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 4.376 - 7.550<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 4.750 - 13.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 13.001 - 55.275<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 55.276 - 200.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 200.001 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 200 - 2.225<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 2.226 - 7.250<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 7.251 - 16.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 16.001 - 24.000<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 4.500 - 6.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 6.001 - 19.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 19.001 - 110.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 110.001 - 151.000<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 13<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 14 - 235<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_3.png" /> 236 - 750<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_4.png" /> 751 - 1.200<br />'
        });
var format_HectreasdevidINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdevidINDEC_11 = format_HectreasdevidINDEC_11.readFeatures(json_HectreasdevidINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdevidINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdevidINDEC_11.addFeatures(features_HectreasdevidINDEC_11);
var lyr_HectreasdevidINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdevidINDEC_11, 
                style: style_HectreasdevidINDEC_11,
                interactive: true,
    title: 'Hectáreas de vid (INDEC)<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_1.png" /> 1 - 45<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_2.png" /> 46 - 355<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_3.png" /> 356 o más<br />'
        });
var format_HectreasdeperalesINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdeperalesINDEC_12 = format_HectreasdeperalesINDEC_12.readFeatures(json_HectreasdeperalesINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeperalesINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeperalesINDEC_12.addFeatures(features_HectreasdeperalesINDEC_12);
var lyr_HectreasdeperalesINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeperalesINDEC_12, 
                style: style_HectreasdeperalesINDEC_12,
                interactive: true,
    title: 'Hectáreas de perales (INDEC)<br />\
    <img src="styles/legend/HectreasdeperalesINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeperalesINDEC_12_1.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreasdeperalesINDEC_12_2.png" /> 151 - 2.500<br />\
    <img src="styles/legend/HectreasdeperalesINDEC_12_3.png" /> 2.501 o más<br />'
        });
var format_HectreasdemanzanalesINDEC_13 = new ol.format.GeoJSON();
var features_HectreasdemanzanalesINDEC_13 = format_HectreasdemanzanalesINDEC_13.readFeatures(json_HectreasdemanzanalesINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemanzanalesINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemanzanalesINDEC_13.addFeatures(features_HectreasdemanzanalesINDEC_13);
var lyr_HectreasdemanzanalesINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemanzanalesINDEC_13, 
                style: style_HectreasdemanzanalesINDEC_13,
                interactive: true,
    title: 'Hectáreas de manzanales (INDEC)<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_13_1.png" /> 1 - 25<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_13_2.png" /> 26 - 250<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_13_3.png" /> 251 - 3.250<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_13_4.png" /> 3.251 o más<br />'
        });
var format_HectreasdecerezosyciruelosINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdecerezosyciruelosINDEC_14 = format_HectreasdecerezosyciruelosINDEC_14.readFeatures(json_HectreasdecerezosyciruelosINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdecerezosyciruelosINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdecerezosyciruelosINDEC_14.addFeatures(features_HectreasdecerezosyciruelosINDEC_14);
var lyr_HectreasdecerezosyciruelosINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdecerezosyciruelosINDEC_14, 
                style: style_HectreasdecerezosyciruelosINDEC_14,
                interactive: true,
    title: 'Hectáreas de cerezos y ciruelos (INDEC)<br />\
    <img src="styles/legend/HectreasdecerezosyciruelosINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdecerezosyciruelosINDEC_14_1.png" /> 1 - 45<br />\
    <img src="styles/legend/HectreasdecerezosyciruelosINDEC_14_2.png" /> 46 - 375<br />\
    <img src="styles/legend/HectreasdecerezosyciruelosINDEC_14_3.png" /> 376 - 600<br />'
        });
var format_HectreasdefrutossecosINDEC_15 = new ol.format.GeoJSON();
var features_HectreasdefrutossecosINDEC_15 = format_HectreasdefrutossecosINDEC_15.readFeatures(json_HectreasdefrutossecosINDEC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdefrutossecosINDEC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdefrutossecosINDEC_15.addFeatures(features_HectreasdefrutossecosINDEC_15);
var lyr_HectreasdefrutossecosINDEC_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdefrutossecosINDEC_15, 
                style: style_HectreasdefrutossecosINDEC_15,
                interactive: true,
    title: 'Hectáreas de frutos secos (INDEC)<br />\
    <img src="styles/legend/HectreasdefrutossecosINDEC_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdefrutossecosINDEC_15_1.png" /> 1 - 5<br />\
    <img src="styles/legend/HectreasdefrutossecosINDEC_15_2.png" /> 6 - 265<br />\
    <img src="styles/legend/HectreasdefrutossecosINDEC_15_3.png" /> 266 - 580<br />'
        });
var format_Capacitaciones2019tcnicas_16 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_16 = format_Capacitaciones2019tcnicas_16.readFeatures(json_Capacitaciones2019tcnicas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_16.addFeatures(features_Capacitaciones2019tcnicas_16);
var lyr_Capacitaciones2019tcnicas_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_16, 
                style: style_Capacitaciones2019tcnicas_16,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_16.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018tcnicas_17 = new ol.format.GeoJSON();
var features_Capacitaciones2018tcnicas_17 = format_Capacitaciones2018tcnicas_17.readFeatures(json_Capacitaciones2018tcnicas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018tcnicas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018tcnicas_17.addFeatures(features_Capacitaciones2018tcnicas_17);
var lyr_Capacitaciones2018tcnicas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018tcnicas_17, 
                style: style_Capacitaciones2018tcnicas_17,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018tcnicas_17.png" /> Capacitaciones 2018 (técnicas)'
            });
var format_Capacitaciones2017tcnicas_18 = new ol.format.GeoJSON();
var features_Capacitaciones2017tcnicas_18 = format_Capacitaciones2017tcnicas_18.readFeatures(json_Capacitaciones2017tcnicas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017tcnicas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017tcnicas_18.addFeatures(features_Capacitaciones2017tcnicas_18);
var lyr_Capacitaciones2017tcnicas_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017tcnicas_18, 
                style: style_Capacitaciones2017tcnicas_18,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2017tcnicas_18.png" /> Capacitaciones 2017 (técnicas)'
            });
var format_LocalidadesRoNegro_19 = new ol.format.GeoJSON();
var features_LocalidadesRoNegro_19 = format_LocalidadesRoNegro_19.readFeatures(json_LocalidadesRoNegro_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesRoNegro_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesRoNegro_19.addFeatures(features_LocalidadesRoNegro_19);
var lyr_LocalidadesRoNegro_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesRoNegro_19, 
                style: style_LocalidadesRoNegro_19,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesRoNegro_19.png" /> Localidades Río Negro'
            });
var format_Agencia_20 = new ol.format.GeoJSON();
var features_Agencia_20 = format_Agencia_20.readFeatures(json_Agencia_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agencia_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agencia_20.addFeatures(features_Agencia_20);
var lyr_Agencia_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agencia_20, 
                style: style_Agencia_20,
                interactive: true,
                title: '<img src="styles/legend/Agencia_20.png" /> Agencia'
            });
var format_BER_21 = new ol.format.GeoJSON();
var features_BER_21 = format_BER_21.readFeatures(json_BER_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_21.addFeatures(features_BER_21);
var lyr_BER_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_21, 
                style: style_BER_21,
                interactive: true,
                title: '<img src="styles/legend/BER_21.png" /> BER'
            });
var format_BER_22 = new ol.format.GeoJSON();
var features_BER_22 = format_BER_22.readFeatures(json_BER_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_22.addFeatures(features_BER_22);
var lyr_BER_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_22, 
                style: style_BER_22,
                interactive: true,
                title: '<img src="styles/legend/BER_22.png" /> BER'
            });
var format_CAIR_23 = new ol.format.GeoJSON();
var features_CAIR_23 = format_CAIR_23.readFeatures(json_CAIR_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIR_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIR_23.addFeatures(features_CAIR_23);
var lyr_CAIR_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIR_23, 
                style: style_CAIR_23,
                interactive: true,
                title: '<img src="styles/legend/CAIR_23.png" /> CAIR'
            });
var format_Delegacin_24 = new ol.format.GeoJSON();
var features_Delegacin_24 = format_Delegacin_24.readFeatures(json_Delegacin_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_24.addFeatures(features_Delegacin_24);
var lyr_Delegacin_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_24, 
                style: style_Delegacin_24,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_24.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordepartamentoINDEC_3.setVisible(true);lyr_ViviendasenreasruralesINDEC_4.setVisible(true);lyr_PEAINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdevidINDEC_11.setVisible(true);lyr_HectreasdeperalesINDEC_12.setVisible(true);lyr_HectreasdemanzanalesINDEC_13.setVisible(true);lyr_HectreasdecerezosyciruelosINDEC_14.setVisible(true);lyr_HectreasdefrutossecosINDEC_15.setVisible(true);lyr_Capacitaciones2019tcnicas_16.setVisible(true);lyr_Capacitaciones2018tcnicas_17.setVisible(true);lyr_Capacitaciones2017tcnicas_18.setVisible(true);lyr_LocalidadesRoNegro_19.setVisible(true);lyr_Agencia_20.setVisible(true);lyr_BER_21.setVisible(true);lyr_BER_22.setVisible(true);lyr_CAIR_23.setVisible(true);lyr_Delegacin_24.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordepartamentoINDEC_3,lyr_ViviendasenreasruralesINDEC_4,lyr_PEAINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdevidINDEC_11,lyr_HectreasdeperalesINDEC_12,lyr_HectreasdemanzanalesINDEC_13,lyr_HectreasdecerezosyciruelosINDEC_14,lyr_HectreasdefrutossecosINDEC_15,lyr_Capacitaciones2019tcnicas_16,lyr_Capacitaciones2018tcnicas_17,lyr_Capacitaciones2017tcnicas_18,lyr_LocalidadesRoNegro_19,lyr_Agencia_20,lyr_BER_21,lyr_BER_22,lyr_CAIR_23,lyr_Delegacin_24];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldAliases', {'viv rur': 'viv rur', });
lyr_PEAINDEC_5.set('fieldAliases', {'pea': 'pea', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'hortalizas': 'hortalizas', });
lyr_HectreasdevidINDEC_11.set('fieldAliases', {'vid': 'vid', });
lyr_HectreasdeperalesINDEC_12.set('fieldAliases', {'peral': 'peral', });
lyr_HectreasdemanzanalesINDEC_13.set('fieldAliases', {'manzanal': 'manzanal', });
lyr_HectreasdecerezosyciruelosINDEC_14.set('fieldAliases', {'cer-cir': 'cer-cir', });
lyr_HectreasdefrutossecosINDEC_15.set('fieldAliases', {'secos': 'secos', });
lyr_Capacitaciones2019tcnicas_16.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2018tcnicas_17.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2017tcnicas_18.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_LocalidadesRoNegro_19.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_Agencia_20.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_BER_21.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BER_22.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_CAIR_23.set('fieldAliases', {'Nº': 'Nº', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_Delegacin_24.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': '', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldImages', {'viv rur': 'TextEdit', });
lyr_PEAINDEC_5.set('fieldImages', {'pea': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'hortalizas': 'TextEdit', });
lyr_HectreasdevidINDEC_11.set('fieldImages', {'vid': 'TextEdit', });
lyr_HectreasdeperalesINDEC_12.set('fieldImages', {'peral': 'TextEdit', });
lyr_HectreasdemanzanalesINDEC_13.set('fieldImages', {'manzanal': 'TextEdit', });
lyr_HectreasdecerezosyciruelosINDEC_14.set('fieldImages', {'cer-cir': 'TextEdit', });
lyr_HectreasdefrutossecosINDEC_15.set('fieldImages', {'secos': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_16.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'TextEdit', });
lyr_Capacitaciones2018tcnicas_17.set('fieldImages', {'localidad': 'TextEdit', 'tipo': '', 'tematica': '', 'fechas': '', 'asistentes': '', });
lyr_Capacitaciones2017tcnicas_18.set('fieldImages', {'localidad': 'TextEdit', 'tipo': '', 'tematica': '', 'fechas': '', 'asistentes': '', });
lyr_LocalidadesRoNegro_19.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_Agencia_20.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_BER_21.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BER_22.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_CAIR_23.set('fieldImages', {'Nº': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Delegacin_24.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldLabels', {'poblacion': 'inline label', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldLabels', {'viv rur': 'inline label', });
lyr_PEAINDEC_5.set('fieldLabels', {'pea': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'hortalizas': 'inline label', });
lyr_HectreasdevidINDEC_11.set('fieldLabels', {'vid': 'inline label', });
lyr_HectreasdeperalesINDEC_12.set('fieldLabels', {'peral': 'inline label', });
lyr_HectreasdemanzanalesINDEC_13.set('fieldLabels', {'manzanal': 'inline label', });
lyr_HectreasdecerezosyciruelosINDEC_14.set('fieldLabels', {'cer-cir': 'inline label', });
lyr_HectreasdefrutossecosINDEC_15.set('fieldLabels', {'secos': 'inline label', });
lyr_Capacitaciones2019tcnicas_16.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2018tcnicas_17.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2017tcnicas_18.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_LocalidadesRoNegro_19.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_Agencia_20.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_BER_21.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BER_22.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_CAIR_23.set('fieldLabels', {'Nº': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_Delegacin_24.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_Delegacin_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});