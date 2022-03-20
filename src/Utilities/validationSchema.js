import * as Yup from 'yup';

const catSchema = Yup.object().shape({
    Name: Yup.string().max(50, 'Max 50 Characters').required ("Field is required"),
    Description: Yup.string().max(100, 'Max 100 Characters')
})

const toDoSchema = Yup.object().shape({
    Task: Yup.string().required("Field is required"),
    DueDate: Yup.date(),
    CategoryId: Yup.number().required("Field is required")
})
export {toDoSchema};
export default catSchema;