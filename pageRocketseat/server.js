const express = require('express')
const nunjucks = require('nunjucks')

const courses = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res) {
    return res.render("page-home.njk")
})

server.get("/contents", function(req, res) {
    return res.render("contents.njk", {items: courses})
})

server.get("/course", function(req, res) {
    const id = req.query.id

    const course = courses.find(function(course) {
        return course.id == id
    })

    if (!course) {
        return res.send("Course not found!!")
    }

    return res.render("course.njk", {item: course})
})

server.listen(5000, function() {
    console.log("Server is running")
})