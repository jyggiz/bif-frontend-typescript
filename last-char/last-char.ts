type LastChar<T extends string> = 
	T extends `${infer FirstChar}${infer CurrentLastChar}`
		? CurrentLastChar extends '' ? FirstChar : LastChar<CurrentLastChar>
		: never