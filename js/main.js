$(document).ready(function () {
  $(".mobile-menu-icon").click(function () {
    $(".left-sidebar").addClass("open");
  });

  $(".sidebar-close-icon").click(function () {
    $(".left-sidebar").removeClass("open");
  });
});

function addCourseBenefit() {
  const divEle = document.querySelector(".add-course-benefit-item");
  divEle.innerHTML += `
            <input type="text" placeholder="Course Benefit" class="form-control mb-1">
        `;
}
