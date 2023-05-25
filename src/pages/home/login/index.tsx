import {Form, Formik} from 'formik';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from 'src/components/atoms/Button';
import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import Error from 'src/components/atoms/Error';
import CustomFormikInput from 'src/components/molecules/CustomFormikInput';
import useUser from 'src/hooks/user/useUser';
import {TLoginCredentials, loginSchema, newLoginCredentials} from 'src/schemas/login.schema';

/**
 * Login Form Screen
 */
export default function Login() {
	const {login} = useUser();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const submit = async(values: TLoginCredentials)=> {
		try{
			setError('');
			setLoading(true);
			await login(values);
		}catch(e) {
			setError(JSON.stringify(e));
			setLoading(false);
		}
	};

	return (
		<Container>
			<Card className='bg-bg1 max-w-screen-md w-full h-full md:h-auto flex flex-col items-center py-20'>
				<div className='text-gray-600 font-bold my-4 text-3xl text-center flex-1 flex items-center'>
					Iniciar sesión
				</div>
				<Error>
					{error}
				</Error>
				<div className='flex-[3] md:w-8/12 w-10/12'>
					<Formik onSubmit={submit}
						initialValues={newLoginCredentials()}
						validationSchema={loginSchema}>
						<Form >
							<CustomFormikInput type='email'
								placeholder='Correo'
								className='my-5'
								name='email'/>
							<CustomFormikInput type='password'
								placeholder='Contraseña'
								className='my-5'
								name='password'/>
							<div className='flex flex-col-reverse md:flex-row  justify-between mt-16 items-center'>
								<Link to={'../register'} className='underline text-primary '>
									Crear cuenta
								</Link>
								<Button loading={loading}
									className='mb-6 md:mb-0 px-5 py-3 w-40'
									type='submit'>
									Siguiente
								</Button>
							</div>
						</Form>
					</Formik>
				</div>
			</Card>
		</Container>
	);
}
