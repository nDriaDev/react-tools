export interface TextSelection {
	text: string;
	direction: "forward" | "backward";
	outsideRectangle: DOMRect;
	innerRectangles: DOMRect[];
}