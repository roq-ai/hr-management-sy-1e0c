import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().required(),
  score: yup.number().integer().required(),
  feedback: yup.string().nullable(),
  next_evaluation_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  evaluator_id: yup.string().nullable().required(),
});
