export interface ToDataURLOptions {
	/**MIME type*/
	type?: string | undefined
	/**A Number between 0 and 1 indicating the image quality to be used when creating images*/
	quality?: number
}

export interface UseBase64ObjectOptions<T> {
	serializer: (v: T) => string
}