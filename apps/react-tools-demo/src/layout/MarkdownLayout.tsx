import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from 'remark-gfm'

import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import lua from "react-syntax-highlighter/dist/cjs/languages/prism/lua";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("lua", lua);

export default function MarkdownLayout({ source }: {source: string}) {

    const [md, setMd] = useState<string>();

    useEffect(() => {
        fetch(source).then(resp => resp.text()).then(md => setMd(md));
    })
    return (
        <div className="docs">
            <div className="docs-md">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
                    components={{
                        code({ className, ...props }) {
                            const hasLang = /language-(\w+)/.exec(className || "");
                            return hasLang ? (
                                <SyntaxHighlighter
                                    style={oneDark}
                                    language={hasLang[1]}
                                    PreTag="div"
                                    showLineNumbers={false}
                                    useInlineStyles={true}
                                >
                                    {String(props.children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props} />
                            );
                        },
                        pre: (pre) => {
                            const language =
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
                                (pre as any).children[0]?.props.className.replace(
                                    /language-/g,
                                    ""
                                ) as string;

                            return (
                                <div className="relative overflow-x-hidden">
                                    <span
                                        style={{
                                            bottom: 0,
                                            right: 0,
                                        }}
                                    >
                                        {language}
                                    </span>
                                    <pre {...pre}></pre>
                                </div>
                            );
                        },
                    }}
                >
                    {md}
                </ReactMarkdown>
            </div>
        </div>
    );
}