console.log(window.$);

$(".gallery-item").hide();
let active = $(".active");
active.show();

setInterval(() => {
  let active = $(".active");
  let next = active.next();
  if (next.length === 0) {
    next = $(".gallery-item:first-child");
  }
  active.removeClass("active").fadeOut(1000);
  next.addClass("active").fadeIn(1000);
}, 2000);
