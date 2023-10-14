import DemoCodeLayout from "./DemoCodeLayout";
import MarkdownLayout from "./MarkdownLayout";

export default function ComponentLayout({ component, markdown }: {component: React.JSX.Element, markdown: string}) {
    return (<>
        <DemoCodeLayout>
            {component}
        </DemoCodeLayout>
        <MarkdownLayout source={markdown}/>
    </>);
}