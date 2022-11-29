const images = ['img/image_1.jpg', 'img/image_2.jpg', 'img/image_3.jpg', 'img/image_4.jpg', 'img/image_5.jpg', 'img/image_6.jpg', 'img/image_7.jpg', 'img/image_8.jpg', 'img/image_9.jpg', 'img/image_10.jpg', 'img/image_11.jpg', 'img/image_12.jpg', 'img/image_13.jpg', 'img/image_14.jpg', 'img/image_15.jpg', 'img/image_16.jpg', 'img/image_17.jpg', 'img/image_18.jpg', 'img/image_19.jpg', 'img/image_20.jpg', 'img/image_21.jpg', 'img/image_22.jpg', 'img/image_23.jpg', 'img/image_24.jpg', 'img/image_25.jpg', 'img/image_26.jpg', 'img/image_27.jpg', 'img/image_28.jpg', 'img/image_29.jpg', 'img/image_30.jpg', 'img/image_31.jpg', 'img/image_32.jpg', 'img/image_33.jpg', 'img/image_34.jpg', 'img/image_35.jpg', 'img/image_36.jpg', 'img/image_37.jpg', 'img/image_38.jpg', 'img/image_39.jpg', 'img/image_40.jpg', 'img/image_41.jpg', 'img/image_42.jpg', 'img/image_43.jpg', 'img/image_44.jpg', 'img/image_45.jpg', 'img/image_46.jpg', 'img/image_47.jpg', 'img/image_48.jpg', 'img/image_49.jpg', 'img/image_50.jpg', 'img/image_51.jpg', 'img/image_52.jpg', 'img/image_53.jpg', 'img/image_54.jpg', 'img/image_55.jpg', 'img/image_56.jpg', 'img/image_57.jpg', 'img/image_58.jpg', 'img/image_59.jpg', 'img/image_60.jpg', 'img/image_61.jpg', 'img/image_62.jpg', 'img/image_63.jpg', 'img/image_64.jpg', 'img/image_65.jpg', 'img/image_66.jpg', 'img/image_67.jpg', 'img/image_68.jpg', 'img/image_69.jpg', 'img/image_70.jpg', 'img/image_71.jpg', 'img/image_72.jpg', 'img/image_73.jpg', 'img/image_74.jpg', 'img/image_75.jpg', 'img/image_76.jpg', 'img/image_77.jpg', 'img/image_78.jpg', 'img/image_79.jpg', 'img/image_80.jpg', 'img/image_81.jpg', 'img/image_82.jpg', 'img/image_83.jpg', 'img/image_84.jpg', 'img/image_85.jpg', 'img/image_86.jpg', 'img/image_87.jpg', 'img/image_88.jpg', 'img/image_89.jpg', 'img/image_90.jpg', 'img/image_91.jpg', 'img/image_92.jpg', 'img/image_93.jpg', 'img/image_94.jpg', 'img/image_95.jpg', 'img/image_96.jpg', 'img/image_97.jpg', 'img/image_98.jpg', 'img/image_99.jpg', 'img/image_100.jpg']; 
const jsons = ['dp_json/1.json', 'dp_json/2.json', 'dp_json/3.json', 'dp_json/4.json', 'dp_json/5.json', 'dp_json/6.json', 'dp_json/7.json', 'dp_json/8.json', 'dp_json/9.json', 'dp_json/10.json', 'dp_json/11.json', 'dp_json/12.json', 'dp_json/13.json', 'dp_json/14.json', 'dp_json/15.json', 'dp_json/16.json', 'dp_json/17.json', 'dp_json/18.json', 'dp_json/19.json', 'dp_json/20.json', 'dp_json/21.json', 'dp_json/22.json', 'dp_json/23.json', 'dp_json/24.json', 'dp_json/25.json', 'dp_json/26.json', 'dp_json/27.json', 'dp_json/28.json', 'dp_json/29.json', 'dp_json/30.json', 'dp_json/31.json', 'dp_json/32.json', 'dp_json/33.json', 'dp_json/34.json', 'dp_json/35.json', 'dp_json/36.json', 'dp_json/37.json', 'dp_json/38.json', 'dp_json/39.json', 'dp_json/40.json', 'dp_json/41.json', 'dp_json/42.json', 'dp_json/43.json', 'dp_json/44.json', 'dp_json/45.json', 'dp_json/46.json', 'dp_json/47.json', 'dp_json/48.json', 'dp_json/49.json', 'dp_json/50.json', 'dp_json/51.json', 'dp_json/52.json', 'dp_json/53.json', 'dp_json/54.json', 'dp_json/55.json', 'dp_json/56.json', 'dp_json/57.json', 'dp_json/58.json', 'dp_json/59.json', 'dp_json/60.json', 'dp_json/61.json', 'dp_json/62.json', 'dp_json/63.json', 'dp_json/64.json', 'dp_json/65.json', 'dp_json/66.json', 'dp_json/67.json', 'dp_json/68.json', 'dp_json/69.json', 'dp_json/70.json', 'dp_json/71.json', 'dp_json/72.json', 'dp_json/73.json', 'dp_json/74.json', 'dp_json/75.json', 'dp_json/76.json', 'dp_json/77.json', 'dp_json/78.json', 'dp_json/79.json', 'dp_json/80.json', 'dp_json/81.json', 'dp_json/82.json', 'dp_json/83.json', 'dp_json/84.json', 'dp_json/85.json', 'dp_json/86.json', 'dp_json/87.json', 'dp_json/88.json', 'dp_json/89.json', 'dp_json/90.json', 'dp_json/91.json', 'dp_json/92.json', 'dp_json/93.json', 'dp_json/94.json', 'dp_json/95.json', 'dp_json/96.json', 'dp_json/97.json', 'dp_json/98.json', 'dp_json/99.json', 'dp_json/100.json'];

const myHtml_cards = images.map(function(path_img, index) {
    var id = index+1
    return '<div class="image_container"><div class="middle"><p class="myText" id="' + id + '"></p></div><img src="' + path_img + '" class="image" alt="portrait" id="images"><div class="middle"><p class="myText" id="' + id + '"></p></div></div>';
    }).join('');
    document.querySelector('.image-grid').innerHTML = myHtml_cards;

    function showjsoncontent(){
        jsons.forEach(function (json_url, index){
            var current_id = index+1
            fetch(json_url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (url) {
                    document.getElementById(current_id).innerHTML +=
                    url[0].name + "<br />" + "<p></p>";
                    for(var i=1; i<url.length; i++) {
                        document.getElementById(current_id).innerHTML +=
                        url[i].trait_type + ": " + url[i].value + "<br />";
                    }
                })
                .catch(function (err) {
                    console.log(err);
                })
        })
    };