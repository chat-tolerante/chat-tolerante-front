import * as Yup from 'yup';

export const loginSchema = Yup.object({
	email: Yup.string().email('Correo inválido').required('Ingrese su correo electrónico'),
	password: Yup.string().ensure().required('Ingrese su contraseña')
});

export type TLoginCredentials = Yup.InferType<typeof loginSchema>;

/**
 * Default values for Login Credentials
 */
export function newLoginCredentials(): TLoginCredentials{
	return {email: '', password: ''};
}
