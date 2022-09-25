var summa = 0.0285
var loxlama = 50

function hesab() {
  $(".n1").val(Math.ceil(Number($(".ser").val()) * summa))
  $(".n2").val(Math.ceil(Number($(".ser").val()) * summa) + loxlama)
}

$(".ser").on("keyup", function () {
  hesab()
});

var a = 0
$("select").click(function () {
  a = $(this).val();
  if (a == 1) {
    summa = 0.0285
  }
  else if (a == 2) {
    summa = 1.71
  }
  else if (a == 3) {
    summa = 1.7
  }
  hesab()
});

$(".inval").on("keyup", function () {
  loxlama = Number($(this).val());
  $("p").text("+"+loxlama);
});