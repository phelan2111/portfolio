import profileVideo from '@/assets/videos/profile.mp4';
import { FaFacebookF, FaLinkedinIn, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import AvatarProfile from '../home/components/avatar';
import { GrLinkNext } from 'react-icons/gr';
import LoaderNicePanda from '@/components/ui/loader/nicePanda';

const Personal = () => {
	return (
		<div className='bg-primary_dark w-screen h-screen overflow-hidden'>
			<video className='w-full' muted autoPlay loop>
				<source src={profileVideo} type='video/mp4' />
				<track kind='captions' src='sampleCaptions.vtt' srcLang='en' />
			</video>
			<article className='absolute top-0 left-0 w-full h-full pt-20 text-white'>
				<div className='max-w-[1440px] w-full m-auto gap-10 py-20 h-full'>
					<div className='flex flex-col gap-16 items-center w-full'>
						<div className='flex flex-col items-center gap-8 justify-center'>
							<div className='flex flex-col justify-center items-center gap-8'>
								<div
									style={{
										boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
									}}
									className='rounded-full border-primary_dark-20 relative border-[12px] w-fit'>
									<AvatarProfile />
								</div>
								<section className='flex flex-col items-center gap-6'>
									<div className='button-profile text-nowrap w-fit'>
										<p className='text-8xl font-semibold uppercase tracking-[20px] text-center actual-text'>
											Minh Tan
										</p>
										<p className='text-8xl text-nowrap font-semibold uppercase tracking-[20px] text-center hover-text'>
											Minh Tan
										</p>
									</div>
									<p className='text-4xl leading-10 tracking-[20px] text-center'>Web Developer</p>
								</section>
							</div>
							<div className='flex gap-16 py-10 w-full'>
								<section className='flex flex-col gap-4'>
									<p className='flex items-center gap-6 font-bold uppercase text-2xl'>
										<LoaderNicePanda /> EDUCATION
									</p>
									<div className='px-14 border-white relative flex flex-col gap-4'>
										<div className='w-1 h-full absolute top-0 left-3 bg-white rounded-full' />
										<p className='font-bold text-lg'>
											Information technology -{' '}
											<span className='text-sm font-light'>Aug 2018 - July 2022</span>
										</p>
										<p>
											<span className='font-bold'>TDM University</span> - 06 Tran Van On Street,
											Phu Hoa Ward, Thu Dau Mot
										</p>
										<ul className='list-disc px-4'>
											<li>
												<p>
													GPA: <span className='font-bold'>3.0</span>
												</p>
											</li>
											<li>
												<p>
													<span className='font-bold'>Software Engineer</span>
												</p>
											</li>
										</ul>
									</div>
								</section>
								<section className='flex flex-col gap-4'>
									<p className='flex items-center gap-6 font-bold uppercase text-2xl'>
										<LoaderNicePanda /> CONTACTS
									</p>
									<div className='px-14 border-white relative flex flex-col gap-4'>
										<div className='w-1 h-full absolute top-0 left-3 bg-white rounded-full' />
										<ul className='list-disc px-4'>
											<li className='py-1'>
												<div className='flex items-start gap-2'>
													<FaPhoneAlt /> (+85) 82 75 8423
												</div>
											</li>
											<li className='py-1'>
												<div className='flex items-start gap-2'>
													<FaMailBulk />{' '}
													<a className='underline' href='mailto:phelan.minhtanly@gmail.com'>
														phelan.minhtanly@gmail.com
													</a>
												</div>
											</li>
											<li className='py-1'>
												<div className='flex items-start gap-2'>
													<FaFacebookF />{' '}
													<a
														target='_blank'
														href='https://m.me/phelan.minhtanly'
														className='text-base underline'
														rel='noreferrer'>
														facebook.phelan.minhtanly
													</a>
												</div>
											</li>
											<li className='py-1'>
												<div className='flex items-start gap-2'>
													<FaLinkedinIn className='text-lg' />{' '}
													<a
														target='_blank'
														href='https://www.linkedin.com/messaging/thread/minh-tân-lý-223b09326/'
														className='text-base underline'
														rel='noreferrer'>
														linkdedIn.phelan.minhtanly
													</a>
												</div>
											</li>
										</ul>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</article>
			<article className='fixed bottom-[70px] right-[0%]'>
				<div className='flex group items-end bg-gradient-to-r from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 px-5 rounded-l-full'>
					<div className='text-white w-full h-full'>
						<div className='transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-6 relative'>
							<p className='text-sm uppercase text-nowrap tracking-[10px] group-hover:translate-x-2 transition-all duration-500 italic'>
								<span className='font-bold text-lg'>work</span>
							</p>
							<div className='group-hover:translate-x-3 transition-all duration-500'>
								<GrLinkNext className='text-xl' />
							</div>
						</div>
					</div>
				</div>
			</article>
			<article className='fixed top-[140px] left-0'>
				<div className='flex group items-end bg-gradient-to-l from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 pr-7 pl-4 rounded-r-full'>
					<div className='text-white w-full h-full'>
						<div className=' transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-6 relative'>
							<div className='group-hover:-translate-x-3 transition-all rotate-180 duration-500'>
								<GrLinkNext className='text-xl' />
							</div>
							<p className='text-sm uppercase text-nowrap leading-10 tracking-[10px] group-hover:-translate-x-2 transition-all duration-500 italic'>
								<span className='font-bold text-lg'>home</span>
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Personal;
