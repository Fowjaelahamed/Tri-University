$(document).ready(function () {


  let num = [];
  $("#bscprogramList li").each(function () {
    let val = $(this).attr("id");
    num.push(val);
  });

  // let parentview = [];
  // $(".btn[name='overview']").each(function (){
  //   let a = $(this).parent().parent().attr("name");
  //   parentview.push(a);
  // })
  //   for academic page 
  $(function () {
    $(".btn").on("click", function (e) {
      e.preventDefault();
      let parentName = $(this).parent().parent().attr("name");
      num.forEach(function(n){
        if(n === parentName){
          if ($("#"+parentName+ this.name+"div").hasClass("displaynone")) {
            $("#"+parentName+this.name+"div").removeClass("displaynone");
          } else {
            $("#"+parentName+this.name+"div").addClass("displaynone");
          }
        } else {
          if (!$("#" + n +this.name+ "div").hasClass("displaynone")) {
            $("#" + n + this.name+"div").addClass("displaynone");
          }
        }
      });

      // $(".btn[name='overview']").parent().parent().attr("name")

      // if (!$("#overviewdiv").hasClass("displaynone")) {
      //   $("#overviewdiv").addClass("displaynone");
      // }

      $(".displaynone").hide();
      $(".btn").removeClass("active")
      $("#"+parentName+ this.name+"div").show();
      $(this).addClass("active");
      console.log($("#"+parentName+ this.name+"div"),$(this).parent().parent().attr("name"));
    });
  });

// bsc program aside 
  $(function () {
    $("#bscprogramList li").on("click", function (e) {
      e.preventDefault();
      let selected = this.id;
      let selectedDiv = "#" + selected + "div";
      num.forEach(function (n) {
        if (n === selected) {
          if ($(selectedDiv).hasClass("d-none")) {
            $(selectedDiv).removeClass("d-none");
          } else {
            $(selectedDiv).addClass("d-none");
          }
        } else {
          if (!$("#" + n + "div").hasClass("d-none")) {
            $("#" + n + "div").addClass("d-none");
          }
        }
      });

      $(".d-none").hide();
      $(selectedDiv).show();
      console.log(num);
    });
  });
});