import LogoComponent from '@/components/common/logo';
import Button from '@/core/button';
import Form from '@/core/form';
import Checkbox from '@/core/inputs/checkbox';
import TextField from '@/core/inputs/textField';
import Localize from '@/langs';
import { FcGoogle } from 'react-icons/fc';

interface ISignInProps {
	onChangeSignUp: VoidFunction;
}

function SignIn(props: ISignInProps) {
	return (
		<div className='bg-white/10 px-6 py-4 rounded-md flex flex-col gap-10 min-w-[360px] select-none animate-translateRight'>
			<div className='flex justify-center flex-col items-center'>
				<LogoComponent />
				<div className='mt-2 px-2 py-2 rounded-sm text-center w-full'>
					<h4 className='font-bold text-lg'>
						{Localize('COHESIVE_MUSIC')}
					</h4>
				</div>
			</div>
			<div>
				<h4 className='text-3xl font-bold'>{Localize('SIGN_IN')}</h4>
				<p className='text-xs pt-2'>{Localize('LET_GET_STARTED')} </p>
			</div>
			<div className='px-4'>
				<div className='border-white border flex items-center cursor-pointer hover:text-primary_dark hover:bg-white/80 transition-colors duration-500 gap-2 justify-center py-3 rounded-sm m-auto'>
					<FcGoogle />
					<p className='font-medium'>{Localize('LOGIN_GOOGLE')}</p>
				</div>
				<p className='text-center py-3'>{Localize('OR')}</p>
				<Form
					render={() => {
						return (
							<div className='flex flex-col gap-4'>
								<TextField label='USER_NAME' />
								<TextField label='PASSWORD' />
								<div className='flex justify-between items-center'>
									<Checkbox
										label={{
											direction: 'horizontal',
											text: 'REMEMBER_FOR_30DAYS',
										}}
									/>
									<p className='text-xs underline cursor-pointer hover:text-white/70 transition-colors duration-300'>
										{Localize('FORGOT_PASSWORD')}
									</p>
								</div>
								<div className='pt-6 w-full'>
									<Button text='SIGN_IN' />
								</div>
							</div>
						);
					}}
				/>
				<p
					aria-hidden='true'
					onClick={props.onChangeSignUp}
					className='text-sm py-3 text-center underline cursor-pointer hover:text-white/60 transition-colors duration-300'>
					<span>{Localize('DO_NOT_HAVE_ACCOUNT')}</span>{' '}
					<span className='text-blue-200 hover:text-inherit'>
						{Localize('SIGN_UP')}
					</span>
				</p>
			</div>
		</div>
	);
}

export default SignIn;
