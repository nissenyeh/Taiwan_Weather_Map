var place_data = [{
        id: 1,
        tag: "Taipei_city",
        city: "臺北市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 3,
        tag: "New_taipei_city",
        city: "新北市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 10,
        tag: "Taichung_city",
        city: "台中市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 16,
        tag: "Tainan_City",
        city: "臺南市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 17,
        tag: "Kaohsiung_City",
        city: "高雄市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 2,
        tag: "Keelung_city",
        city: "基隆市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 8,
        tag: "Taoyuan_country",
        city: "桃園市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 6,
        tag: "Hsinchu_City",
        city: "新竹市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 7,
        tag: "Hsinchu_country",
        city: "新竹縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 9,
        tag: "Miaoli_country",
        city: "苗栗縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 11,
        tag: "Changhua_country",
        city: "彰化縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 12,
        tag: "Nantou_country",
        city: "南投縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 15,
        tag: "Yunlin_country",
        city: "雲林縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 13,
        tag: "Chiayi_city",
        city: "嘉義市",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 14,
        tag: "Chiayi_country",
        city: "嘉義縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 20,
        tag: "Pingtung",
        city: "屏東縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 5,
        tag: "Yilan_country",
        city: "宜蘭縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 22,
        tag: "Hualien_country",
        city: "花蓮縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 21,
        tag: "Taitung_country",
        city: "台東縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 18,
        tag: "Penghu_country",
        city: "澎湖縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 19,
        tag: "kinmen_country",
        city: "金門縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    },

    {
        id: 4,
        tag: "Lienchiang_country",
        city: "連江縣",
        tempature: 19,
        rainfall: 24,
        weather: "Sunny"
    }
]





var vm = new Vue({
    el: "#app",
    data: {
        filter: "",
        place_data: place_data

    },
    created: function () {


        for (item in place_data) {
            getStuff(item)
        }


        let self = this;

        function getStuff(item) {
            var id = place_data[item].id
            console.log(id)
            axios({
                    methods: 'get',
                    url: 'https://works.ioa.tw/weather/api/weathers/' + id + '.json'
                })
                .then((resp) => {
                    console.log(id)
                    for (item in place_data) {
                        if (place_data[item].id == id) {

                            self.place_data[item].rainfall = resp.data.rainfall;
                            self.place_data[item].tempature = resp.data.felt_air_temp;
                            self.place_data[item].weather = resp.data.desc;
                        }
                    }

                });
        }
        // console.log(self.place_data)



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
    },

})




$("path").mouseenter(function (e) {

    var cityname = $(this).attr("name")
    vm.filter = cityname;

    $(".forcast").css("opacity", "1")
})

$("path").mouseleave(function (e) {

    $(".forcast").css("opacity", "0")
})