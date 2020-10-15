export interface SelectOption {
	text: string;
	value: number | string;
}

export interface Select {
	text: string;
	options: SelectOption[];
}
