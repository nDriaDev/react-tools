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
import useMemoizedFunctionMD from '../markdown/useMemoizedFunction.md?url';
import useMemoCompareMD from '../markdown/useMemoCompare.md?url';
import useMemoDeepCompareMD from '../markdown/useMemoDeepCompare.md?url';
import useEffectCompareMD from '../markdown/useEffectCompare.md?url';
import useEffectDeepCompareMD from '../markdown/useEffectDeepCompare.md?url';
import useLayoutEffectCompareMD from '../markdown/useLayoutEffectCompare.md?url';
import useLayoutEffectDeepCompareMD from '../markdown/useLayoutEffectDeepCompare.md?url';
import useEventListenerMD from '../markdown/useEventListener.md?url';
import isShallowEqualMD from '../markdown/isShallowEqual.md?url';
import isDeepEqualMD from '../markdown/isDeepEqual.md?url';
import isMouseEventMD from '../markdown/isMouseEvent.md?url';
import isTouchEventMD from '../markdown/isTouchEvent.md?url';
import isClientMD from '../markdown/isClient.md?url';
import usePubSubModelMD from '../markdown/usePubSubModel.md?url';
import useEventDispatcherMD from '../markdown/useEventDispatcher.md?url';
import useLocalStorageStateMD from '../markdown/useLocalStorageState.md?url';
import useSessionStorageStateMD from '../markdown/useSessionStorageState.md?url';
import { UsePrevious } from '../components/hooks/usePrevious/UsePrevious';
import { UseStateHistory } from '../components/hooks/useStateHistory/UseStateHistory';
import { UseCallbackCompare } from '../components/hooks/useCallbackCompare/UseCallbackCompare';
import { UseCallbackDeepCompare } from '../components/hooks/useCallbackDeepCompare/UseCallbackDeepCompare';
import { UseMemoCompare } from '../components/hooks/useMemoCompare/UseMemoCompare';
import { UseMemoDeepCompare } from '../components/hooks/useMemoDeepCompare/UseMemoDeepCompare';
import { UseEffectCompare } from '../components/hooks/useEffectCompare/UseEffectCompare';
import { UseEffectDeepCompare } from '../components/hooks/useEffectDeepCompare/UseEffectDeepCompare';
import { UseStateGetReset } from '../components/hooks/useStateGetReset/UseStateGetReset';
import { UsePubSubModel } from '../components/hooks/usePubSubModel/UsePubSubModel';
import { UseMemoizedFunction } from '../components/hooks/useMemoizedFunction/UseMemoizedFunction';
import { UseLocalStorageState } from '../components/hooks/useLocalStorageState/UseLocalStorageState';
import { UseSessionStorageState } from '../components/hooks/useSessionStorageState/UseSessionStorageState';
import { UseEventListener } from '../components/hooks/useEventListener/UseEventListener';
import { UseEventDispatcher } from '../components/hooks/useEventDispatcher/UseEventDispatcher';

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
					path: "/useLocalStorageState",
					element: <ComponentLayout
						component={<UseLocalStorageState />}
						markdown={useLocalStorageStateMD}
					/>
				},
				{
					path: "/useSessionStorageState",
					element: <ComponentLayout
						component={<UseSessionStorageState />}
						markdown={useSessionStorageStateMD}
					/>
				},
				{
					path: "/useMemoizedFunction",
					element: <ComponentLayout
						component={<UseMemoizedFunction />}
						markdown={useMemoizedFunctionMD}
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
					path: "/usePubSubModel",
					element: <ComponentLayout
						component={<UsePubSubModel />}
						markdown={usePubSubModelMD}
					/>
				},
				{
					path: "/useEventDispatcher",
					element: <ComponentLayout
						component={<UseEventDispatcher />}
						markdown={useEventDispatcherMD}
					/>
				},
				{
					path: "/useEventListener",
					element: <ComponentLayout
						component={<UseEventListener />}
						markdown={useEventListenerMD}
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
				{
					path: "/isClient",
					element: <MarkdownLayout
						source={isClientMD}
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
