import * as Yup from 'yup';

export const registerSchema = Yup.object({
	name: Yup.string().min(2).ensure().required('Ingrese su nombre de usuario'),
	email: Yup.string().email().required('Ingrese su correo electrónico'),
	password: Yup.string().ensure().required('Ingrese su contraseña'),
	confirmPassword: Yup.string().required('Confirme su contraseña').test('password-match', '', function(value){
		return this.parent.password === value;
	})
});

export type TRegisterCredentials = Yup.InferType<typeof registerSchema>;

export function newRegisterCredentials(): TRegisterCredentials{
	return{
		email: '', 
		name: '',
		password: '',
		confirmPassword: '',
	}; 
}
