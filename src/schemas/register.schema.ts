import {isEmailInUse} from 'src/services/user';
import * as Yup from 'yup';

export const registerSchema = Yup.object({
	username: Yup.string().min(2, 'Su nombre de usuario debe contener almenos 2 letras')
		.ensure().required('Ingrese su nombre de usuario'),
	email: Yup.string()
		.email()
		.required('Ingrese su correo electrónico')
		.test('uniqueEmail', 'Este correo ya se encuentra registrado', async(value)=>{
			const inUse = await isEmailInUse(value);
			return !inUse;
		}),
	password: Yup.string().ensure().required('Ingrese su contraseña'),
	confirm_password: Yup.string().required('Confirme su contraseña').test('password-match', 'Las contraseñas no coinciden', function(value){
		return this.parent.password === value;
	})
});

export type TRegisterCredentials = Yup.InferType<typeof registerSchema>;

/**
 * Default values for Register Credentials
 */
export function newRegisterCredentials(): TRegisterCredentials{
	return{
		email: '', 
		username: '',
		password: '',
		confirm_password: '',
	}; 
}
