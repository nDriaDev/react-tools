import { useStateHistory } from '../../../../../../packages/react-tools/src/hooks/useStateHistory';

/**
The component has:
- a counter _useHistoryState_ variable with _initialState=0_ and _memory=10_.
- a button to increment _counter_.
- a button to increment _counter_ and to disable _history_.
- a button to disabled _history_.
- a button to enable _history_.
- a button to undo _operation_.
- a button to redo _operation_.
- an input and button to go at specified value.
- a button to clear history.
 */
function UseStateHistory() {

	const [count, setCount, {go, presentPointer, history, trackUpdate, canRedo, canUndo, redo, undo, clear}] = useStateHistory(0, 10);

	return (<>
		<p>
			Count is {count}
		</p>
		<p>
			Current pointer is {presentPointer}
		</p>
		<p>
			History is {JSON.stringify(history)}
		</p>
		<div style={{ gridTemplateColumns: 'auto auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={() => setCount((count) => (count + 1))}>
				increment
			</button>
			<button onClick={() => setCount((count) => {
				trackUpdate(false);
				return count + 1;
			})}>
				disableHistory and increment
			</button>
			<button onClick={() => trackUpdate(false)}>
				disable history
			</button>
			<button onClick={() => trackUpdate(true)}>
				enable history
			</button>
			<button onClick={() => clear()}>Clear</button>
			<button onClick={undo} disabled={!canUndo}>Undo</button>
			<button onClick={redo} disabled={!canRedo}>Redo</button>
			<button onClick={() => go(+(document.querySelector('#go') as HTMLInputElement).value)}>
				Go
				<input type='number' id='go' style={{ marginLeft: 35, maxWidth: 40 }} />
			</button>
		</div>
	</>);
}

UseStateHistory.displayName = "UseStateHistory";

export { UseStateHistory };
