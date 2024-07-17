import { ReactNode } from 'react';
interface IFormRenderProps {}
interface IFormProps {
	children?: ReactNode;
	render?: (formRenderProps: IFormRenderProps) => ReactNode;
}

function Form(props: IFormProps) {
	return <form>{props.render ? props.render({}) : props.children}</form>;
}

export default Form;
