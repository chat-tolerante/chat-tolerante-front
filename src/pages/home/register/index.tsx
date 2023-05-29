import {Form, Formik} from 'formik';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from 'src/components/atoms/Button';
import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import Error from 'src/components/atoms/Error';
import CustomFormikInput from 'src/components/molecules/CustomFormikInput';
import useUser from 'src/hooks/user/useUser';
import {TRegisterCredentials, newRegisterCredentials, registerSchema} from 'src/schemas/register.schema';
import {errorToString} from 'src/services/utils';

/**
 * Register form screen
 */
export default function Register() {
	const {register} = useUser();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const submit = async(values: TRegisterCredentials)=> {
		try{
			setError('');
			setLoading(true);
			await register(values);
		}catch(e) {
			setError(errorToString(e));
			setLoading(false);
		}
	};

	return (
		<Container>
			<Card className='bg-bg1 max-w-screen-md w-full h-full md:h-auto flex flex-col justify-center items-center py-20'>
				<div className='text-gray-600 font-bold my-4 text-3xl text-center flex-1 flex items-center'>
					Crear cuenta
				</div>
				<Error>
					{error}
				</Error>
				<div className='flex-[3] md:w-8/12 w-10/12'>
					<Formik onSubmit={submit}
						initialValues={newRegisterCredentials()}
						validationSchema={registerSchema}>
						<Form>
							<CustomFormikInput placeholder='Nombre de usuario'
								className='my-5'
								name='name'/>
							<CustomFormikInput placeholder='Correo'
								className='my-5'
								name='email'/>
							<div className='flex flex-col md:flex-row md:my-5'>
								<CustomFormikInput type='password'
									placeholder='Contraseña'
									className='md:my-0 md:mr-3'
									name='password'/>
								<CustomFormikInput type='password'
									placeholder='Confirmar Contraseña'
									className='my-5 md:my-0 md:ml-3'
									name='confirm_password'/>
							</div>
							<div className='flex flex-col-reverse md:flex-row  justify-between mt-16 items-center'>
								<Link to={'../login'} 
									className='underline text-primary '>
									Iniciar sesión
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
