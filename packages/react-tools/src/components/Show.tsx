import { PropsWithChildren, ReactNode } from "react";

export const Show = ({ when, fallback, children }: PropsWithChildren<{ when: boolean, fallback?: ReactNode }>) => {
	if (!when) {
		return fallback ? fallback : null;
	}
	return children;
}