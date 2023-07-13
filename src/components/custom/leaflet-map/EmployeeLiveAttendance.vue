<template>
    <div> 
        <div v-if="isLoading" class="loading-screen">
            <!-- Add your loading screen content here -->
            <img
                src="@/assets/images/loading-transparent.gif" 
                style="margin-right: 10px; width: 60px; height: 60px;" 
                class=""
            /> Map Loading...
        </div>
        <div v-else>
            <div class="relative space-y-3">
                <input
                    v-model="searchQuery"
                    @input="debouncedSearchLocation"
                    placeholder="Search location..." 
                    class="p-2 mb-0.5 w-full border border-gray-300 rounded" 
                />
                <ul v-if="searchResults.length" class="w-full rounded bg-white border border-gray-300 p-1 space-y-1 z-10" style="margin-bottom: 0.5rem !important;">
                    <li v-for="(result, index) in searchResults" :key="index" @click="selectLocation(result)" class="cursor-pointer hover:bg-gray-100 p-1">
                        {{ result.label }}
                    </li>
                </ul>
            </div>
            
            <l-map v-if="showMap" ref="mapRef" @ready="onMapReady" :zoom="zoom" :center="center" style="height: 500px">
                <l-tile-layer :url="tileLayerUrl" :attribution="tileLayerAttribution" />

                <l-marker v-if="currentLocation" :lat-lng="currentLocation">
                    <l-tooltip>{{ tooltipText }}</l-tooltip>
                </l-marker>

                <!-- Display the polygon geometry -->
                <l-polygon v-if="polygonCoordinates" :latlngs="polygonCoordinates" :fill-color="polygonColor" :fill-opacity="polygonOpacity">
                    <l-popup :content="polygonTooltipText" />
                </l-polygon>

                <l-control :position="'bottomleft'" class="custom-control-zoom">
                    <b-row class="g-3 align-items-center" @click="zoomToCurrentLocation">
                        <b-col cols="2">
                            <span class="btn-inner">
                                <icon-component
                                    type="outlined"
                                    icon-name="location"
                                />
                            </span>
                        </b-col>
                        <b-col cols="10" style="padding-right: 0px;">
                            &nbsp;My Location
                        </b-col>
                    </b-row>
                </l-control>
            </l-map> 
        </div>
    </div>
</template>

<style> 
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';

    .loading-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
    }

    .custom-control-zoom {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1000;
        background-color: #fff;
        padding: 5px 10px;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        cursor: pointer;
    }

</style>

<script>
import { ref, onMounted, provide, watch, defineExpose } from 'vue';
import { LMap, LTileLayer, LMarker, LPolygon, LPopup, LTooltip, LControl } from 'vue3-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'; 
import { debounce } from 'lodash';
import L from 'leaflet';

export default {
    name: 'MapEmployeeLiveAttendance',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPolygon,
        LPopup,
        LTooltip,
        LControl,
    },
    setup() { 
        const mapRef = ref(null);
        const isLoading = ref(true);
        const showMap = ref(false);
        const zoom = ref(13);
        const center = ref([0, 0]);
        const currentLocation = ref(null);
        const tooltipText = ref('I am here'); 

        const polygonTooltipText = ref('Area Jakarta');
        const polygonColor = ref('#ff00ff');
        const polygonOpacity = ref(0.5);
        const polygonCoordinates = ref([
            // Coordinates of the polygon representing Jakarta
            // [-6.2088, 106.8456],
            // [-6.2088, 107.1536],
            // [-6.4189, 107.1536],
            // [-6.4189, 106.8456],

            [-6.174994, 106.842386],  // Kebon Kosong
            [-6.129416, 106.864663],  // Sunter Agung
            [-6.138076, 106.887755],  // Sunter Jaya
            [-6.144603, 106.907020],  // Sumur Batu

            // around DiPStrategy - Digital Agency Jakarta - PT Digi Porta Semesta
            // [-6.211542127124758, 106.85918247754037],
            // [-6.211645452525985, 106.85921500690907],
            // [-6.211394453533763, 106.85896331309526],
            // [-6.211517110815858, 106.85894453763287],
        ]); 

        const selectedLocation = ref(null);
        const searchQuery = ref('');
        const searchResults = ref([]);

        function onMapReady(map){
            const currentZoom = map.getZoom();
            console.clear();
            console.log('clear 2');
            // L.DomEvent.on(map, 'click', checkLocation);
            // setTimeout(function () {
            //     checkLocation();
            // }, 500);
        }

        const checkLocation = () => {
            const currentLatLng = L.latLng(center.value[0], center.value[1]);
            const polygon = L.polygon(polygonCoordinates.value);
            const polygonBounds = polygon.getBounds();
            const isInsidePolygon = polygonBounds.contains(currentLatLng);

            if (isInsidePolygon) {
                alert('You are inside the polygon!');
            } else {
                alert('You are outside the polygon!');
            }
        } 

        async function searchLocation(query) {
            try {
                let q_val = query.target.value;
                searchQuery.value = q_val;
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/search?q=${q_val}&format=json`
                );

                searchResults.value = response.data.map((location) => ({
                    // location: location,
                    label: location.display_name,
                    value: location.place_id,
                    latlng: [location.lat, location.lon],
                }));

                // console.log(searchResults.value);
            } catch (error) {
                console.error('Error searching location:', error);
            } finally {
                
            }
        }

        // Calculate the zoom level based on the bounds
        const calculateZoomLevel = bounds => {
            const WORLD_WIDTH = 256;
            const ZOOM_MAX = 18;

            const latRad1 = (bounds.getSouthWest().lat * Math.PI) / 180;
            const latRad2 = (bounds.getNorthEast().lat * Math.PI) / 180;
            const lngDiff = bounds.getNorthEast().lng - bounds.getSouthWest().lng;

            const worldPixelWidth = (WORLD_WIDTH * 360) / lngDiff;
            const zoom = Math.log2(worldPixelWidth) - Math.log2(ZOOM_MAX);
            return Math.floor(zoom);
        };

        const debouncedSearchLocation = debounce(searchLocation, 300);

        // const updateLocationOptions = (query) => {
        //     // Update location options based on the search query
        //     // Use your preferred geocoding service or API endpoint to retrieve location suggestions
        //     // In this example, we are using the Nominatim API from OpenStreetMap
        //     const apiUrl = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=5`;

        //     fetch(apiUrl)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             searchResults.value = data.map((location) => ({
        //                 value: location.display_name,
        //                 coordinates: [parseFloat(location.lat), parseFloat(location.lon)],
        //             }));
        //         });
        // }; 

        const selectLocation = (location) => {
            const { latlng } = location;
            const obj_latlng = Object.assign({}, latlng);
            const obj_latitude = obj_latlng[0];
            const obj_longitude = obj_latlng[1];
            const mapInstance = mapRef.value;
            // console.clear();
            // console.log(location);
            // console.log(latlng);
            // console.log(obj_latlng, obj_latitude, obj_longitude);
            // console.log(mapRef.value);

            selectedLocation.value = latlng;
            center.value = latlng; 
            // zoom.value = 14; 

            if (mapInstance) {
                // mapInstance.flyTo(latlng, zoom.value, {
                //     duration: 1.5,
                //     easeLinearity: 0.25,
                // }); 
                mapInstance.setView(center.value, zoom.value);
            }
        };

        const zoomToCurrentLocation = () => {
            // isLoading.value = true;
            if ('geolocation' in navigator) { 
                navigator.geolocation.getCurrentPosition(
                    position => {
                        console.clear();
                        console.log('clear 3');

                        const { latitude, longitude, accuracy } = position.coords; 
                        currentLocation.value = [latitude, longitude];

                        // Calculate the appropriate zoom level based on the accuracy
                        const radius = accuracy / 2;
                        const bounds = L.latLng(latitude, longitude).toBounds(radius);
                        center.value = [latitude, longitude];
                        zoom.value = bounds.isValid() ? calculateZoomLevel(bounds) : zoom.value;

                        const mapInstance = mapRef.value;

                        if (mapInstance) {
                            // const currentZoom = mapInstance.getZoom();
                            // const maxZoom = mapInstance.getMaxZoom();
                            
                            // mapInstance.flyTo([latitude, longitude], zoom.value, {
                            //     duration: 1.5,
                            //     easeLinearity: 0.25,
                            // });
                            mapInstance.setView(center.value, zoom.value);
                        }

                        // isLoading.value = false;
                    },
                    error => {
                        console.log(error.message);
                        // isLoading.value = false;
                    },
                    {
                        // enableHighAccuracy: true, // default
                        // timeout: 5000, // default
                        // maximumAge: 0, // default
                        enableHighAccuracy: false,
                        timeout: 5000,
                        maximumAge: Infinity,
                    }
                );
            } else {
                console.log('Geolocation is not supported in this browser.');
                // isLoading.value = false;
            }
        }

        onMounted(() => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        // console.clear();
                        // console.log('clear 1');
                        
                        const { latitude, longitude, accuracy } = position.coords;
                        currentLocation.value = [latitude, longitude];

                        // Calculate the appropriate zoom level based on the accuracy
                        const radius = accuracy / 2;
                        const bounds = L.latLng(latitude, longitude).toBounds(radius);
                        center.value = [latitude, longitude];
                        zoom.value = bounds.isValid() ? calculateZoomLevel(bounds) : zoom.value;

                        isLoading.value = false;
                        showMap.value = true;
                    },
                    error => {
                        console.log(error.message);
                        isLoading.value = false;
                    },
                    {
                        // enableHighAccuracy: true, // default // ~3997ms
                        // timeout: 5000, // default
                        // maximumAge: 0, // default
                        enableHighAccuracy: false, // ~84ms 
                        timeout: 5000,
                        maximumAge: Infinity,
                    }
                );
            } else {
                console.log('Geolocation is not supported in this browser.');
                isLoading.value = false;
            }
        }); 

        watch(selectedLocation, (newLocation) => {
            if (newLocation) {
                // Handle selectedLocation change
            }
        });
        
        return {
            mapRef,
            isLoading,
            showMap,
            zoom,
            center,
            currentLocation,
            tooltipText,
            polygonTooltipText,
            polygonColor,
            polygonOpacity,
            polygonCoordinates,
            tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileLayerAttribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
             
            selectedLocation,
            searchQuery,
            searchResults,
            selectLocation,
            debouncedSearchLocation,
            zoomToCurrentLocation,
            onMapReady,
            checkLocation,
        };
    },  
};
</script>
