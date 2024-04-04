import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Ім'я обов'язкове")
    .max(30, 'Максимальна кількість символів - 30')
    .matches(/^[\sA-Za-zА-Яа-яҐґЄєІіЇїʼ`'-]+$/, "Невірне ім'я"),
  email: yup
    .string()
    .required("E-mail обов'язковий")
    .max(63, 'Максимальна кількість символів - 63')
    .matches(
      /^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Невірний e-mail',
    ),
  message: yup.string(),
  checkbox: yup.boolean().required("Обов'язкове поле"),
});
