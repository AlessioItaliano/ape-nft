import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .transform(value => value.trim())
    .min(3, 'At least 3 characters')
    .matches(/^@[a-zA-Z0-9]+$/, 'Wrong discord')
    .required('Wrong discord'),
  walletAddress: yup
    .string()
    .transform(value => value.trim())
    .length(19, 'Must be exactly 19 characters')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Only letters and digits'
    )
    .required('Wrong address'),
});
