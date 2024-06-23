import LogoComponent from '@/components/common/logo';
import InputPassword from '@/components/input/password';
import Button from '@/core/button';
import Form from '@/core/form';
import TextField from '@/core/inputs/textField';
import Localize from '@/langs';

interface IInformationProps {
	onCreateProfile: VoidFunction;
}

function Information(props: IInformationProps) {
	return (
		<div className='bg-white/10 px-10 py-4 rounded-md flex flex-col gap-10 w-full h-screen select-none animate-translateRight'>
			<div className='flex justify-center flex-col items-center'>
				<LogoComponent />
				<div className='mt-2 px-2 py-2 rounded-sm text-center w-full'>
					<h4 className='font-bold text-lg'>
						{Localize('COHESIVE_MUSIC')}
					</h4>
				</div>
			</div>
			<div>
				<h4 className='text-3xl font-bold'>
					{Localize('CREATE_PROFILE')}
				</h4>
				<p className='text-xs pt-2'>{Localize('LET_GET_STARTED')}</p>
			</div>
			<Form
				render={() => {
					return (
						<div className='flex flex-col gap-12'>
							<div className='flex flex-col gap-6'>
								<TextField label='FIRST_NAME' />
								<TextField label='LAST_NAME' />
								<InputPassword label='PASSWORD' />
							</div>
							<div className='pt-[26px] w-full'>
								<Button
									onClick={props.onCreateProfile}
									text='GET_START'
								/>
							</div>
						</div>
					);
				}}
			/>
		</div>
	);
}

export default Information;
