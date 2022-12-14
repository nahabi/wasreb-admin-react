import React, { useState, useRef, useEffect } from 'react'
import { xml2json } from 'xml-js';

// OpenLayers imports
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ'
import Zoom from 'ol/control/Zoom';
import FullScreen from 'ol/control/FullScreen';
import ScaleLine from 'ol/control/ScaleLine';
import MousePosition from 'ol/control/MousePosition';
import OverviewMap from 'ol/control/OverviewMap'
import LayerGroup from "ol/layer/Group";
import LayerSwitcher from 'ol-layerswitcher';
import { format } from "ol/coordinate";
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import {bbox as bboxStrategy} from 'ol/loadingstrategy.js';
import Select from 'ol/interaction/Select.js';
import {Fill, Stroke, Style} from 'ol/style.js';
import { click } from 'ol/events/condition.js';


import { Button, Space, Tooltip } from 'antd';
import { EditOutlined, FormOutlined, DeleteOutlined, SelectOutlined} from '@ant-design/icons'

import "ol/ol.css";
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import './AdminMap.css'
import SelectComponent from './SelectComponent';
import { fetchLayerProperties } from './utils';


const AdminMap = () => {
    const [ map, setMap ] = useState(null)
    const [ availableLayers, setAvailableLayers ] = useState()
    const [ editingLayer, setEditingLayer ] = useState()
    const [ editingLayerProperties, setEditingLayerProperties ] = useState([])

    // get ref to div element - OpenLayers will render into this div
    const mapElement = useRef()

    // state ref that will be accessed in OpenLayers callback functions
    const mapRef = useRef()
    mapRef.current = map

    //Mouse position coordinates format
    var coordFormat = "Lon {x}, Lat {y}";

    // soptions for the selct component
    const options = [
        {
            value: 'PUBLIC_PORTAL:actual_served_area_14122022',
            label: 'PUBLIC_PORTAL:actual_served_area_14122022',
        },
    ]

    // map layer groups
    let basemaps = new LayerGroup({
        title: 'Base Maps',
        fold: 'open',
        layers: [
            new TileLayer({
                title: 'Standard',
                type: 'base',
                visible: true,
                opacity: 1,
                source: new OSM(),
            }),
            new TileLayer({
                title: 'Aerial',
                type: 'base',
                visible: false,
                source: new XYZ({
                    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                    maxZoom: 19
                })
            }),
            new TileLayer({
                title: "Topography",
                type: "base",
                visible: false,
                source: new XYZ({
                    url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
                }),
            })
        ]
    })

    let administrativeLayers = new LayerGroup({
        title: 'Administrative Boundaries',
        layers: [
            new ImageLayer({
                title: 'Kenya Boundary',
                source: new ImageWMS({
                    // crossOrigin: 'anonymous',
                    url: 'http://102.37.157.16:8080/geoserver/wms',
                    params: {
                        LAYERS: "PUBLIC_PORTAL:country"
                    },
                    ratio: 1,
                    serverType: "geoserver",
                })
            }),
            new ImageLayer({
                title: 'Counties',
                source: new ImageWMS({
                    // crossOrigin: 'anonymous',
                    url: 'http://102.37.157.16:8080/geoserver/wms',
                    params: {
                        LAYERS: "PUBLIC_PORTAL:county"
                    },
                    ratio: 1,
                    serverType: "geoserver",
                })
            })
        ]
    })

    let wasrebLayers = new LayerGroup({
        title: 'WASREB Layers',
        layers: []
    })

    const selected = new Style({
        fill: new Fill({
            color: '#eeeeee',
        }),
        stroke: new Stroke({
            color: 'rgba(0, 38, 255, 0.7)',
            width: 2,
        }),
    });

    function selectStyle(feature) {
        const color = feature.get('COLOR') || '#eeeeee';
        selected.getFill().setColor(color);
        return selected;
    }

    // select interaction working on "click"
    const selectClick = new Select({
        condition: click,
        style: selectStyle,
    });

    let select = selectClick

    // initialize map
    useEffect(() => {
        const initialMap = new Map({
            target: mapElement.current,
            layers: [basemaps, administrativeLayers],
            view: new View({
                projection: 'EPSG:4326',
                center: [37.68, 0.5],
                zoom: 7
            }),
            controls: [
                new Zoom({
                    className: 'map-zoom'
                }),
                new FullScreen({
                    className: 'map-fullscreen'
                }),
                new ScaleLine({
                    minWidth: 100
                }),
                new MousePosition({
                    className: 'mouse-position',
                    coordinateFormat: function (coordinate) {
                        return format(coordinate, coordFormat, 4);
                    },
                    projection: "EPSG:4326",
                }),
                new OverviewMap({
                    // className: 'map-overview-map',
                    layers: [
                        new TileLayer({
                            source: new OSM(),
                        }),
                    ]
                })
            ]
        });

        // save map reference to state
        setMap(initialMap)

        // map layer switcher
        const layerSwitcher = new LayerSwitcher({
            reverse: true,
            groupSelectStyle: 'group'
        })

        initialMap.addControl(layerSwitcher)

        // Add Select to map
        initialMap.addInteraction(select);
        select.on('select', function(e) {
            var extent = e.target.getFeatures().getArray()[0]?.getGeometry().getExtent();
            if (extent) {
                initialMap.getView().fit(extent);
            }
        });

        // cleanup
        return () => {
            initialMap.removeControl(layerSwitcher)
            initialMap.removeInteraction(select)
            initialMap.setTarget(null)
        }

    }, []);

    // get the accessible layers
    useEffect(() => {
        let layersList = []
        let url = "http://102.37.157.16:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities&namespace=WASREB&authkey=bad69a50-fb45-4a47-9079-ac540c58893c"
        fetch(url)
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                const json = xml2json(data);
                const obj = JSON.parse(json)
                const layersData = obj.elements[0].elements[1].elements[2].elements
                layersData.forEach((layer) => {
                    if (layer.name === "Layer"){
                        let fullLayerName = layer.elements[0].elements[0].text
                        layersList.push(fullLayerName)
                    }
                });
                setAvailableLayers(layersList)
            }).catch((error) => console.log(error))
    },[])

    // dynamically add the layers to the WASREB layer group.
    useEffect(() => {
        if (availableLayers) {
            availableLayers.forEach((layer) => {
                let imageLayer = new ImageLayer({
                    title: `${layer}`,
                    source: new ImageWMS({
                        crossOrigin: 'anonymous',
                        url: 'http://102.37.157.16:8080/geoserver/wms',
                        params: {
                            LAYERS: `${layer}`
                        },
                        ratio: 1,
                        serverType: "geoserver",
                    })
                });
                wasrebLayers.getLayers().array_.push(imageLayer)
            })
            mapRef.current.addLayer(wasrebLayers)
        }

        // cleanup
        return () => {
            if (map) {
                mapRef.current.removeLayer(wasrebLayers)
            }
        }
    }, [availableLayers])

    const loadWFSLayer = () => {
        const vectorSource = new VectorSource({
            format: new GeoJSON(),
            url: function (extent) {
                return (
                    `http://102.37.157.16:8080/geoserver/ows?service=WFS&` +
                    `version=1.0.0&request=GetFeature&typeName=PUBLIC_PORTAL%3Aactual_served_area_14122022&` +
                    `outputFormat=application%2Fjson&srsname=EPSG:3857&` + 
                    `bbox=` +
                    extent.join(',') +
                    ',EPSG:4326'
                )
            },
            strategy: bboxStrategy
        })

        const wfsLayer = new VectorLayer({
            source: vectorSource,
            style: {
              'stroke-width': 1,
              'stroke-color': 'red',
              'fill-color': 'rgba(100,100,100,0.25)',
            },
        });

        // zoom to extent
        let padding = [10, 10, 10, 10]
        wfsLayer.getSource().once('change', function () {
            map.getView().fit(wfsLayer.getSource().getExtent(), {
            size: map.getSize(),
            padding: padding,
            });
        });
        
        mapRef.current.addLayer(wfsLayer)
    }

    // load the WFS layer when user selects the layer to edit
    useEffect(() => {
        const fetchAttributes = async () => {
            const layerAttributes = await fetchLayerProperties(editingLayer)

            setEditingLayerProperties(layerAttributes)
        }

        if (editingLayer) {
            loadWFSLayer()
            fetchAttributes()
        }
    }, [editingLayer])

    return (
        <div ref={mapElement} className="map-container">
            <Space size="middle" style={{position: 'absolute', zIndex: 100, top: '20px', left: '50%', transform: 'translate(-50%, 0)'}}>
                <SelectComponent options={options} setEditingLayer={setEditingLayer} />
                <Tooltip placement="topLeft" title="Select Feature">
                    <SelectOutlined style={{ color: 'black', fontSize: 20}}/>
                </Tooltip>
                <Tooltip placement="topLeft" title="Create Feature">
                    <EditOutlined style={{ color: 'black', fontSize: 20}}/>
                </Tooltip>
                <Tooltip placement="topLeft" title="Edit Feature">
                    <FormOutlined style={{ color: 'black', fontSize: 20}}/>
                </Tooltip>
                <Tooltip placement="topLeft" title="Delete Feature">
                    <DeleteOutlined style={{ color: 'red', fontSize: 20}}/>
                </Tooltip>
            </Space>
        </div>
    )
}

export default AdminMap