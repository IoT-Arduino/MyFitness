const maplist = new Array()
const maplistUl = document.getElementById("mapList")
let maplistLi = document.querySelectorAll("#mapList li")
const mapCanvas = document.getElementById("map_canvas")
let currentWindow = null
let cnt = 0
const defaultIconUrl = "images/map-icon-gym-default.png"
const currentIconUrl = "images/map-icon-gym.png"
const defaultScaledSize = new google.maps.Size(30, 30)
const currentScaledSize = new google.maps.Size(40, 40)

//　LocationのJSONデータの取得
class GetData {
  async getLocation() {
    try {
      const result = await fetch("location.json")
      const data = await result.json()
      let markers = data.items

      markers = markers.map((item) => {
        const {
          title,
          latitude,
          longitude,
          address,
          id,
          category,
        } = item.fields
        const image = item.fields.image.fields.file.url
        return { title, latitude, longitude, address, id, category, image }
      })
      return markers
    } catch (error) {
      console.log(error)
    }
  }
}

//　Mapの初期化
function initMap() {
  const myOptions = {
    zoom: 13,
    center: new google.maps.LatLng(37.789096, -122.40217),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  }
  const map = new google.maps.Map(
    document.getElementById("map_canvas"),
    myOptions
  )

  const markers = new GetData()

  // marker配列データからマーカーの作成およびli要素の作成
  const createMarkers = () => {
    markers
      .getLocation()
      .then((items) => {
        items.forEach((item) => {
          const id = item.id
          const name = item.title
          const latlng = new google.maps.LatLng(item.latitude, item.longitude)

          const icons = {
            url: defaultIconUrl,
            scaledSize: defaultScaledSize,
          }

          const address = item.address
          const image = item.image

          createMarker(name, latlng, icons, map, id)

          maplistUl.innerHTML += `<li><img src=${image} /><div> <h4>${name}</h4> Address : ${address}</div></li>`
        })
      })
      // 生成されたli要素へのイベントリスナーの付与。
      .then(() => {
        maplistLi = document.querySelectorAll("#mapList li")
        maplistLi.forEach((listItem, index) => {
          listItem.addEventListener("click", () => {
            google.maps.event.trigger(maplist[index], "click")
          })
        })
      })
  }

  createMarkers()
}

//　各マーカーのセット
function createMarker(name, latlng, icons, map, id) {
  const infoWindow = new google.maps.InfoWindow()
  const marker = new google.maps.Marker({
    position: latlng,
    icon: {
      url: icons.url,
      scaledSize: icons.scaledSize,
    },
    map: map,
  })

  console.log(icons.scaledSize)

  // liリストをclickしたときに、他のアイコンを初期状態にする。
  google.maps.event.addDomListener(maplistUl, "click", function () {
    marker.setIcon({
      url: defaultIconUrl,
      scaledSize: icons.scaledSize,
    })
  })
  // 新しくマーカーをclickしたときに、他のアイコンを初期状態にする。（※１）
  google.maps.event.addDomListener(mapCanvas, "click", function () {
    marker.setIcon({
      url: defaultIconUrl,
      scaledSize: icons.scaledSize,
    })
  })

  //　markerをクリックしたときの処理
  google.maps.event.addListener(marker, "click", function (e) {
    // クリック済みのMakerに対応するliリストのCSS背景を初期化
    maplistLi.forEach((item) => {
      if (item.classList.contains("clicked")) {
        item.classList.remove("clicked")
      }
    })
    //　clickしたマーカーのアイコンを変更する処理（※1の処理の後）
    setTimeout(function () {
      marker.setIcon({
        url: currentIconUrl,
        scaledSize: currentScaledSize,
      })
    }, 100)

    // infowindow の処理
    if (currentWindow) {
      currentWindow.close()
    }
    infoWindow.setContent(name)
    infoWindow.open(map, marker)
    currentWindow = infoWindow

    //markerをクリックした時に地図の中心に
    map.panTo(latlng)

    //　クリックされたMarkerに対応するli要素のcss背景を操作する。
    maplistLi[id - 1].classList.add("clicked")
  })
  maplist[cnt++] = marker

  marker.setIcon({
    url: defaultIconUrl,
    scaledSize: icons.scaledSize,
  })
}

google.maps.event.addDomListener(window, "load", initMap)
