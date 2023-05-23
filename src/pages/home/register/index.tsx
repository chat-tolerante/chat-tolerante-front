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
		<Container className='md:py-52'>
			<Card className='bg-bg1 max-w-screen-md w-full h-full flex flex-col justify-center items-center'>
				<div className='text-gray-600 font-bold text-3xl py-12 text-center'>Crear cuenta</div>
				<div className='flex-1 w-8/12'>
					<Formik onSubmit={console.log} initialValues={newRegisterCredentials()} validationSchema={registerSchema}>
						<Form>
							<CustomFormikInput placeholder='Nombre de usuario' className='my-5' name='username'/>
							<CustomFormikInput placeholder='Correo' className='my-5' name='email'/>
							<div className='flex flex-col md:flex-row md:my-5'>
								<CustomFormikInput placeholder='Contraseña' className='my-5  md:my-0 mr-3' name='password'/>
								<CustomFormikInput placeholder='Contraseña' className='my-5 md:my-0 ml-3' name='confirm_password'/>
							</div>
							<div className='flex flex-col-reverse md:flex-row  justify-between mt-16 items-center'>
								<Link to={'../login'} className='underline text-primary '> Crear cuenta</Link>
								<Button className='mb-6 md:mb-0' type='submit'>Siguiente</Button>
							</div>
						</Form>
					</Formik>
				</div>
			</Card>
		</Container>
	);
}
