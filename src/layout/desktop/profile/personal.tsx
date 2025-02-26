import profileVideo from '@/assets/videos/profile.mp4';
import { FaFacebookF, FaLinkedinIn, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import AvatarProfile from '../home/components/avatar';
import { GrLinkNext } from 'react-icons/gr';

const Personal = () => {
	return (
		<div className='bg-primary_dark w-screen h-screen overflow-hidden'>
			<video className='w-full' muted autoPlay loop>
				<source src={profileVideo} type='video/mp4' />
				<track kind='captions' src='sampleCaptions.vtt' srcLang='en' />
			</video>
			<article className='absolute top-0 left-0 w-full h-full pt-20 text-white'>
				<div className='max-w-[1440px] w-full m-auto gap-10 py-20 h-full flex justify-center items-center'>
					<div className='flex flex-col gap-16 items-center w-full'>
						<section className='flex flex-col gap-16 items-center'>
							<div
								style={{
									boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
								}}
								className='rounded-full border-primary_dark-20 relative border-[12px] w-fit'>
								<AvatarProfile />
							</div>
							<div className='flex flex-col gap-6'>
								<div className='button-profile'>
									<p className='text-8xl font-semibold uppercase tracking-[20px] text-center actual-text'>
										Minh Tan
									</p>
									<p className='text-8xl text-nowrap font-semibold uppercase tracking-[20px] text-center hover-text'>
										Minh Tan
									</p>
								</div>
								<p className='text-4xl leading-10 tracking-[20px] text-center'>Web Developer</p>
							</div>
						</section>
						<section className='grid grid-cols-3 gap-x-16 gap-y-8 items-start h-fit'>
							<div className='px-4 flex flex-col gap-4 h-full'>
								<p className='text-xl font-semibold'>Contacts</p>
								<ul className=''>
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
								</ul>
							</div>
							<div className='px-4 flex flex-col gap-4 h-full'>
								<p className='text-xl font-semibold'>Socials</p>
								<ul>
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
							<div className='px-4 flex flex-col gap-4 h-full'>
								<p className='text-xl font-semibold'>Address</p>
								<ul>
									<li className='py-1'>
										<div className='flex items-start gap-2'>
											<FaMapMarkerAlt />{' '}
											<p>
												110 Ong Ich Khiem Street, Ward 5, District 11, <br />
												Ho Chi Minh City
											</p>
										</div>
									</li>
								</ul>
							</div>
						</section>
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
