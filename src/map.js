import React from 'react';
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";


export default function MapComponent(props) {
    return (
        <>
            <Map center={[4, 6]} zoom={6} width={window.innerWidth} height={window.innerHeight}>
                <Marker
                    anchor={[50.874, 4.6947]}
                    payload={1}
                    onClick={({ event, anchor, payload }) => { }}
                />
                {props.users.users !== undefined ?
                    props.users.users.map((e, i) => {
                        return (
                            <Overlay anchor={e.location} offset={[0, 0]} key={i}>
                                <img
                                    src="/marker.png"
                                    width={35}
                                    height={24}
                                    alt=""
                                />
                            </Overlay>
                        )
                    }) : ''
                }
            </Map>
            {/* <button> Get my Location and get linkS </button> */}
        </>
    );
}