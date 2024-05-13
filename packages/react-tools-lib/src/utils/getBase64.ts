import { defaultSerializer } from ".";
import { ToDataURLOptions, UseBase64ObjectOptions } from "../models";
function blobToBase64(blob: Blob) {
	return new Promise<string>((res, reject) => {
		const fr = new FileReader()
		fr.onload = (e) => {
			res(e.target!.result as string)
		}
		fr.onerror = reject
		fr.readAsDataURL(blob)
	})
}

function imgLoaded(img: HTMLImageElement) {
	return new Promise<void>((res, reject) => {
		if (!img.complete) {
			img.onload = () => {
				res()
			}
			img.onerror = reject
		}
		else {
			res()
		}
	})
}

/**
 * **`getBase64`**: Function to obtain a Base64 from value specified if supported, otherwise throw an Error. [See demo](https://react-tools.ndria.dev/#/utils/getBase64)
 * @param {string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[]} target
 * @param {ToDataURLOptions | UseBase64ObjectOptions<T>} [options]
 * @returns {string}
 */
function getBase64(target: string, options?: undefined): Promise<string>
function getBase64(target: Blob, options?: undefined): Promise<string>
function getBase64(target: ArrayBuffer, options?: undefined): Promise<string>
function getBase64(target: HTMLCanvasElement, options?: ToDataURLOptions): Promise<string>
function getBase64(target: HTMLImageElement, options?: ToDataURLOptions): Promise<string>
function getBase64<T extends object>(target: T, options?: UseBase64ObjectOptions<T>): Promise<string>
function getBase64<T extends Map<string, unknown>>(target: T, options?: UseBase64ObjectOptions<T>): Promise<string>
function getBase64<T extends Set<unknown>>(target: T, options?: UseBase64ObjectOptions<T>): Promise<string>
function getBase64<T>(target: T[], options?: UseBase64ObjectOptions<T[]>): Promise<string>
function getBase64<T>(target: string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[], options?: ToDataURLOptions | UseBase64ObjectOptions<T>): Promise<string> {
	return new Promise((res, rej) => {
		if (!window) {
			return rej(Error("getBase64 is executable only in browser context."));
		}
		try {
			if (target === null || target === undefined) {
				res("");
			} else if (typeof target === "string") {
				res(blobToBase64(new Blob([target], { type: "text/plain" })));
			} else if (target instanceof Blob) {
				res(blobToBase64(target));
			} else if (target instanceof ArrayBuffer) {
				res(window.btoa(String.fromCharCode(...new Uint8Array(target))))
			}
			else if (target instanceof HTMLCanvasElement) {
				res(target.toDataURL((options as ToDataURLOptions)?.type, (options as ToDataURLOptions)?.quality))
			}
			else if (target instanceof HTMLImageElement) {
				const img = target.cloneNode(false) as HTMLImageElement
				img.crossOrigin = 'Anonymous'
				imgLoaded(img).then(() => {
					const canvas = document.createElement('canvas')
					const ctx = canvas.getContext('2d')!
					canvas.width = img.width
					canvas.height = img.height
					ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
					res(canvas.toDataURL((options as ToDataURLOptions)?.type, (options as ToDataURLOptions)?.quality))
				}).catch(rej)
			}
			else if (typeof target === 'object') {
				const serializeFn = (options as UseBase64ObjectOptions<T|T[]>)?.serializer || defaultSerializer

				const serialized = serializeFn(target)

				return res(blobToBase64(new Blob([serialized], { type: 'application/json' })))
			}
			else {
				rej(new Error('Unsupported target type.'))
			}
		} catch (error) {
			rej(error);
		}
	})
}

export {getBase64}