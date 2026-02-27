import { Component, ErrorInfo, PropsWithChildren, JSX } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../models";

/**
 * **`ErrorBoundary`**: Wrapper component that lets you display some fallback UI when your application throws an error during rendering.
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/ErrorBoundary)
 */
export class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
	public state: ErrorBoundaryState = {
		hasError: false
	}

	public static getDerivedStateFromError(_:Error): ErrorBoundaryState {
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
					if (this.props.fallback.length <= 1) {
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