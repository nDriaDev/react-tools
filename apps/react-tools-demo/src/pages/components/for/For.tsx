import { memo, useEffect, useState } from "react";
import { For } from "../../../../../../packages/react-tools-lib/src";

/**
The component has a _arr_ array state variable of objects that every 3 seconds added or removed an element. It uses _For_ component to iterate _arr_ and to render the memoized _Paragraph_ component, specifing __id__ element property as _elementKey_ prop. _Paragraph_ component logs in console a message before return the tag p. If you open dev tools, you can see that message is displayed only three times at first, and once when an element is added to _arr_ variable.
 */
const Paragraph = memo(({ index, firstName, lastName }: { index: string, firstName: string, lastName: string }) => {
	console.log("P render");
	return <p>{index}: {firstName} - {lastName}</p>
})

export default function ForComponent() {
	const [arr, setArr] = useState([
		{ id: "1", firstName: "firstName1", lastName: "lastName1" },
		{ id: "2", firstName: "firstName2", lastName: "lastName2" },
		{ id: "3", firstName: "firstName3", lastName: "lastName3" }
	]);

	useEffect(() => {
		const id2 = setInterval(() => {
			setArr(a => {
				const added = Math.random() > 0.5;
				console.log(added ? "added" : "removed");
				const id = Math.max(...[0, ...a.map(el => Number(el.id))])+1
				return added
					? [{ id: "" + id, firstName: "firstName" + id, lastName: "lastName" + id }, ...a]
					: a.filter((_, index) => index !== 0)
			})
		}, 3500);
		return () => {
			clearInterval(id2)
		}
	}, [])

	return <>
		<For
			of={arr}
			elementKey="id"
		>
			{(item, _, key) => <Paragraph index={key as string} firstName={item.firstName} lastName={item.lastName} />}
		</For>
	</>
}