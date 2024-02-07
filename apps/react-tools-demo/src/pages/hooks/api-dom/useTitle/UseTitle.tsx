/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useTitle } from "../../../../../../../packages/react-tools-lib/src"

/**
First, in a variable outside the component is kept track of the page title. The _useTitle_ hook is invoked in the component with the _title_ __Title 1__ parameter and the returned _setTitle_ function is used. After 3 seconds the title is changed with the _setTitle_ function to _title_ __Title 2__.

When the component is unmounted, the title saved in the variable outside the component is set as the title.
 */
const previousTitle = useTitle()[0]();

export const UseTitle = () => {
	const [,setTitle] = useTitle("Title 1");

	useEffect(() => {
		const id = setTimeout(() => {
			setTitle("Title 2");
		}, 3000);
		return () => {
			clearTimeout(id);
			setTitle(previousTitle);
		}
	}, [setTitle]);
}