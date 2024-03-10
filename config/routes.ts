import express from "express";
import students from "@/src/controller/studentsController";

const routes = express.Router()

//Define as rotas da aplicação
routes.get('/', students.list)
routes.post('/students', students.create)
routes.delete('/students/:id', students.delete)

export default routes