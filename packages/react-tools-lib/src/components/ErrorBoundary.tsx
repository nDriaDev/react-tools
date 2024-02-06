import { Component, ErrorInfo, PropsWithChildren, ReactNode, isValidElement } from "react";

/**
 * **`ErrorBoundary`**: Wrapper component that lets you display some fallback UI when your application throws an error during rendering. [See demo](https://ndriadev.github.io/react-tools/#/components/ErrorBoundary)
 * @param {Object} props
 * @param {(error:Error, info:ErrorInfo)=>void} [props.onCatch] - function that will be executed on component did catch.
 * @param {ReactNode|((error: Error, info: ErrorInfo, retry: ()=>void)=>ReactNode)|((props: { error: Error, info: ErrorInfo, retry: ()=>void })=>JSX.Element)} [props.fallback] - it is rendered when an error occurred. It can be an element, or a Component or a function. If it is a component or a function, it receive the _error_ the _info_ and the _retry_ function as props. _retry_ function try to rerender.
 * @param {ReactNode} props.children - element to render.
 * @returns {JSX.Element} result - element or fallback.
 */
export class ErrorBoundary extends Component<PropsWithChildren<{ onCatch?: (error: Error, info: ErrorInfo) => void, fallback?: ReactNode | ((error: Error, info: ErrorInfo, retry: () => void) => ReactNode) | ((props: { error: Error, info: ErrorInfo, retry: () => void })=>JSX.Element)}>, { hasError: boolean, error?:Error, info?: ErrorInfo }> {
	public state: {hasError:boolean, error?:Error, info?: ErrorInfo} = {
		hasError: false
	}

	public static getDerivedStateFromError(_:Error): {hasError:boolean, error?:Error, info?: ErrorInfo} {
		return { hasError: true, error: _};
	}

	public componentDidCatch(error: Error, info: ErrorInfo): void {
		this.props.onCatch && this.props.onCatch(error, info);
		this.setState({ hasError: true, error, info });
	}

	public retry(): void {
		this.setState({ hasError: false, error: undefined, info: undefined });
	}

	public render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				if (typeof this.props.fallback === "function") {
					if (isValidElement(this.props.fallback)) {
						const Component = this.props.fallback as (props:{retry: ()=>void, error:Error, info:ErrorInfo})=>JSX.Element;
						return <Component error={this.state.error!} info={this.state.info!} retry={this.retry.bind(this)} /> ;
					} else {
						return <>{(this.props.fallback as (error: Error, info: ErrorInfo, retry: () => void) => JSX.Element)(this.state.error!, this.state.info!, this.retry.bind(this))}</>
					}
				}
				return <>{this.props.fallback}</>
			}
		}
		return this.props.children;
	}
}