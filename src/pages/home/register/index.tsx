import {Form, Formik} from 'formik';
import {Link} from 'react-router-dom';
import Button from 'src/components/atoms/Button';
import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import CustomFormikInput from 'src/components/molecules/CustomFormikInput';
import {newRegisterCredentials, registerSchema} from 'src/schemas/register.schema';

/**
 * Register form screen
 */
export default function Register(){
	return (
		<Container>
			<Card className='bg-bg1 max-w-screen-md w-full h-full md:h-auto flex flex-col justify-center items-center py-20'>
				<div className='text-gray-600 font-bold my-4 text-3xl text-center flex-1 flex items-center'>Crear cuenta</div>
				<div className='flex-[3] md:w-8/12 w-10/12'>
					<Formik onSubmit={console.log} initialValues={newRegisterCredentials()} validationSchema={registerSchema}>
						<Form>
							<CustomFormikInput placeholder='Nombre de usuario' className='my-5' name='username'/>
							<CustomFormikInput placeholder='Correo' className='my-5' name='email'/>
							<div className='flex flex-col md:flex-row md:my-5'>
								<CustomFormikInput placeholder='Contraseña' className='md:my-0 md:mr-3' name='password'/>
								<CustomFormikInput placeholder='Confirmar Contraseña' className='my-5 md:my-0 md:ml-3' name='confirm_password'/>
							</div>
							<div className='flex flex-col-reverse md:flex-row  justify-between mt-16 items-center'>
								<Link to={'../login'} className='underline text-primary '>Iniciar sesión</Link>
								<Button className='mb-6 md:mb-0' type='submit'>Siguiente</Button>
							</div>
						</Form>
					</Formik>
				</div>
			</Card>
		</Container>
	);
}
