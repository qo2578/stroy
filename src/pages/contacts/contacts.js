var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.86972, 74.58728],
        zoom: 18
    });
    var myIcon = DG.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/8065/8065913.png',
        iconSize: [40, 40],
    });
    DG.marker([42.869545, 74.587186], {icon:myIcon}).bindPopup('Ants cofe').openPopup().addTo(map);
});