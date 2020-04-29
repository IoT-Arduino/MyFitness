var currentWindow = null
var maplist = new Array()
var cnt = 0
var maplistUl = document.getElementById('mapList')
var maplistLi = document.querySelectorAll('#mapList li')


//　JSONデータの取得
class GetData {
  async getLocation() {
    try {
      let result = await fetch("location.json")
      let data = await result.json()
      let markers = data.items
      
      markers = markers.map(item => {
        const { title, latitude, longitude,address,id,category } = item.fields
        const image = item.fields.image.fields.file.url
        return {title, latitude, longitude, address,id,category,image}
      })
       return markers
    } catch (error) {
      console.log(error)
    }
  }
}


//　Mapの初期化、jsonデータからマーカーの作成
function initMap() {

  var myOptions = {
    zoom: 13,
    center: new google.maps.LatLng(37.789096,-122.402170),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(
    document.getElementById("map_canvas"),
    myOptions
  )

  const markers = new GetData()

  markers.getLocation()
  .then( items => {
    
    items.forEach( item => {
      var id = item.id
      var name = item.title
      var latlng = new google.maps.LatLng(item.latitude, item.longitude)
      var address = item.address
      var image = item.image

      createMarker(name, latlng, map,id)

      maplistUl.innerHTML += `<li><img src=${image} /><div> <h4>${name}</h4> Address : ${address}</div></li>`

    })
  }).then(()=>{
    maplistLi = document.querySelectorAll('#mapList li')
    maplistLi.forEach((listItem,index) => {
      listItem.addEventListener('click',()=>{
       google.maps.event.trigger(maplist[index], "click");
     })
    })
  })
  
}



//　markerをクリックしたときの処理
function createMarker(name, latlng, map,id) {
  var infoWindow = new google.maps.InfoWindow()
  var marker = new google.maps.Marker({ position: latlng, map: map })

  google.maps.event.addListener(marker, "click", function(e) {

    // クリックされたリストのCSS背景を初期化
    maplistLi.forEach((item)=>{
        if(item.classList.contains('clicked')){
          console.log(item.textContent + "removed")
          item.classList.remove('clicked')
        }
      })

    if (currentWindow) {
      currentWindow.close()
    }
    infoWindow.setContent(name)
    infoWindow.open(map, marker)
    currentWindow = infoWindow
    map.panTo(latlng) //markerをクリックした時に地図の中心に
    console.log(name)  // クリックした場所の名前を出力

    //　クリックされたIDと li のdata attributeが同じものの、css背景を操作する。
    console.log(id)
    console.log(maplistLi[id-1])
    maplistLi[id-1].classList.add('clicked')

    })
    maplist[cnt++] = marker;
}

// ***** JQuery Sample *****
// $(function(){
//   $('#mapList li').click(function(){
//   var no = $('#mapList li').index(this);
//   google.maps.event.trigger(maplist[no], "click");
//   });
// });

// ***** VanillaJS で書き換え*****
// document.addEventListener('DOMContentLoaded', function() {
//   maplistLi.forEach((listItem,index) => {
//     listItem.addEventListener('click',()=>{
//      google.maps.event.trigger(maplist[index], "click");
//    })
//   })
// });


google.maps.event.addDomListener(window, "load", initMap)


