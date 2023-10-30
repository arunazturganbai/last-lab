// Task 1
$("#togglePassword").click(function () {
    var passwordField = $("#passwordField");
    if (passwordField.attr("type") === "password") {
        passwordField.attr("type", "text");
    } else {
        passwordField.attr("type", "password");
    }
});

// Task 2
$("#agreeCheckbox").click(function () {
    if ($(this).is(":checked")) {
        $("#submitBtn").prop("disabled", false);
    } else {
        $("#submitBtn").prop("disabled", true);
    }
});

// Task 3
$("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

// Task 4
$(document).ready(function () {
    function changeBackgroundImage() {
        $("#elementWithBgImage").css("background-image", "url('https://t3.ftcdn.net/jpg/05/60/70/86/360_F_560708630_ffrv3A1B6malaFgrkmO9ySGTCC1Vfqca.jpg')");
    }
    $("#changeBgImage").click(function () {
        changeBackgroundImage();
    });
});

// Task 5
$("#textarea").on("input", function () {
    var maxLength = 100;
    var currentLength = $(this).val().length;
    var remaining = maxLength - currentLength;
    $("#charCount").text(remaining);
});

// Task 6
$("#fadeParagraph").click(function () {
    $(this).animate({ opacity: 0 }, 1000);
});

// Task 7
$("#btn1").click(function () {
    $("#box").animate({ height: "200px", width: "200px" }, 1000);
});

$("#btn2").click(function () {
    $("#box").animate({ height: "100px", width: "100px" }, 1000);
});
