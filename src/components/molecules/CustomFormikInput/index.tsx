import {FieldConfig, useField} from 'formik';
import {InputHTMLAttributes} from 'react';
import Error from 'src/components/atoms/Error';
import Input from 'src/components/atoms/Input';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ICustomFormikInputProps = {label?: string} & InputHTMLAttributes<HTMLInputElement> & FieldConfig<any>;

/**
 * Component for using formik form
 * Derived from Input component
 *
 * @param root0 - Component props
 * @param root0.label - Input label
 * @param root0.className - Extra css clases
 */
export default function CustomFormikInput({label, className, ...props}: ICustomFormikInputProps){
	const [field, meta] = useField(props);
	return (
		<div className={className||''}>
			{!!label && <label htmlFor={field.name}>{label}</label>}
			<Input className={'text-gray-600 px-3 py-2 text-xl w-full'} {...field} {...props}/>
			<Error className='h-3'>{meta.error}</Error>
		</div>
	);
}
