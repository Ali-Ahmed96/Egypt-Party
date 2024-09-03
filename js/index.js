$(function () {

    // Home Section

    let sideBarWidth = $(".navBar").outerWidth();
    $("aside").css("left", -sideBarWidth);

    $(".closeIcon").click(function () {
        $("aside").animate({ left: -sideBarWidth });
    })
    $(".openSide").click(function () {
        $("aside").animate({ left: 0 });
    });

    let durationOffset = $("#duration h3").offset().top - 420;
    $("a[href^='#']").click(function (eventInfo) {
        let aHref = eventInfo.target.getAttribute("href");
        let sectionOffset = $(aHref).offset().top;
        $("html,body").animate({ scrollTop: sectionOffset }, 1000);
    });
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > durationOffset) {
            $(".openSide").css("color", "rgba(214, 46, 51, 0.6)");
        }
        else {
            $(".openSide").css("color", "white");
        }
    })


    // Duration Section

    $("#duration h3").click(function () {
        $(this).next().slideToggle();
        $('.inner').not($(this).next()).slideUp();
    })


    //   Details Section 

    let countDown = new Date("dec 31,2024,23:59:59").getTime();
    let remaininglDays = document.querySelector(".days");
    let remaininglHours = document.querySelector(".hours");
    let remaininglminutes = document.querySelector(".minutes");
    let remaininglseconds = document.querySelector(".seconds");
    let stop = setInterval(function () {
        let timeNow = new Date().getTime();
        let setTime = countDown - timeNow;

        let days = Math.floor(setTime / (1000 * 60 * 60 * 24));
        remaininglDays.innerHTML = days < 10 ? `0${days} D` : days + ' D';

        let hours = Math.floor(setTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        remaininglHours.innerHTML = hours < 10 ? `0${hours} h` : hours + ' h';

        let minutes = Math.floor(setTime % (1000 * 60 * 60) / (1000 * 60));
        remaininglminutes.innerHTML = minutes < 10 ? `0${minutes} m` : minutes + " m";

        let seconds = Math.floor(setTime % (1000 * 60) / (1000));
        remaininglseconds.innerHTML = seconds < 10 ? `0${seconds} s` : seconds + " s"

    }, 1000)
    $(".days").click(function () {
        clearInterval(stop)

    })


    // Contact Section 


    function validatEmail() {
        let emailTrue = document.querySelector(".emailTrue")
        let regexEmail = /^[A-Za-z0-9]{4,14}@[a-z]{3,8}\.com$/
        if (regexEmail.test(emailTrue.value) == true) {
            return true

        }
        else {
            $(".wrong").removeClass("invisible");
            $(".emailTrue").addClass("is-invalid");
            $(".messageDelivered").removeClass("d-block");

            return false
        }
    }

    $(".messageBtn").click(function () {
        if (validatEmail() == true) {
            $(".messageDelivered").addClass("d-block");
            $(".wrong").addClass("invisible");
            $(".emailTrue").removeClass("is-invalid");
        }
    })


    let maxlength=100;
    $(".inputMessage").keyup(function(){
        let length=$(this).val().length;
        let remaininglLength=maxlength-length;
        if(remaininglLength==0){
            $(".CharacterReamining").text("your available characters finished");
            $(".charcterFinshed").addClass("d-none");
        }
        else{
            $(".CharacterReamining").text(remaininglLength);
            $(".charcterFinshed").removeClass("d-none");


        }
        
    })


});



