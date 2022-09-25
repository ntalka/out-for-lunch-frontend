import React from 'react'
import GoogleMapReact from 'google-map-react'
import pin from "../../Material/pin.png";
import {Link} from "@mui/material";



const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)"
};


// react component using google-map-react to pinpoint location
// doesn't currently contain more functionality / being proof of concept
class Map extends React.Component {
    static defaultProps = {
        name: "itsudemo",
        id: "test",
        center: {
            lat: 61.49925378109671,
            lng: 23.776468082987602
        },
        zoom: 17
    };

    render() {
        return (
            <div style={{ height: "40vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "YOUR_KEY_HERE"
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                        <Link text={Map.defaultProps.name} key={Map.defaultProps.id} lat={Map.defaultProps.center.lat} lng={Map.defaultProps.center.lng}>
                        <img style={markerStyle} src={pin} alt="pin" />
                        </Link>
                </GoogleMapReact>
            </div>
        );
    }
}
export default Map;

