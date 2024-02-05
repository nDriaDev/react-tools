import { ComponentType, lazy, Suspense } from 'react';
import { RouterProvider, createHashRouter, Outlet, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ComponentLayout from '../layout/ComponentLayout';
import { Spinner } from '../layout/Spinner';
import ForMD from "../markdown/For.md?raw"
import LazyMD from "../markdown/Lazy.md?raw"
import ShowMD from "../markdown/Show.md?raw"
import SwitchCaseMD from "../markdown/SwitchCase.md?raw"
import alphanumericCompareMD from "../markdown/alphanumericCompare.md?raw"
import changeStringCaseMD from "../markdown/changeStringCase.md?raw"
import createPubSubStoreMD from "../markdown/createPubSubStore.md?raw"
import defaultSerializerMD from "../markdown/defaultSerializer.md?raw"
import detectBrowserMD from "../markdown/detectBrowser.md?raw"
import getBase64MD from "../markdown/getBase64.md?raw"
import getKeyObjectFromValueMD from "../markdown/getKeyObjectFromValue.md?raw"
import getObjectFromDottedStringMD from "../markdown/getObjectFromDottedString.md?raw"
import hotKeyHandlerMD from "../markdown/hotKeyHandler.md?raw"
import isAsyncMD from "../markdown/isAsync.md?raw"
import isClientMD from "../markdown/isClient.md?raw"
import isDeepEqualMD from "../markdown/isDeepEqual.md?raw"
import isMouseEventMD from "../markdown/isMouseEvent.md?raw"
import isShallowEqualMD from "../markdown/isShallowEqual.md?raw"
import isTouchEventMD from "../markdown/isTouchEvent.md?raw"
import lazyMD from "../markdown/lazy.md?raw"
import mergeObjectsMD from "../markdown/mergeObjects.md?raw"
import removeDuplicatedFromArrayObjectsMD from "../markdown/removeDuplicatedFromArrayObjects.md?raw"
import removePropertiesFromArrayObjectsMD from "../markdown/removePropertiesFromArrayObjects.md?raw"
import useActiveElementMD from "../markdown/useActiveElement.md?raw"
import useAnimationMD from "../markdown/useAnimation.md?raw"
import useArrayMD from "../markdown/useArray.md?raw"
import useAudioMD from "../markdown/useAudio.md?raw"
import useBatteryMD from "../markdown/useBattery.md?raw"
import useBeforeUnloadMD from "../markdown/useBeforeUnload.md?raw"
import useBluetoothMD from "../markdown/useBluetooth.md?raw"
import useBroadcastChannelMD from "../markdown/useBroadcastChannel.md?raw"
import useCallbackCompareMD from "../markdown/useCallbackCompare.md?raw"
import useCallbackDeepCompareMD from "../markdown/useCallbackDeepCompare.md?raw"
import useClickOutsideMD from "../markdown/useClickOutside.md?raw"
import useClipboardMD from "../markdown/useClipboard.md?raw"
import useColorSchemeMD from "../markdown/useColorScheme.md?raw"
import useContextMenuMD from "../markdown/useContextMenu.md?raw"
import useDebounceMD from "../markdown/useDebounce.md?raw"
import useDeferredValueMD from "../markdown/useDeferredValue.md?raw"
import useDerivedStateMD from "../markdown/useDerivedState.md?raw"
import useDeviceMotionMD from "../markdown/useDeviceMotion.md?raw"
import useDeviceOrientationMD from "../markdown/useDeviceOrientation.md?raw"
import useDialogBoxMD from "../markdown/useDialogBox.md?raw"
import useDisplayMediaMD from "../markdown/useDisplayMedia.md?raw"
import useDocumentPIPMD from "../markdown/useDocumentPIP.md?raw"
import useDocumentVisibilityMD from "../markdown/useDocumentVisibility.md?raw"
import useDoubleClickMD from "../markdown/useDoubleClick.md?raw"
import useEffectCompareMD from "../markdown/useEffectCompare.md?raw"
import useEffectDeepCompareMD from "../markdown/useEffectDeepCompare.md?raw"
import useEffectOnceMD from "../markdown/useEffectOnce.md?raw"
import useEventDispatcherMD from "../markdown/useEventDispatcher.md?raw"
import useEventListenerMD from "../markdown/useEventListener.md?raw"
import useEventSourceMD from "../markdown/useEventSource.md?raw"
import useEventsMD from "../markdown/useEvents.md?raw"
import useEyeDropperMD from "../markdown/useEyeDropper.md?raw"
import useFPSMD from "../markdown/useFPS.md?raw"
import useFetchMD from "../markdown/useFetch.md?raw"
import useFullscreenMD from "../markdown/useFullscreen.md?raw"
import useGeolocationMD from "../markdown/useGeolocation.md?raw"
import useHotKeysMD from "../markdown/useHotKeys.md?raw"
import useHoverMD from "../markdown/useHover.md?raw"
import useIdMD from "../markdown/useId.md?raw"
import useIdleCallbackMD from "../markdown/useIdleCallback.md?raw"
import useInfiniteScrollMD from "../markdown/useInfiniteScroll.md?raw"
import useIntersectionObserverMD from "../markdown/useIntersectionObserver.md?raw"
import useIntervalMD from "../markdown/useInterval.md?raw"
import useIsMountedMD from "../markdown/useIsMounted.md?raw"
import useIsOnlineMD from "../markdown/useIsOnline.md?raw"
import useLayoutEffectCompareMD from "../markdown/useLayoutEffectCompare.md?raw"
import useLayoutEffectDeepCompareMD from "../markdown/useLayoutEffectDeepCompare.md?raw"
import useLayoutEffectOnceMD from "../markdown/useLayoutEffectOnce.md?raw"
import useLazyRefMD from "../markdown/useLazyRef.md?raw"
import useLocalStorageStateMD from "../markdown/useLocalStorageState.md?raw"
import useLockMD from "../markdown/useLock.md?raw"
import useLoggerMD from "../markdown/useLogger.md?raw"
import useLongPressMD from "../markdown/useLongPress.md?raw"
import useMapMD from "../markdown/useMap.md?raw"
import useMeasureMD from "../markdown/useMeasure.md?raw"
import useMediaDevicesMD from "../markdown/useMediaDevices.md?raw"
import useMediaQueryMD from "../markdown/useMediaQuery.md?raw"
import useMemoCompareMD from "../markdown/useMemoCompare.md?raw"
import useMemoDeepCompareMD from "../markdown/useMemoDeepCompare.md?raw"
import useMemoizedFnMD from "../markdown/useMemoizedFn.md?raw"
import useMergedRefMD from "../markdown/useMergedRef.md?raw"
import useMouseMD from "../markdown/useMouse.md?raw"
import useMutationObserverMD from "../markdown/useMutationObserver.md?raw"
import useNetworkMD from "../markdown/useNetwork.md?raw"
import usePIPMD from "../markdown/usePIP.md?raw"
import usePerformActionMD from "../markdown/usePerformAction.md?raw"
import usePermissionMD from "../markdown/usePermission.md?raw"
import usePinchZoomMD from "../markdown/usePinchZoom.md?raw"
import usePointerLockMD from "../markdown/usePointerLock.md?raw"
import usePopoverMD from "../markdown/usePopover.md?raw"
import usePreviousMD from "../markdown/usePrevious.md?raw"
import usePromiseSuspensibleMD from "../markdown/usePromiseSuspensible.md?raw"
import useProxyStateMD from "../markdown/useProxyState.md?raw"
import usePublishSubscribeMD from "../markdown/usePublishSubscribe.md?raw"
import useRafMD from "../markdown/useRaf.md?raw"
import useReducedMotionMD from "../markdown/useReducedMotion.md?raw"
import useReducerGetResetMD from "../markdown/useReducerGetReset.md?raw"
import useReducerHistoryMD from "../markdown/useReducerHistory.md?raw"
import useReducerHistoryGetterMD from "../markdown/useReducerHistoryGetter.md?raw"
import useRemotePlaybackMD from "../markdown/useRemotePlayback.md?raw"
import useRerenderMD from "../markdown/useRerender.md?raw"
import useResizeObserverMD from "../markdown/useResizeObserver.md?raw"
import useResponsiveMD from "../markdown/useResponsive.md?raw"
import useScreenMD from "../markdown/useScreen.md?raw"
import useScreenWakeLockMD from "../markdown/useScreenWakeLock.md?raw"
import useScriptMD from "../markdown/useScript.md?raw"
import useScrollIntoViewMD from "../markdown/useScrollIntoView.md?raw"
import useSessionStorageStateMD from "../markdown/useSessionStorageState.md?raw"
import useSetMD from "../markdown/useSet.md?raw"
import useShareMD from "../markdown/useShare.md?raw"
import useSpeechRecognitionMD from "../markdown/useSpeechRecognition.md?raw"
import useSpeechSynthesisMD from "../markdown/useSpeechSynthesis.md?raw"
import useStateGetResetMD from "../markdown/useStateGetReset.md?raw"
import useStateHistoryMD from "../markdown/useStateHistory.md?raw"
import useStateHistoryGetterMD from "../markdown/useStateHistoryGetter.md?raw"
import useStateValidatorMD from "../markdown/useStateValidator.md?raw"
import useSwipeMD from "../markdown/useSwipe.md?raw"
import useSyncExternalStoreMD from "../markdown/useSyncExternalStore.md?raw"
import useTextSelectionMD from "../markdown/useTextSelection.md?raw"
import useThrottleMD from "../markdown/useThrottle.md?raw"
import useTimeoutMD from "../markdown/useTimeout.md?raw"
import useTitleMD from "../markdown/useTitle.md?raw"
import useVibrateMD from "../markdown/useVibrate.md?raw"
import useVideoMD from "../markdown/useVideo.md?raw"
import useVisibleMD from "../markdown/useVisible.md?raw"
import useWebSocketMD from "../markdown/useWebSocket.md?raw"
import useWebWorkerMD from "../markdown/useWebWorker.md?raw"
import useWebWorkerFnMD from "../markdown/useWebWorkerFn.md?raw"
const For = lazy((() => import('../pages/components/for/For').then(module => ({default: "default" in module ? module["default"] : module["For"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const Lazy = lazy((() => import('../pages/components/lazy/Lazy').then(module => ({default: "default" in module ? module["default"] : module["Lazy"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const Show = lazy((() => import('../pages/components/show/Show').then(module => ({default: "default" in module ? module["default"] : module["Show"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const SwitchCase = lazy((() => import('../pages/components/switchCase/SwitchCase').then(module => ({default: "default" in module ? module["default"] : module["SwitchCase"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
import HomeWrapper from '../pages/home/HomeWrapper'
const UseActiveElement = lazy((() => import('../pages/hooks/api-dom/useActiveElement/UseActiveElement').then(module => ({default: "default" in module ? module["default"] : module["UseActiveElement"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseAnimation = lazy((() => import('../pages/hooks/api-dom/useAnimation/UseAnimation').then(module => ({default: "default" in module ? module["default"] : module["UseAnimation"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseAudio = lazy((() => import('../pages/hooks/api-dom/useAudio/UseAudio').then(module => ({default: "default" in module ? module["default"] : module["UseAudio"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseBattery = lazy((() => import('../pages/hooks/api-dom/useBattery/UseBattery').then(module => ({default: "default" in module ? module["default"] : module["UseBattery"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseBluetooth = lazy((() => import('../pages/hooks/api-dom/useBluetooth/UseBluetooth').then(module => ({default: "default" in module ? module["default"] : module["UseBluetooth"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseBroadcastChannel = lazy((() => import('../pages/hooks/api-dom/useBroadcastChannel/UseBroadcastChannel').then(module => ({default: "default" in module ? module["default"] : module["UseBroadcastChannel"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseClipboard = lazy((() => import('../pages/hooks/api-dom/useClipboard/UseClipboard').then(module => ({default: "default" in module ? module["default"] : module["UseClipboard"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseColorScheme = lazy((() => import('../pages/hooks/api-dom/useColorScheme/UseColorScheme').then(module => ({default: "default" in module ? module["default"] : module["UseColorScheme"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDebounce = lazy((() => import('../pages/hooks/api-dom/useDebounce/UseDebounce').then(module => ({default: "default" in module ? module["default"] : module["UseDebounce"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDeviceMotion = lazy((() => import('../pages/hooks/api-dom/useDeviceMotion/UseDeviceMotion').then(module => ({default: "default" in module ? module["default"] : module["UseDeviceMotion"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDeviceOrientation = lazy((() => import('../pages/hooks/api-dom/useDeviceOrientation/UseDeviceOrientation').then(module => ({default: "default" in module ? module["default"] : module["UseDeviceOrientation"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDialogBox = lazy((() => import('../pages/hooks/api-dom/useDialogBox/UseDialogBox').then(module => ({default: "default" in module ? module["default"] : module["UseDialogBox"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDisplayMedia = lazy((() => import('../pages/hooks/api-dom/useDisplayMedia/UseDisplayMedia').then(module => ({default: "default" in module ? module["default"] : module["UseDisplayMedia"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDocumentPIP = lazy((() => import('../pages/hooks/api-dom/useDocumentPIP/UseDocumentPIP').then(module => ({default: "default" in module ? module["default"] : module["UseDocumentPIP"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseEyeDropper = lazy((() => import('../pages/hooks/api-dom/useEyeDropper/UseEyeDropper').then(module => ({default: "default" in module ? module["default"] : module["UseEyeDropper"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseFPS = lazy((() => import('../pages/hooks/api-dom/useFPS/UseFPS').then(module => ({default: "default" in module ? module["default"] : module["UseFPS"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseFetch = lazy((() => import('../pages/hooks/api-dom/useFetch/UseFetch').then(module => ({default: "default" in module ? module["default"] : module["UseFetch"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseFullscreen = lazy((() => import('../pages/hooks/api-dom/useFullscreen/UseFullscreen').then(module => ({default: "default" in module ? module["default"] : module["UseFullscreen"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseGeolocation = lazy((() => import('../pages/hooks/api-dom/useGeolocation/UseGeolocation').then(module => ({default: "default" in module ? module["default"] : module["UseGeolocation"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseIdleCallback = lazy((() => import('../pages/hooks/api-dom/useIdleCallback/UseIdleCallback').then(module => ({default: "default" in module ? module["default"] : module["UseIdleCallback"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseInterval = lazy((() => import('../pages/hooks/api-dom/useInterval/UseInterval').then(module => ({default: "default" in module ? module["default"] : module["UseInterval"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseLock = lazy((() => import('../pages/hooks/api-dom/useLock/UseLock').then(module => ({default: "default" in module ? module["default"] : module["UseLock"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMediaDevices = lazy((() => import('../pages/hooks/api-dom/useMediaDevices/UseMediaDevices').then(module => ({default: "default" in module ? module["default"] : module["UseMediaDevices"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMediaQuery = lazy((() => import('../pages/hooks/api-dom/useMediaQuery/UseMediaQuery').then(module => ({default: "default" in module ? module["default"] : module["UseMediaQuery"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePIP = lazy((() => import('../pages/hooks/api-dom/usePIP/UsePIP').then(module => ({default: "default" in module ? module["default"] : module["UsePIP"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePermission = lazy((() => import('../pages/hooks/api-dom/usePermission/UsePermission').then(module => ({default: "default" in module ? module["default"] : module["UsePermission"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePopover = lazy((() => import('../pages/hooks/api-dom/usePopover/UsePopover').then(module => ({default: "default" in module ? module["default"] : module["UsePopover"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePromiseSuspensible = lazy((() => import('../pages/hooks/api-dom/usePromiseSuspensible/UsePromiseSuspensible').then(module => ({default: "default" in module ? module["default"] : module["UsePromiseSuspensible"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePublishSubscribe = lazy((() => import('../pages/hooks/api-dom/usePublishSubscribe/UsePublishSubscribe').then(module => ({default: "default" in module ? module["default"] : module["UsePublishSubscribe"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseRaf = lazy((() => import('../pages/hooks/api-dom/useRaf/UseRaf').then(module => ({default: "default" in module ? module["default"] : module["UseRaf"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseReducedMotion = lazy((() => import('../pages/hooks/api-dom/useReducedMotion/UseReducedMotion').then(module => ({default: "default" in module ? module["default"] : module["UseReducedMotion"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseRemotePlayback = lazy((() => import('../pages/hooks/api-dom/useRemotePlayback/UseRemotePlayback').then(module => ({default: "default" in module ? module["default"] : module["UseRemotePlayback"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseScreenWakeLock = lazy((() => import('../pages/hooks/api-dom/useScreenWakeLock/UseScreenWakeLock').then(module => ({default: "default" in module ? module["default"] : module["UseScreenWakeLock"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseScript = lazy((() => import('../pages/hooks/api-dom/useScript/UseScript').then(module => ({default: "default" in module ? module["default"] : module["UseScript"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseShare = lazy((() => import('../pages/hooks/api-dom/useShare/UseShare').then(module => ({default: "default" in module ? module["default"] : module["UseShare"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseSpeechRecognition = lazy((() => import('../pages/hooks/api-dom/useSpeechRecognition/UseSpeechRecognition').then(module => ({default: "default" in module ? module["default"] : module["UseSpeechRecognition"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseSpeechSynthesis = lazy((() => import('../pages/hooks/api-dom/useSpeechSynthesis/UseSpeechSynthesis').then(module => ({default: "default" in module ? module["default"] : module["UseSpeechSynthesis"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseTextSelection = lazy((() => import('../pages/hooks/api-dom/useTextSelection/UseTextSelection').then(module => ({default: "default" in module ? module["default"] : module["UseTextSelection"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseThrottle = lazy((() => import('../pages/hooks/api-dom/useThrottle/UseThrottle').then(module => ({default: "default" in module ? module["default"] : module["UseThrottle"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseTimeout = lazy((() => import('../pages/hooks/api-dom/useTimeout/UseTimeout').then(module => ({default: "default" in module ? module["default"] : module["UseTimeout"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseTitle = lazy((() => import('../pages/hooks/api-dom/useTitle/UseTitle').then(module => ({default: "default" in module ? module["default"] : module["UseTitle"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseVibrate = lazy((() => import('../pages/hooks/api-dom/useVibrate/UseVibrate').then(module => ({default: "default" in module ? module["default"] : module["UseVibrate"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseVideo = lazy((() => import('../pages/hooks/api-dom/useVideo/UseVideo').then(module => ({default: "default" in module ? module["default"] : module["UseVideo"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseWebWorker = lazy((() => import('../pages/hooks/api-dom/useWebWorker/UseWebWorker').then(module => ({default: "default" in module ? module["default"] : module["UseWebWorker"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseWebWorkerFn = lazy((() => import('../pages/hooks/api-dom/useWebWorkerFn/UseWebWorkerFn').then(module => ({default: "default" in module ? module["default"] : module["UseWebWorkerFn"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseBeforeUnload = lazy((() => import('../pages/hooks/events/useBeforeUnload/UseBeforeUnload').then(module => ({default: "default" in module ? module["default"] : module["UseBeforeUnload"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseClickOutside = lazy((() => import('../pages/hooks/events/useClickOutside/UseClickOutside').then(module => ({default: "default" in module ? module["default"] : module["UseClickOutside"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseContextMenu = lazy((() => import('../pages/hooks/events/useContextMenu/UseContextMenu').then(module => ({default: "default" in module ? module["default"] : module["UseContextMenu"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDocumentVisibility = lazy((() => import('../pages/hooks/events/useDocumentVisibility/UseDocumentVisibility').then(module => ({default: "default" in module ? module["default"] : module["UseDocumentVisibility"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDoubleClick = lazy((() => import('../pages/hooks/events/useDoubleClick/UseDoubleClick').then(module => ({default: "default" in module ? module["default"] : module["UseDoubleClick"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseEventDispatcher = lazy((() => import('../pages/hooks/events/useEventDispatcher/UseEventDispatcher').then(module => ({default: "default" in module ? module["default"] : module["UseEventDispatcher"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseEventListener = lazy((() => import('../pages/hooks/events/useEventListener/UseEventListener').then(module => ({default: "default" in module ? module["default"] : module["UseEventListener"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseEvents = lazy((() => import('../pages/hooks/events/useEvents/UseEvents').then(module => ({default: "default" in module ? module["default"] : module["UseEvents"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseHotKeys = lazy((() => import('../pages/hooks/events/useHotKeys/UseHotKeys').then(module => ({default: "default" in module ? module["default"] : module["UseHotKeys"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseHover = lazy((() => import('../pages/hooks/events/useHover/UseHover').then(module => ({default: "default" in module ? module["default"] : module["UseHover"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseInfiniteScroll = lazy((() => import('../pages/hooks/events/useInfiniteScroll/UseInfiniteScroll').then(module => ({default: "default" in module ? module["default"] : module["UseInfiniteScroll"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseIntersectionObserver = lazy((() => import('../pages/hooks/events/useIntersectionObserver/UseIntersectionObserver').then(module => ({default: "default" in module ? module["default"] : module["UseIntersectionObserver"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseIsOnline = lazy((() => import('../pages/hooks/events/useIsOnline/UseIsOnline').then(module => ({default: "default" in module ? module["default"] : module["UseIsOnline"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseLongPress = lazy((() => import('../pages/hooks/events/useLongPress/UseLongPress').then(module => ({default: "default" in module ? module["default"] : module["UseLongPress"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMeasure = lazy((() => import('../pages/hooks/events/useMeasure/UseMeasure').then(module => ({default: "default" in module ? module["default"] : module["UseMeasure"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMouse = lazy((() => import('../pages/hooks/events/useMouse/UseMouse').then(module => ({default: "default" in module ? module["default"] : module["UseMouse"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMutationObserver = lazy((() => import('../pages/hooks/events/useMutationObserver/UseMutationObserver').then(module => ({default: "default" in module ? module["default"] : module["UseMutationObserver"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseNetwork = lazy((() => import('../pages/hooks/events/useNetwork/UseNetwork').then(module => ({default: "default" in module ? module["default"] : module["UseNetwork"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePerformAction = lazy((() => import('../pages/hooks/events/usePerformAction/UsePerformAction').then(module => ({default: "default" in module ? module["default"] : module["UsePerformAction"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePinchZoom = lazy((() => import('../pages/hooks/events/usePinchZoom/UsePinchZoom').then(module => ({default: "default" in module ? module["default"] : module["UsePinchZoom"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePointerLock = lazy((() => import('../pages/hooks/events/usePointerLock/UsePointerLock').then(module => ({default: "default" in module ? module["default"] : module["UsePointerLock"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseResizeObserver = lazy((() => import('../pages/hooks/events/useResizeObserver/UseResizeObserver').then(module => ({default: "default" in module ? module["default"] : module["UseResizeObserver"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseResponsive = lazy((() => import('../pages/hooks/events/useResponsive/UseResponsive').then(module => ({default: "default" in module ? module["default"] : module["UseResponsive"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseScreen = lazy((() => import('../pages/hooks/events/useScreen/UseScreen').then(module => ({default: "default" in module ? module["default"] : module["UseScreen"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseScrollIntoView = lazy((() => import('../pages/hooks/events/useScrollIntoView/UseScrollIntoView').then(module => ({default: "default" in module ? module["default"] : module["UseScrollIntoView"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseSwipe = lazy((() => import('../pages/hooks/events/useSwipe/UseSwipe').then(module => ({default: "default" in module ? module["default"] : module["UseSwipe"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseVisible = lazy((() => import('../pages/hooks/events/useVisible/UseVisible').then(module => ({default: "default" in module ? module["default"] : module["UseVisible"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseEffectCompare = lazy((() => import('../pages/hooks/lifecycle/useEffectCompare/UseEffectCompare').then(module => ({default: "default" in module ? module["default"] : module["UseEffectCompare"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseEffectDeepCompare = lazy((() => import('../pages/hooks/lifecycle/useEffectDeepCompare/UseEffectDeepCompare').then(module => ({default: "default" in module ? module["default"] : module["UseEffectDeepCompare"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseEffectOnce = lazy((() => import('../pages/hooks/lifecycle/useEffectOnce/UseEffectOnce').then(module => ({default: "default" in module ? module["default"] : module["UseEffectOnce"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseIsMounted = lazy((() => import('../pages/hooks/lifecycle/useIsMounted/UseIsMounted').then(module => ({default: "default" in module ? module["default"] : module["UseIsMounted"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseLogger = lazy((() => import('../pages/hooks/lifecycle/useLogger/UseLogger').then(module => ({default: "default" in module ? module["default"] : module["UseLogger"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseRerender = lazy((() => import('../pages/hooks/lifecycle/useRerender/UseRerender').then(module => ({default: "default" in module ? module["default"] : module["UseRerender"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseCallbackCompare = lazy((() => import('../pages/hooks/performance/useCallbackCompare/UseCallbackCompare').then(module => ({default: "default" in module ? module["default"] : module["UseCallbackCompare"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseCallbackDeepCompare = lazy((() => import('../pages/hooks/performance/useCallbackDeepCompare/UseCallbackDeepCompare').then(module => ({default: "default" in module ? module["default"] : module["UseCallbackDeepCompare"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseLazyRef = lazy((() => import('../pages/hooks/performance/useLazyRef/UseLazyRef').then(module => ({default: "default" in module ? module["default"] : module["UseLazyRef"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMemoCompare = lazy((() => import('../pages/hooks/performance/useMemoCompare/UseMemoCompare').then(module => ({default: "default" in module ? module["default"] : module["UseMemoCompare"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMemoDeepCompare = lazy((() => import('../pages/hooks/performance/useMemoDeepCompare/UseMemoDeepCompare').then(module => ({default: "default" in module ? module["default"] : module["UseMemoDeepCompare"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMemoizedFn = lazy((() => import('../pages/hooks/performance/useMemoizedFn/UseMemoizedFn').then(module => ({default: "default" in module ? module["default"] : module["UseMemoizedFn"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMergedRef = lazy((() => import('../pages/hooks/performance/useMergedRef/UseMergedRef').then(module => ({default: "default" in module ? module["default"] : module["UseMergedRef"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const CreatePubSubStore = lazy((() => import('../pages/hooks/state/createPubSubStore/CreatePubSubStore').then(module => ({default: "default" in module ? module["default"] : module["CreatePubSubStore"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseArray = lazy((() => import('../pages/hooks/state/useArray/UseArray').then(module => ({default: "default" in module ? module["default"] : module["UseArray"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseDerivedState = lazy((() => import('../pages/hooks/state/useDerivedState/UseDerivedState').then(module => ({default: "default" in module ? module["default"] : module["UseDerivedState"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseLocalStorageState = lazy((() => import('../pages/hooks/state/useLocalStorageState/UseLocalStorageState').then(module => ({default: "default" in module ? module["default"] : module["UseLocalStorageState"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseMap = lazy((() => import('../pages/hooks/state/useMap/UseMap').then(module => ({default: "default" in module ? module["default"] : module["UseMap"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UsePrevious = lazy((() => import('../pages/hooks/state/usePrevious/UsePrevious').then(module => ({default: "default" in module ? module["default"] : module["UsePrevious"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseProxyState = lazy((() => import('../pages/hooks/state/useProxyState/UseProxyState').then(module => ({default: "default" in module ? module["default"] : module["UseProxyState"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseSessionStorageState = lazy((() => import('../pages/hooks/state/useSessionStorageState/UseSessionStorageState').then(module => ({default: "default" in module ? module["default"] : module["UseSessionStorageState"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseSet = lazy((() => import('../pages/hooks/state/useSet/UseSet').then(module => ({default: "default" in module ? module["default"] : module["UseSet"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseStateGetReset = lazy((() => import('../pages/hooks/state/useStateGetReset/UseStateGetReset').then(module => ({default: "default" in module ? module["default"] : module["UseStateGetReset"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseStateHistory = lazy((() => import('../pages/hooks/state/useStateHistory/UseStateHistory').then(module => ({default: "default" in module ? module["default"] : module["UseStateHistory"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
const UseStateValidator = lazy((() => import('../pages/hooks/state/useStateValidator/UseStateValidator').then(module => ({default: "default" in module ? module["default"] : module["UseStateValidator"]}))) as unknown as () => Promise<{ default: ComponentType; }>)
function Router() {
	const router = createHashRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <Suspense fallback={<Spinner/>}>
						<HomeWrapper />
						</Suspense>
				},
				{
					path: "hooks",
					element: <Suspense fallback={<Spinner/>}>
						<Outlet />
					</Suspense>,
					children: [
						{
							index: true,
							element: <Navigate to={"/hooks/state/createPubSubStore"} replace/>,
						},
						{
							path: "state",
							element: <Suspense fallback={<Spinner/>}>
								<Outlet/>
							</Suspense>,
							children: [
								{
									index: true,
									element: <Navigate to={"/createPubSubStore"} replace/>
								},
								{
									path: "createPubSubStore",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={createPubSubStoreMD} component={<CreatePubSubStore/>}/>
									</Suspense>
								},
								{
									path: "useArray",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useArrayMD} component={<UseArray/>}/>
									</Suspense>
								},
								{
									path: "useDerivedState",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDerivedStateMD} component={<UseDerivedState/>}/>
									</Suspense>
								},
								{
									path: "useLocalStorageState",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLocalStorageStateMD} component={<UseLocalStorageState/>}/>
									</Suspense>
								},
								{
									path: "useMap",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMapMD} component={<UseMap/>}/>
									</Suspense>
								},
								{
									path: "usePrevious",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePreviousMD} component={<UsePrevious/>}/>
									</Suspense>
								},
								{
									path: "useProxyState",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useProxyStateMD} component={<UseProxyState/>}/>
									</Suspense>
								},
								{
									path: "useReducerGetReset",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useReducerGetResetMD} />
									</Suspense>
								},
								{
									path: "useReducerHistory",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useReducerHistoryMD} />
									</Suspense>
								},
								{
									path: "useReducerHistoryGetter",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useReducerHistoryGetterMD} />
									</Suspense>
								},
								{
									path: "useSessionStorageState",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useSessionStorageStateMD} component={<UseSessionStorageState/>}/>
									</Suspense>
								},
								{
									path: "useSet",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useSetMD} component={<UseSet/>}/>
									</Suspense>
								},
								{
									path: "useStateGetReset",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useStateGetResetMD} component={<UseStateGetReset/>}/>
									</Suspense>
								},
								{
									path: "useStateHistory",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useStateHistoryMD} component={<UseStateHistory/>}/>
									</Suspense>
								},
								{
									path: "useStateHistoryGetter",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useStateHistoryGetterMD} />
									</Suspense>
								},
								{
									path: "useStateValidator",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useStateValidatorMD} component={<UseStateValidator/>}/>
									</Suspense>
								},
								{
									path: "useSyncExternalStore",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useSyncExternalStoreMD} />
									</Suspense>
								},
							]
						},
						{
							path: "lifecycle",
							element: <Suspense fallback={<Spinner/>}>
								<Outlet/>
							</Suspense>,
							children: [
								{
									index: true,
									element: <Navigate to={"/useDeferredValue"} replace/>
								},
								{
									path: "useDeferredValue",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDeferredValueMD} />
									</Suspense>
								},
								{
									path: "useEffectCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEffectCompareMD} component={<UseEffectCompare/>}/>
									</Suspense>
								},
								{
									path: "useEffectDeepCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEffectDeepCompareMD} component={<UseEffectDeepCompare/>}/>
									</Suspense>
								},
								{
									path: "useEffectOnce",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEffectOnceMD} component={<UseEffectOnce/>}/>
									</Suspense>
								},
								{
									path: "useIsMounted",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useIsMountedMD} component={<UseIsMounted/>}/>
									</Suspense>
								},
								{
									path: "useLayoutEffectCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLayoutEffectCompareMD} />
									</Suspense>
								},
								{
									path: "useLayoutEffectDeepCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLayoutEffectDeepCompareMD} />
									</Suspense>
								},
								{
									path: "useLayoutEffectOnce",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLayoutEffectOnceMD} />
									</Suspense>
								},
								{
									path: "useLogger",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLoggerMD} component={<UseLogger/>}/>
									</Suspense>
								},
								{
									path: "useRerender",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useRerenderMD} component={<UseRerender/>}/>
									</Suspense>
								},
							]
						},
						{
							path: "performance",
							element: <Suspense fallback={<Spinner/>}>
								<Outlet/>
							</Suspense>,
							children: [
								{
									index: true,
									element: <Navigate to={"/useCallbackCompare"} replace/>
								},
								{
									path: "useCallbackCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useCallbackCompareMD} component={<UseCallbackCompare/>}/>
									</Suspense>
								},
								{
									path: "useCallbackDeepCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useCallbackDeepCompareMD} component={<UseCallbackDeepCompare/>}/>
									</Suspense>
								},
								{
									path: "useId",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useIdMD} />
									</Suspense>
								},
								{
									path: "useLazyRef",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLazyRefMD} component={<UseLazyRef/>}/>
									</Suspense>
								},
								{
									path: "useMemoCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMemoCompareMD} component={<UseMemoCompare/>}/>
									</Suspense>
								},
								{
									path: "useMemoDeepCompare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMemoDeepCompareMD} component={<UseMemoDeepCompare/>}/>
									</Suspense>
								},
								{
									path: "useMemoizedFn",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMemoizedFnMD} component={<UseMemoizedFn/>}/>
									</Suspense>
								},
								{
									path: "useMergedRef",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMergedRefMD} component={<UseMergedRef/>}/>
									</Suspense>
								},
							]
						},
						{
							path: "events",
							element: <Suspense fallback={<Spinner/>}>
								<Outlet/>
							</Suspense>,
							children: [
								{
									index: true,
									element: <Navigate to={"/useBeforeUnload"} replace/>
								},
								{
									path: "useBeforeUnload",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useBeforeUnloadMD} component={<UseBeforeUnload/>}/>
									</Suspense>
								},
								{
									path: "useClickOutside",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useClickOutsideMD} component={<UseClickOutside/>}/>
									</Suspense>
								},
								{
									path: "useContextMenu",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useContextMenuMD} component={<UseContextMenu/>}/>
									</Suspense>
								},
								{
									path: "useDocumentVisibility",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDocumentVisibilityMD} component={<UseDocumentVisibility/>}/>
									</Suspense>
								},
								{
									path: "useDoubleClick",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDoubleClickMD} component={<UseDoubleClick/>}/>
									</Suspense>
								},
								{
									path: "useEventDispatcher",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEventDispatcherMD} component={<UseEventDispatcher/>}/>
									</Suspense>
								},
								{
									path: "useEventListener",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEventListenerMD} component={<UseEventListener/>}/>
									</Suspense>
								},
								{
									path: "useEvents",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEventsMD} component={<UseEvents/>}/>
									</Suspense>
								},
								{
									path: "useHotKeys",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useHotKeysMD} component={<UseHotKeys/>}/>
									</Suspense>
								},
								{
									path: "useHover",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useHoverMD} component={<UseHover/>}/>
									</Suspense>
								},
								{
									path: "useInfiniteScroll",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useInfiniteScrollMD} component={<UseInfiniteScroll/>}/>
									</Suspense>
								},
								{
									path: "useIntersectionObserver",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useIntersectionObserverMD} component={<UseIntersectionObserver/>}/>
									</Suspense>
								},
								{
									path: "useIsOnline",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useIsOnlineMD} component={<UseIsOnline/>}/>
									</Suspense>
								},
								{
									path: "useLongPress",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLongPressMD} component={<UseLongPress/>}/>
									</Suspense>
								},
								{
									path: "useMeasure",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMeasureMD} component={<UseMeasure/>}/>
									</Suspense>
								},
								{
									path: "useMouse",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMouseMD} component={<UseMouse/>}/>
									</Suspense>
								},
								{
									path: "useMutationObserver",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMutationObserverMD} component={<UseMutationObserver/>}/>
									</Suspense>
								},
								{
									path: "useNetwork",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useNetworkMD} component={<UseNetwork/>}/>
									</Suspense>
								},
								{
									path: "usePerformAction",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePerformActionMD} component={<UsePerformAction/>}/>
									</Suspense>
								},
								{
									path: "usePinchZoom",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePinchZoomMD} component={<UsePinchZoom/>}/>
									</Suspense>
								},
								{
									path: "usePointerLock",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePointerLockMD} component={<UsePointerLock/>}/>
									</Suspense>
								},
								{
									path: "useResizeObserver",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useResizeObserverMD} component={<UseResizeObserver/>}/>
									</Suspense>
								},
								{
									path: "useResponsive",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useResponsiveMD} component={<UseResponsive/>}/>
									</Suspense>
								},
								{
									path: "useScreen",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useScreenMD} component={<UseScreen/>}/>
									</Suspense>
								},
								{
									path: "useScrollIntoView",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useScrollIntoViewMD} component={<UseScrollIntoView/>}/>
									</Suspense>
								},
								{
									path: "useSwipe",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useSwipeMD} component={<UseSwipe/>}/>
									</Suspense>
								},
								{
									path: "useVisible",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useVisibleMD} component={<UseVisible/>}/>
									</Suspense>
								},
							]
						},
						{
							path: "api-dom",
							element: <Suspense fallback={<Spinner/>}>
								<Outlet/>
							</Suspense>,
							children: [
								{
									index: true,
									element: <Navigate to={"/useActiveElement"} replace/>
								},
								{
									path: "useActiveElement",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useActiveElementMD} component={<UseActiveElement/>}/>
									</Suspense>
								},
								{
									path: "useAnimation",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useAnimationMD} component={<UseAnimation/>}/>
									</Suspense>
								},
								{
									path: "useAudio",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useAudioMD} component={<UseAudio/>}/>
									</Suspense>
								},
								{
									path: "useBattery",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useBatteryMD} component={<UseBattery/>}/>
									</Suspense>
								},
								{
									path: "useBluetooth",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useBluetoothMD} component={<UseBluetooth/>}/>
									</Suspense>
								},
								{
									path: "useBroadcastChannel",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useBroadcastChannelMD} component={<UseBroadcastChannel/>}/>
									</Suspense>
								},
								{
									path: "useClipboard",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useClipboardMD} component={<UseClipboard/>}/>
									</Suspense>
								},
								{
									path: "useColorScheme",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useColorSchemeMD} component={<UseColorScheme/>}/>
									</Suspense>
								},
								{
									path: "useDebounce",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDebounceMD} component={<UseDebounce/>}/>
									</Suspense>
								},
								{
									path: "useDeviceMotion",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDeviceMotionMD} component={<UseDeviceMotion/>}/>
									</Suspense>
								},
								{
									path: "useDeviceOrientation",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDeviceOrientationMD} component={<UseDeviceOrientation/>}/>
									</Suspense>
								},
								{
									path: "useDialogBox",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDialogBoxMD} component={<UseDialogBox/>}/>
									</Suspense>
								},
								{
									path: "useDisplayMedia",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDisplayMediaMD} component={<UseDisplayMedia/>}/>
									</Suspense>
								},
								{
									path: "useDocumentPIP",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useDocumentPIPMD} component={<UseDocumentPIP/>}/>
									</Suspense>
								},
								{
									path: "useEventSource",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEventSourceMD} />
									</Suspense>
								},
								{
									path: "useEyeDropper",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useEyeDropperMD} component={<UseEyeDropper/>}/>
									</Suspense>
								},
								{
									path: "useFetch",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useFetchMD} component={<UseFetch/>}/>
									</Suspense>
								},
								{
									path: "useFPS",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useFPSMD} component={<UseFPS/>}/>
									</Suspense>
								},
								{
									path: "useFullscreen",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useFullscreenMD} component={<UseFullscreen/>}/>
									</Suspense>
								},
								{
									path: "useGeolocation",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useGeolocationMD} component={<UseGeolocation/>}/>
									</Suspense>
								},
								{
									path: "useIdleCallback",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useIdleCallbackMD} component={<UseIdleCallback/>}/>
									</Suspense>
								},
								{
									path: "useInterval",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useIntervalMD} component={<UseInterval/>}/>
									</Suspense>
								},
								{
									path: "useLock",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useLockMD} component={<UseLock/>}/>
									</Suspense>
								},
								{
									path: "useMediaDevices",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMediaDevicesMD} component={<UseMediaDevices/>}/>
									</Suspense>
								},
								{
									path: "useMediaQuery",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useMediaQueryMD} component={<UseMediaQuery/>}/>
									</Suspense>
								},
								{
									path: "usePermission",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePermissionMD} component={<UsePermission/>}/>
									</Suspense>
								},
								{
									path: "usePIP",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePIPMD} component={<UsePIP/>}/>
									</Suspense>
								},
								{
									path: "usePopover",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePopoverMD} component={<UsePopover/>}/>
									</Suspense>
								},
								{
									path: "usePromiseSuspensible",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePromiseSuspensibleMD} component={<UsePromiseSuspensible/>}/>
									</Suspense>
								},
								{
									path: "usePublishSubscribe",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={usePublishSubscribeMD} component={<UsePublishSubscribe/>}/>
									</Suspense>
								},
								{
									path: "useRaf",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useRafMD} component={<UseRaf/>}/>
									</Suspense>
								},
								{
									path: "useReducedMotion",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useReducedMotionMD} component={<UseReducedMotion/>}/>
									</Suspense>
								},
								{
									path: "useRemotePlayback",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useRemotePlaybackMD} component={<UseRemotePlayback/>}/>
									</Suspense>
								},
								{
									path: "useScreenWakeLock",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useScreenWakeLockMD} component={<UseScreenWakeLock/>}/>
									</Suspense>
								},
								{
									path: "useScript",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useScriptMD} component={<UseScript/>}/>
									</Suspense>
								},
								{
									path: "useShare",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useShareMD} component={<UseShare/>}/>
									</Suspense>
								},
								{
									path: "useSpeechRecognition",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useSpeechRecognitionMD} component={<UseSpeechRecognition/>}/>
									</Suspense>
								},
								{
									path: "useSpeechSynthesis",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useSpeechSynthesisMD} component={<UseSpeechSynthesis/>}/>
									</Suspense>
								},
								{
									path: "useTextSelection",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useTextSelectionMD} component={<UseTextSelection/>}/>
									</Suspense>
								},
								{
									path: "useThrottle",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useThrottleMD} component={<UseThrottle/>}/>
									</Suspense>
								},
								{
									path: "useTimeout",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useTimeoutMD} component={<UseTimeout/>}/>
									</Suspense>
								},
								{
									path: "useTitle",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useTitleMD} component={<UseTitle/>}/>
									</Suspense>
								},
								{
									path: "useVibrate",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useVibrateMD} component={<UseVibrate/>}/>
									</Suspense>
								},
								{
									path: "useVideo",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useVideoMD} component={<UseVideo/>}/>
									</Suspense>
								},
								{
									path: "useWebSocket",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useWebSocketMD} />
									</Suspense>
								},
								{
									path: "useWebWorker",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useWebWorkerMD} component={<UseWebWorker/>}/>
									</Suspense>
								},
								{
									path: "useWebWorkerFn",
									element: <Suspense fallback={<Spinner/>}>
										<ComponentLayout markdown={useWebWorkerFnMD} component={<UseWebWorkerFn/>}/>
									</Suspense>
								},
							]
						}
					]
				},
				{
					path: "components",
					element: <Suspense fallback={<Spinner/>}>
						<Outlet />
					</Suspense>,
					children: [
						{
							index: true,
							element: <Navigate to={"/components/For"} replace/>,
						},
					{
						path: "For",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={ForMD} component={<For/>}/>
						</Suspense>
					},
					{
						path: "Lazy",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={LazyMD} component={<Lazy/>}/>
						</Suspense>
					},
					{
						path: "Show",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={ShowMD} component={<Show/>}/>
						</Suspense>
					},
					{
						path: "SwitchCase",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={SwitchCaseMD} component={<SwitchCase/>}/>
						</Suspense>
					},
					]
				},
				{
					path: "utils",
					element: <Suspense fallback={<Spinner/>}>
						<Outlet />
					</Suspense>,
					children: [
						{
							index: true,
							element: <Navigate to={"/utils/alphanumericCompare"} replace/>,
						},
					{
						path: "alphanumericCompare",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={alphanumericCompareMD} />
						</Suspense>
					},
					{
						path: "changeStringCase",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={changeStringCaseMD} />
						</Suspense>
					},
					{
						path: "defaultSerializer",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={defaultSerializerMD} />
						</Suspense>
					},
					{
						path: "detectBrowser",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={detectBrowserMD} />
						</Suspense>
					},
					{
						path: "getBase64",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={getBase64MD} />
						</Suspense>
					},
					{
						path: "getKeyObjectFromValue",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={getKeyObjectFromValueMD} />
						</Suspense>
					},
					{
						path: "getObjectFromDottedString",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={getObjectFromDottedStringMD} />
						</Suspense>
					},
					{
						path: "hotKeyHandler",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={hotKeyHandlerMD} />
						</Suspense>
					},
					{
						path: "isAsync",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={isAsyncMD} />
						</Suspense>
					},
					{
						path: "isClient",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={isClientMD} />
						</Suspense>
					},
					{
						path: "isDeepEqual",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={isDeepEqualMD} />
						</Suspense>
					},
					{
						path: "isMouseEvent",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={isMouseEventMD} />
						</Suspense>
					},
					{
						path: "isShallowEqual",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={isShallowEqualMD} />
						</Suspense>
					},
					{
						path: "isTouchEvent",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={isTouchEventMD} />
						</Suspense>
					},
					{
						path: "lazy",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={lazyMD} component={<Lazy/>}/>
						</Suspense>
					},
					{
						path: "mergeObjects",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={mergeObjectsMD} />
						</Suspense>
					},
					{
						path: "removeDuplicatedFromArrayObjects",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={removeDuplicatedFromArrayObjectsMD} />
						</Suspense>
					},
					{
						path: "removePropertiesFromArrayObjects",
						element: <Suspense fallback={<Spinner/>}>
							<ComponentLayout markdown={removePropertiesFromArrayObjectsMD} />
						</Suspense>
					},
					]
				}
			]
		}
	]);
	return (
		<RouterProvider router= { router } />
	);
}
export default Router
