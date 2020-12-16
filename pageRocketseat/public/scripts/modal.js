const modalOverlay = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')

for (let course of courses) {
    course.addEventListener("click", () => {
        const imgId = course.getAttribute("id")
        window.location.href = `/course?id=${imgId}`
    })
}

