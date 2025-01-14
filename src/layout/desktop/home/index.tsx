/* eslint-disable jsx-a11y/alt-text */
import ItemTool from '@/components/ui/items/tool';
import ResponsiveDesktop from '@/components/ui/responsive/desktop';
import Localize from '@/langs';
import { folders, headers, tabs } from '@/pages/home/data/headers';
import { sliceToolControl } from '@/redux/slice';
import { FaRegTimesCircle, FaRegWindowMinimize } from 'react-icons/fa';
import reactTs from 'assets/file-type-reactts.svg';

import {
	VscArrowLeft,
	VscArrowRight,
	VscChevronDown,
	VscChevronRight,
	VscChromeRestore,
	VscClose,
	VscCollapseAll,
	VscDebugAlt,
	VscExtensions,
	VscFiles,
	VscGitCommit,
	VscInfo,
	VscLayout,
	VscLayoutSidebarLeft,
	VscLayoutSidebarLeftOff,
	VscLiveShare,
	VscNewFile,
	VscNewFolder,
	VscRefresh,
	VscSearch,
	VscSourceControl,
	VscVscode,
	VscWand,
} from 'react-icons/vsc';
import ItemTerminal from '@/components/ui/items/terminal';
export function handleStyleViewTool() {
	const isViewTool = sliceToolControl.useGetState().open;
	const sliceData = isViewTool ? 5 : 7;
	const className = isViewTool ? '2xl:grid-cols-5' : '2xl:grid-cols-7';
	return {
		className,
		sliceData,
	};
}
function HomeDesktop() {
	return (
		<ResponsiveDesktop>
			<div className='bg-primary_dark select-none'>
				<article className='flex bg-primary_dark-20'>
					<div className='w-full items-center justify-center'>
						<p className='text-base text-center py-2 text-white font-semibold'>portfolio - Mr.Tan</p>
					</div>
					<div className='flex items-center justify-end text-white gap-6 px-2'>
						<div className='-translate-y-1'>
							<FaRegWindowMinimize />
						</div>
						<div>
							<VscChromeRestore />
						</div>
						<div>
							<FaRegTimesCircle className='text-lg' />
						</div>
					</div>
				</article>
				<article className='bg-white flex gap-4 py-1 p-2'>
					{headers.map((nav) => {
						return (
							<div key={nav.navId}>
								<p className='text-sm font-normal cursor-default'>{Localize(nav.localize as string)}</p>
							</div>
						);
					})}
				</article>
				<article className='bg-primary_dark-10 flex items-center'>
					<div className='w-full flex justify-center items-center py-1.5 gap-3 text-white'>
						<div className='cursor-default'>
							<VscArrowLeft />
						</div>
						<div className='cursor-default'>
							<VscArrowRight />
						</div>
						<div className='flex items-center gap-1 bg-primary_dark-20 px-2 py-1 rounded-md justify-center w-96 border-primary_dark border'>
							<VscSearch className='text-sm' />
							<p className='text-sm'>portfolio</p>
						</div>
					</div>
					<div className='flex text-white gap-2 p-2'>
						<div>
							<VscLayoutSidebarLeft />
						</div>
						<div className='rotate-[270deg]'>
							<VscLayoutSidebarLeftOff />
						</div>
						<div className='rotate-180'>
							<VscLayoutSidebarLeftOff />
						</div>
						<div>
							<VscLayout />
						</div>
					</div>
				</article>
				<article
					style={{
						height: 'calc(100dvh - 110px)',
					}}
					className='border-t border-primary_dark-20 flex'>
					<div className='py-2'>
						<ItemTool isSelect icon={<VscFiles />} />
						<ItemTool icon={<VscLiveShare />} />
						<ItemTool icon={<VscExtensions />} />
						<ItemTool icon={<VscGitCommit />} />
						<ItemTool icon={<VscDebugAlt />} />
						<ItemTool icon={<VscSourceControl />} />
						<ItemTool icon={<VscSearch />} />
					</div>
					<div className='border-r border-l border-primary_dark-20 flex flex-col gap-4 p-2 min-w-96'>
						<div className='flex items-center justify-between px-2'>
							<p className='text-xs text-white'>FOLDERS: PORTFOLIO</p>
							<div className='flex text-white gap-2'>
								<VscNewFile />
								<VscNewFolder />
								<VscRefresh />
								<VscCollapseAll />
							</div>
						</div>
						<div className='flex flex-col gap-2 px-2'>
							{folders.map((folder) => {
								const hasChild = folder.children;
								if (folder.file?.icon) {
									return (
										<div key={folder.navId} className='text-white flex items-center gap-2'>
											{folder.file?.icon ? (
												<img className='w-4' src={folder.file.icon as string} />
											) : (
												<VscChevronRight />
											)}

											<p className='text-sm'>{folder.localize}</p>
										</div>
									);
								}

								return (
									<div key={folder.navId} className='flex flex-col gap-2'>
										<div className='text-white flex items-center gap-2'>
											{hasChild ? <VscChevronDown /> : <VscChevronRight />}
											<p className='text-sm'>{folder.localize}</p>
										</div>
										{hasChild && (
											<div className='px-4 flex flex-col gap-2'>
												{folder.children?.map((child) => {
													const hasChildLv = child.children;

													return (
														<div key={child.navId} className='px-4 flex flex-col gap-2'>
															<div className='text-white flex items-center gap-2'>
																{child.file?.icon ? (
																	<img
																		className='w-4'
																		src={child.file.icon as string}
																	/>
																) : (
																	<VscChevronRight />
																)}

																<p className='text-sm'>{child.localize}</p>
															</div>
															{hasChildLv &&
																child.children?.map((childv) => {
																	return (
																		<div
																			key={childv.navId}
																			className='px-4 flex flex-col gap-2'>
																			<div className='text-white flex items-center gap-2'>
																				{childv.file?.icon ? (
																					<img
																						className='w-4'
																						src={childv.file.icon as string}
																					/>
																				) : (
																					<VscChevronRight />
																				)}

																				<p className='text-sm'>
																					{childv.localize}
																				</p>
																			</div>
																		</div>
																	);
																})}
														</div>
													);
												})}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
					<div className='w-full'>
						<div className='flex'>
							{tabs.map((tab) => {
								return (
									<div
										key={tab.navId}
										className={`text-white flex items-center gap-2  py-2 px-3 relative bg-primary_dark-20/40`}>
										<img className='w-4' src={tab?.file?.icon as string} />
										<p className='text-xs'>{tab.localize}</p>
										<div className='absolute top-0 left-0 w-full h-0.5 bg-[#0D92F4] rounded-b' />
									</div>
								);
							})}
						</div>
						<div className='border-t border-primary_dark-20 bg-primary_dark-20/20 h-full'>
							<div className='p-3'>
								<div className='flex gap-1 items-center text-sm text-white'>
									src <VscChevronRight />
									page <VscChevronRight />
									<div className='flex gap-1 items-center'>
										<img src={reactTs} className='w-4' alt='' />
										<p>index.tsx</p>
									</div>
								</div>
							</div>
							<div className='h-full'>
								<div className='flex items-center w-full justify-center px-3'>
									<VscVscode className='text-[240px]' />
								</div>
								<div className='h-full bg-[#232323] border-t border-primary_dark-20'>
									<div className='flex justify-between items-center pt-3 px-4'>
										<div className='flex gap-6'>
											<ItemTerminal text='OUT_PUT' />
											<ItemTerminal text='DEBUG_CONSOLE' />
											<ItemTerminal total={6} isSelect text='TERMINAL' />
											<ItemTerminal text='PORTS' />
											<ItemTerminal text='GIT_LENS' />
											<ItemTerminal text='SPELL_CHECKER' />
											<ItemTerminal text='DEVTOOLS' />
										</div>
										<div className='size-6 flex items-center justify-center text-white'>
											<VscClose />
										</div>
									</div>
									<div className='w-full bg-primary_dark-20 grid grid-cols-2 px-3 py-1'>
										<div className='flex items-center text-xs gap-1 text-white'>
											<VscChevronDown />
											<p className='uppercase'>{Localize('PROBLEMS')}</p>
										</div>
										<div className='flex items-center text-xs gap-1 text-white'>
											<VscChevronDown />
											<p className='uppercase'>{Localize('TERMINAL')}</p>
										</div>
									</div>
									<div className='w-full grid grid-cols-2 px-3 py-1 h-full'>
										<div>
											<div className='flex items-start text-xs gap-1 text-white px-4'>
												<VscChevronDown />
												<img className='w-4' src={reactTs} alt='' />
												<p>index.tsx</p>
												<p>src/page</p>
												<div className='size-4 bg-[#7D7C7C] flex items-center justify-center rounded-full'>
													<p className='text-[10px]'>6</p>
												</div>
											</div>
											<div className='px-4 py-2 flex flex-col gap-2'>
												<div className='flex gap-1 items-end'>
													<VscInfo className='text-[#0D92F4]' />
													<p className='text-xs text-white'>
														{`"reactts:"`} Unknown word. cSpell {`[Ln8, Col 39]`}
													</p>
												</div>
												<div className='flex gap-1 items-end'>
													<VscInfo className='text-[#0D92F4]' />
													<p className='text-xs text-white'>
														{`"childv:"`} Unknown word. cSpell {`[Ln168, Col 38]`}
													</p>
												</div>
												<div className='flex gap-1 items-end'>
													<VscInfo className='text-[#0D92F4]' />
													<p className='text-xs text-white'>
														{`"reactts:"`} Unknown word. cSpell {`[Ln171, Col 25]`}
													</p>
												</div>
												<div className='flex gap-1 items-end'>
													<VscInfo className='text-[#0D92F4]' />
													<p className='text-xs text-white'>
														{`"childv:"`} Unknown word. cSpell {`[Ln174, Col 22]`}
													</p>
												</div>
												<div className='flex gap-1 items-end'>
													<VscInfo className='text-[#0D92F4]' />
													<p className='text-xs text-white'>
														{`"reactts:"`} Unknown word. cSpell {`[Ln184, Col 23]`}
													</p>
												</div>
												<div className='flex gap-1 items-end'>
													<VscInfo className='text-[#0D92F4]' />
													<p className='text-xs text-white'>
														{`"reactts:"`} Unknown word. cSpell {`[Ln269, Col 18]`}
													</p>
												</div>
											</div>
										</div>
										<div className='flex flex-col items-start text-xs gap-1 text-white border-l border-primary_dark-20 px-4 py-1'>
											<p className='text-sm'>
												<span className='text-[#16C47F] font-semibold'>minhtan@phelan-ly:</span>{' '}
												<span className='text-[#0D92F4] font-semibold'>
													~/Documents/project/portfolio
												</span>
												<span className='text-xs'>$</span> <span>npm install</span>
											</p>
											<div className='flex'>
												<div className='w-6 py-1 flex justify-around items-center bg-white/80 text-primary_dark'>
													<VscWand />
												</div>
												<div className='bg-[#0D92F4]/80 px-2 flex items-center text-primary_dark text-sm'>
													History restored
												</div>
											</div>
											<p className='text-sm'>
												<span className='text-[#16C47F] font-semibold'>minhtan@phelan-ly:</span>{' '}
												<span className='text-[#0D92F4] font-semibold'>
													~/Documents/project/portfolio
												</span>
												<span className='text-xs'>$</span> <span>npm run dev</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</ResponsiveDesktop>
	);
}

export default HomeDesktop;
