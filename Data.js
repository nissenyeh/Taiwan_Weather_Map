var place_data = [{

        tag: "Taipei_city",
        city: "臺北市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "New_taipei_city",
        city: "新北市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Taichung_city",
        city: "台中市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Tainan_City",
        city: "臺南市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Kaohsiung_City",
        city: "高雄市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Keelung_city",
        city: "基隆市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Taoyuan_country",
        city: "桃園市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Hsinchu_City",
        city: "新竹市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Hsinchu_country",
        city: "新竹縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Miaoli_country",
        city: "苗栗縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Changhua_country",
        city: "彰化縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Nantou_country",
        city: "南投縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Yunlin_country",
        city: "雲林縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Chiayi_city",
        city: "嘉義市",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Chiayi_country",
        city: "嘉義縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Pingtung",
        city: "屏東縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Yilan_country",
        city: "宜蘭縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Hualien_country",
        city: "花蓮縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Taitung_country",
        city: "台東縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Penghu_country",
        city: "澎湖縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "kinmen_country",
        city: "金門縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    },

    {
        tag: "Lienchiang_country",
        city: "連江縣",
        low: 19,
        high: 24,
        weather: "Sunny"
    }
]

var vm = new Vue({
    el: "#app",
    data: {
        filter: "",
        place_data: place_data
    },
    computed: {
        now_area: function () {
            var vobj = this;
            var result = place_data.filter(function (obj) {
                return obj.tag == vobj.filter
            });
            if (result.length == 0) {
                return null;
            }
            return result[0]
        }
    }
})


$("path").mouseenter(function (e) {

    var cityname = $(this).attr("name")
    vm.filter = cityname;
})