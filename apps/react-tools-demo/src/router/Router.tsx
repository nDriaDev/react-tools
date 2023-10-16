import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ComponentLayout from '../layout/ComponentLayout';
import MarkdownLayout from '../layout/MarkdownLayout';
import HomeWrapper from '../components/home/HomeWrapper';
import usePreviousMD from '../markdown/usePrevious.md?url';
import useStateGetResetMD from '../markdown/useStateGetReset.md?url';
import useStateHistoryMD from '../markdown/useStateHistory.md?url';
import useStateHistoryGetterMD from '../markdown/useStateHistoryGetter.md?url';
import useReducerGetResetMD from '../markdown/useReducerGetReset.md?url';
import useReducerHistoryMD from '../markdown/useReducerHistory.md?url';
import useReducerHistoryGetterMD from '../markdown/useReducerHistoryGetter.md?url';
import useCallbackCompareMD from '../markdown/useCallbackCompare.md?url';
import useCallbackDeepCompareMD from '../markdown/useCallbackDeepCompare.md?url';
import useMemoCompareMD from '../markdown/useMemoCompare.md?url';
import useMemoDeepCompareMD from '../markdown/useMemoDeepCompare.md?url';
import useEffectCompareMD from '../markdown/useEffectCompare.md?url';
import useEffectDeepCompareMD from '../markdown/useEffectDeepCompare.md?url';
import useLayoutEffectCompareMD from '../markdown/useLayoutEffectCompare.md?url';
import useLayoutEffectDeepCompareMD from '../markdown/useLayoutEffectDeepCompare.md?url';
import isShallowEqualMD from '../markdown/isShallowEqual.md?url';
import isDeepEqualMD from '../markdown/isDeepEqual.md?url';
import isMouseEventMD from '../markdown/isMouseEvent.md?url';
import isTouchEventMD from '../markdown/isTouchEvent.md?url';
import { UsePrevious } from '../components/hooks/usePrevious/UsePrevious';
import { UseStateHistory } from '../components/hooks/useStateHistory/UseStateHistory';
import { UseCallbackCompare } from '../components/hooks/useCallbackCompare/UseCallbackCompare';
import { UseCallbackDeepCompare } from '../components/hooks/useCallbackDeepCompare/UseCallbackDeepCompare';
import { UseMemoCompare } from '../components/hooks/useMemoCompare/UseMemoCompare';
import { UseMemoDeepCompare } from '../components/hooks/useMemoDeepCompare/UseMemoDeepCompare';
import { UseEffectCompare } from '../components/hooks/useEffectCompare/UseEffectCompare';
import { UseEffectDeepCompare } from '../components/hooks/useEffectDeepCompare/UseEffectDeepCompare';
import { UseStateGetReset } from '../components/hooks/useStateGetReset/UseStateGetReset';

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
					path: "/useStateGetReset",
					element: <ComponentLayout
						component={<UseStateGetReset />}
						markdown={useStateGetResetMD}
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
					path: "/useReducerGetReset",
					element: <MarkdownLayout
						source={useReducerGetResetMD}
					/>
				},
				{
					path: "/useReducerHistory",
					element: <MarkdownLayout
						source={useReducerHistoryMD}
					/>
				},
				{
					path: "/useReducerHistoryGetter",
					element: <MarkdownLayout
						source={useReducerHistoryGetterMD}
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
