<template>
  <div>
    <div id="map"></div>
  </div>
</template>


<script>
import mapboxgl from 'https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js'
export default {
  data() {
    return {
      username: "哇哈哈",
    };
  },
  mounted() {
    // this.submit();
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGlqMTUxOTAxNjY5MCIsImEiOiJjbGRnenJoODExMm03M29uZXk1YWUzaDZkIn0.MhkRE8Vb4Sc_9i9cM4cGdQ";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
  methods: {
    //处理函数
    addCount() {
      this.count++;
    },
  },
};
</script>

<style>
 @import url(https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css);
* {
  margin: 0;
  padding: 0;
}
#map {
  width: 100vw;
  height: 100vh;
}
</style>
