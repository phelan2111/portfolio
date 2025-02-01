import { Helper } from '@/utils/helper';
import { FolderNav, HeadersNav } from '../types';
import reactTs from 'assets/file-type-reactts.svg';
import bolt from 'assets/file-type-bolt.svg';
import prettier from 'assets/file-type-light-prettier.svg';
import eslint from 'assets/file-type-eslint.svg';
import html from 'assets/file-type-html.svg';
import node from 'assets/file-type-node2.svg';
import scss from 'assets/file-type-scss.svg';
import tail from 'assets/file-type-tailwind.svg';
import tsConfig from 'assets/file-type-tsconfig.svg';
import postcss from 'assets/file-type-postcss.svg';
import pro from 'assets/programming-language-bash02.svg';
import git from 'assets/git.svg';

export const headers: HeadersNav[] = [
	{
		localize: 'FILE',
		navId: Helper.randomKey(),
	},
	{
		localize: 'EDIT',
		navId: Helper.randomKey(),
	},
	{
		localize: 'SELECTION',
		navId: Helper.randomKey(),
	},
	{
		localize: 'VIEW',
		navId: Helper.randomKey(),
	},
	{
		localize: 'GO',
		navId: Helper.randomKey(),
	},
	{
		localize: 'RUN',
		navId: Helper.randomKey(),
	},
	{
		localize: 'TERMINAL',
		navId: Helper.randomKey(),
	},
	{
		localize: 'HELP',
		navId: Helper.randomKey(),
	},
];

export const folders: FolderNav[] = [
	{
		localize: 'node_modules',
		navId: Helper.randomKey(),
	},
	{
		localize: 'public',
		navId: Helper.randomKey(),
	},
	{
		localize: 'src',
		navId: Helper.randomKey(),
		children: [
			{
				localize: 'assets',
				navId: Helper.randomKey(),
			},
			{
				localize: 'layout',
				navId: Helper.randomKey(),
			},
			{
				localize: 'page',
				navId: Helper.randomKey(),
				children: [
					{
						localize: 'index.tsx',
						navId: Helper.randomKey(),
						file: {
							icon: reactTs,
						},
					},
				],
			},
			{
				localize: 'redux',
				navId: Helper.randomKey(),
			},
			{
				localize: 'routes',
				navId: Helper.randomKey(),
			},
			{
				localize: 'styles',
				navId: Helper.randomKey(),
			},
			{
				localize: 'utils',
				navId: Helper.randomKey(),
			},
			{
				localize: 'App.ts',
				navId: Helper.randomKey(),
				file: {
					icon: reactTs,
				},
			},
			{
				localize: 'index.scss',
				navId: Helper.randomKey(),
				file: {
					icon: scss,
				},
			},
			{
				localize: 'index.tsx',
				navId: Helper.randomKey(),
				file: {
					icon: reactTs,
				},
			},
		],
	},
	{
		localize: '.eslintignore',
		navId: Helper.randomKey(),
		file: {
			icon: eslint,
		},
	},
	{
		localize: '.eslintrc.cjs',
		navId: Helper.randomKey(),
		file: {
			icon: eslint,
		},
	},
	{
		localize: '.gitignore',
		navId: Helper.randomKey(),
		file: {
			icon: git,
		},
	},
	{
		localize: '.prettierignore',
		navId: Helper.randomKey(),
		file: {
			icon: prettier,
		},
	},
	{
		localize: '.prettierrc',
		navId: Helper.randomKey(),
		file: {
			icon: prettier,
		},
	},
	{
		localize: 'deploy.sh',
		navId: Helper.randomKey(),
		file: {
			icon: pro,
		},
	},
	{
		localize: 'index.html',
		navId: Helper.randomKey(),
		file: {
			icon: html,
		},
	},
	{
		localize: 'package-lock.json',
		navId: Helper.randomKey(),
		file: {
			icon: node,
		},
	},
	{
		localize: 'package.json',
		navId: Helper.randomKey(),
		file: {
			icon: node,
		},
	},
	{
		localize: 'postcss.config.js',
		navId: Helper.randomKey(),
		file: {
			icon: postcss,
		},
	},
	{
		localize: 'tailwind.config.js',
		navId: Helper.randomKey(),
		file: {
			icon: tail,
		},
	},
	{
		localize: 'tsconfig.json',
		navId: Helper.randomKey(),
		file: {
			icon: tsConfig,
		},
	},
	{
		localize: 'tsconfig.node.json',
		navId: Helper.randomKey(),
		file: {
			icon: tsConfig,
		},
	},
	{
		localize: 'vite.config.ts',
		navId: Helper.randomKey(),
		file: {
			icon: bolt,
		},
	},
];

export const tabs: FolderNav[] = [
	{
		localize: 'index.tsx',
		navId: Helper.randomKey(),
		file: {
			icon: reactTs,
		},
	},
];
