import {Form, Formik} from 'formik';
import {Link} from 'react-router-dom';
import Button from 'src/components/atoms/Button';
import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import CustomFormikInput from 'src/components/molecules/CustomFormikInput';
import {loginSchema, newLoginCredentials} from 'src/schemas/login.schema';

/**
 * Login Form Screen
 */
export default function Login(){
	return (
		<Container className='md:py-60'>
			<Card className='bg-bg1 max-w-screen-md w-full h-full flex flex-col justify-center items-center'>
				<div className='text-gray-600 font-bold text-3xl py-12 text-center'>Iniciar sesión</div>
				<div className='flex-1 w-8/12'>
					<Formik onSubmit={console.log} initialValues={newLoginCredentials()} validationSchema={loginSchema}>
						<Form>
							<CustomFormikInput placeholder='Correo' className='my-5' name='email'/>
							<CustomFormikInput placeholder='Contraseña' className='my-5' name='password'/>
							<div className='flex flex-col-reverse md:flex-row  justify-between mt-16 items-center'>
								<Link to={'../register'} className='underline text-primary '> Crear cuenta</Link>
								<Button className='mb-6 md:mb-0' type='submit'>Siguiente</Button>
							</div>
						</Form>
					</Formik>
				</div>
			</Card>
		</Container>
	);
}
