function addCourseBenefit() {
  const divEle = document.querySelector(".add-course-benefit-item");
  divEle.innerHTML += `
            <input type="text" placeholder="Course Benefit" class="form-control mb-1">
        `;
}
