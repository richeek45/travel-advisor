import { AppBar, Box, CircularProgress, InputBase, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { GoogleMap, LoadScript, Autocomplete, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const API_KEY = "AIzaSyDM2ZU1AqSOzokO6ATWVaXFWi3QXCVrdU4"

// const options = {
//     zoomControlOptions: {
//         position: window.google.maps.ControlPosition.RIGHT_CENTER // 'right-center' ,
//         // ...otherOptions
//     }
// }

export const MapLoader = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: API_KEY
    })

    // const onLoad = useCallback(function onLoad(mapInstance) {
    //     // do something with map Instance
    // })


    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
            libraries={['places']}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            // onLoad={onLoad}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    )
}


const Header = () => {
    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
            libraries={['places']}
        >
            <AppBar position="static">
                <Toolbar>
                    <Typography>Travel Advisor</Typography>
                </Toolbar>
                <Box display="flex">
                    <Typography>Explore new places</Typography>
                    <Autocomplete>
                        {/* <div>
                        <div>
                            <SearchIcon />
                        </div>
                    </div> */}
                        <InputBase />
                    </Autocomplete>
                </Box>

            </AppBar>
        </LoadScript>
    )
}

export default Header