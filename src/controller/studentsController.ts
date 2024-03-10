import { Request, Response, } from "express"
import Student from "@/src/model/student"
import dayjs from "dayjs"

const students = {

    /**
     * Lista todos os students do banco de dados
     * @param req 
     * @param res
     * @route GET / 
     * @returns 
     */
    async list(req: Request, res: Response) {

        try {

            //select * from students
            const students = await Student.findAll().then((students) => {

                return students.map((student) => {

                    return {
                        ...student.toJSON(),
                        birthday: dayjs(student.birthday).format('DD/MM/YYYY')
                    }
                })
            })

            //passa os dados para a view students
            return res.render('students', { students: students })

        } catch (error) {
            console.log(error)
            return res.render('error')
        }

    },

    /**
     * Cria um novo registro no banco
     * @param req 
     * @param res
     * @route POST /students 
     * @returns 
     */
    async create(req: Request, res: Response) {

        try {

            const { student, birthday } = req.body

            if (student && birthday) {
                //insert into students
                await Student.create({ name: student, birthday: dayjs(birthday).locale('pt-BR') })
            }

            //redirecionado para a listagem
            res.redirect('/')

        } catch (error) {
            console.log(error)
            return res.render('error')
        }
    },

    /**
     * Remove um registro do banco de dados 
     * @param req 
     * @param res
     * @route  DELETE /students/:id
     * @returns 
     */
    async delete(req: Request, res: Response) {

        try {

            const { id } = req.params

            if (id) {

                //delete from students
                await Student.destroy({ where: { id: id } })
            }

            //redirecionado para a listagem
            res.redirect('/')

        } catch (error) {
            console.log(error)
            return res.render('error')
        }
    }
}

export default students