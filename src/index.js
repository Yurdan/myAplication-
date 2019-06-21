import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import 'slick-carousel'; 
import addHeader from "./header/header.js";
import { addMain, renderSections } from "./main/main.js";
import sayHi from "./hello";
import section from "./section";

addHeader();
addMain();
sayHi();
section();

window.onload = function () {


    $("#form-btn").on('click', () => {
        $("#main-cards-container").empty();
        const obj = {};
        obj.learning = "learning=" + (document.forms['main-form'].language.value);
        if (obj.learning === "learning=") {
            obj.learning = "";
        };
        obj.level = "level=" + (document.forms['main-form'].skills.value);
        if (obj.level === "level=") {
            obj.level = "";
        }
        obj.gender = "gender=" + (document.forms['main-form'].gender.value);
        if (obj.gender === "gender=") {
            obj.gender = "";
        }

        axios("http://localhost:3000/posts?" + obj.learning + "&" + obj.level + "&" + obj.gender)


            .then(function (response) {
                renderSections(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    })



    // перенести в скрипт формы
    $(".header-nav-btn").on('click', () => {
        $(".main-form").slideToggle()
        if ($(".header-nav-btn").val() == "show form") {
            $(".header-nav-btn").val('hide form')
        }else {
            $(".header-nav-btn").val('show form')
        }
        $("h1").hide();
        
          });


          // слайдер

         
			$('.main-cards-container').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: false,
				prevArrow: '<button class="prev arrow"> <i class="fas fa-angle-left"></i> </button>',
				nextArrow: '<button class="next arrow"><i class="fas fa-angle-right"></i> </button>',
				variableWidth: true,
				dots: true,

			});
			
	

        //   $('.main-cards-container').slick({
        //     infinite: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        //   });
           



    
    
    
    
    
};






