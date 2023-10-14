import { ReactNode } from "react";

export default function DemoCodeLayout({ children }: {children: ReactNode}) {
    return (
        <div className="demo">
            <span className="demo-label">DEMO</span>
            {children}
        </div>
    );
}