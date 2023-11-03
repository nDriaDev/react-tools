import DemoCodeLayout from "./DemoCodeLayout";
import MarkdownLayout from "./MarkdownLayout";

export default function ComponentLayout({ component, markdown }: {component?: React.JSX.Element, markdown?: string}) {
    return (<>
		{
			component &&
			<DemoCodeLayout>
				{component}
			</DemoCodeLayout>
		}
		{
			markdown &&
			<MarkdownLayout source={markdown} />
		}
    </>);
}