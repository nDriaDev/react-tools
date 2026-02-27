/**
 * Options forwarded to `HTMLCanvasElement.toDataURL()` when converting a canvas
 * or image element to a base64-encoded data URL.
 */
export interface ToDataURLOptions {
	/**
	 * The MIME type of the output image format (e.g. `"image/png"`,
	 * `"image/jpeg"`, `"image/webp"`). When omitted, defaults to `"image/png"`.
	 */
	type?: string;

	/**
	 * A number between `0` and `1` specifying the image quality for lossy
	 * formats such as `"image/jpeg"` or `"image/webp"`. `1` is highest quality,
	 * `0` is lowest. Ignored for lossless formats like `"image/png"`.
	 */
	quality?: number;
}

/**
 * Options accepted by {@link getBase64} when the target is a plain object,
 * `Map`, `Set`, or array that requires custom serialization before encoding.
 *
 * @template T - The type of the value to serialize.
 */
export interface UseBase64ObjectOptions<T> {
	/**
	 * A custom serializer function that converts the target value to a string
	 * before base64-encoding. Required for object, `Map`, `Set`, and array
	 * targets — use `JSON.stringify` or a custom implementation depending on
	 * the structure of `T`.
	 */
	serializer: (v: T) => string;
}

/**
 * Parameters accepted by all overloads of [getBase64](https://react-tools.ndria.dev/utils/getBase64).
 *
 * @template T - The type of the input value. Determines which overload is
 *   selected and which `options` shape is accepted.
 */
export type GetBase64Props<T> =
	| { target: string; options?: undefined }
	| { target: Blob; options?: undefined }
	| { target: ArrayBuffer; options?: undefined }
	| { target: HTMLCanvasElement; options?: ToDataURLOptions }
	| { target: HTMLImageElement; options?: ToDataURLOptions }
	| { target: T extends object ? T : never; options?: UseBase64ObjectOptions<T> }
	| { target: T extends Map<string, unknown> ? T : never; options?: UseBase64ObjectOptions<T> }
	| { target: T extends Set<unknown> ? T : never; options?: UseBase64ObjectOptions<T> }
	| { target: T[]; options?: UseBase64ObjectOptions<T[]> };