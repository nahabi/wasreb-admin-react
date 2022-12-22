import { xml2json } from 'xml-js';

// util function that returns the all properties and types of the input layer name
export const fetchLayerProperties = async (layerName) => {
    let layerProperties = []
    const url = `http://102.37.157.16:8080/geoserver/ows?service=WFS&version=1.0.0&request=DescribeFeatureType&typeName=${layerName}`
    const res = await fetch(url)
    const data = await res.text()
    const json = xml2json(data);
    const obj = JSON.parse(json)
    const properties = obj.elements[0].elements[1].elements[0].elements[0].elements[0].elements
    properties.forEach((property) => {
        layerProperties.push(property.attributes)
    })

    return layerProperties
}