import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ComponentLayout from '../layout/ComponentLayout';
import MarkdownLayout from '../layout/MarkdownLayout';
import HomeWrapper from '../components/home/HomeWrapper';
import usePreviousMD from '../markdown/UsePrevious.md?url';
import useStateGetterMD from '../markdown/UseStateGetter.md?url';
import useStateHistoryMD from '../markdown/UseStateHistory.md?url';
import useStateHistoryGetterMD from '../markdown/useStateHistoryGetter.md?url';
import useCallbackCompareMD from '../markdown/UseCallbackCompare.md?url';
import useCallbackDeepCompareMD from '../markdown/UseCallbackDeepCompare.md?url';
import useMemoCompareMD from '../markdown/UseMemoCompare.md?url';
import useMemoDeepCompareMD from '../markdown/UseMemoDeepCompare.md?url';
import useEffectCompareMD from '../markdown/UseEffectCompare.md?url';
import useEffectDeepCompareMD from '../markdown/UseEffectDeepCompare.md?url';
import useLayoutEffectCompareMD from '../markdown/useLayoutEffectCompare.md?url';
import useLayoutEffectDeepCompareMD from '../markdown/useLayoutEffectDeepCompare.md?url';
import isShallowEqualMD from '../markdown/IsShallowEqual.md?url';
import isDeepEqualMD from '../markdown/IsDeepEqual.md?url';
import isMouseEventMD from '../markdown/IsMouseEvent.md?url';
import isTouchEventMD from '../markdown/IsTouchEvent.md?url';
import { UsePrevious } from '../components/hooks/usePrevious/UsePrevious';
import { UseStateHistory } from '../components/hooks/useStateHistory/UseStateHistory';
import { UseCallbackCompare } from '../components/hooks/useCallbackCompare/UseCallbackCompare';
import { UseCallbackDeepCompare } from '../components/hooks/useCallbackDeepCompare/UseCallbackDeepCompare';
import { UseMemoCompare } from '../components/hooks/useMemoCompare/UseMemoCompare';
import { UseMemoDeepCompare } from '../components/hooks/useMemoDeepCompare/UseMemoDeepCompare';
import { UseEffectCompare } from '../components/hooks/useEffectCompare/UseEffectCompare';
import { UseEffectDeepCompare } from '../components/hooks/useEffectDeepCompare/UseEffectDeepCompare';
import { UseStateGetter } from '../components/hooks/useStateGetter/UseStateGetter';

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>,
			children: [
                {
					index: true,
					element: <HomeWrapper />
                },
                {
                    path: "/usePrevious",
                    element: <ComponentLayout
                        component={<UsePrevious/>}
                        markdown={usePreviousMD}
                    />
				},
				{
					path: "/useStateGetter",
					element: <ComponentLayout
						component={<UseStateGetter />}
						markdown={useStateGetterMD}
					/>
				},
				{
					path: "/useStateHistory",
					element: <ComponentLayout
						component={<UseStateHistory />}
						markdown={useStateHistoryMD}
					/>
				},
				{
					path: "/useStateHistoryGetter",
					element: <MarkdownLayout
						source={useStateHistoryGetterMD}
					/>
				},
				{
					path: "/useCallbackCompare",
					element: <ComponentLayout
						component={<UseCallbackCompare />}
						markdown={useCallbackCompareMD}
					/>
				},
				{
					path: "/useCallbackDeepCompare",
					element: <ComponentLayout
						component={<UseCallbackDeepCompare />}
						markdown={useCallbackDeepCompareMD}
					/>
				},
				{
					path: "/useMemoCompare",
					element: <ComponentLayout
						component={<UseMemoCompare />}
						markdown={useMemoCompareMD}
					/>
				},
				{
					path: "/useMemoDeepCompare",
					element: <ComponentLayout
						component={<UseMemoDeepCompare />}
						markdown={useMemoDeepCompareMD}
					/>
				},
				{
					path: "/useEffectCompare",
					element: <ComponentLayout
						component={<UseEffectCompare />}
						markdown={useEffectCompareMD}
					/>
				},
				{
					path: "/useEffectDeepCompare",
					element: <ComponentLayout
						component={<UseEffectDeepCompare />}
						markdown={useEffectDeepCompareMD}
					/>
				},
				{
					path: "/useLayoutEffectCompare",
					element: <MarkdownLayout
						source={useLayoutEffectCompareMD}
					/>
				},
				{
					path: "/useLayoutEffectDeepCompare",
					element: <MarkdownLayout
						source={useLayoutEffectDeepCompareMD}
					/>
				},
				{
					path: "/isShallowEqual",
					element: <MarkdownLayout
						source={isShallowEqualMD}
					/>
				},
				{
					path: "/isDeepEqual",
					element: <MarkdownLayout
						source={isDeepEqualMD}
					/>
				},
				{
					path: "/isMouseEvent",
					element: <MarkdownLayout
						source={isMouseEventMD}
					/>
				},
				{
					path: "/isTouchEvent",
					element: <MarkdownLayout
						source={isTouchEventMD}
					/>
				},
            ]
        }
    ]);

    return (
        <RouterProvider router= { router } />
	);
}



export default Router
