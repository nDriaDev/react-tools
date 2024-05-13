# usePrevious
It's track the previous value of a variable, with possibility to enable/disable tracking. [See demo](https://react-tools.ndria.dev/#/hooks/state/usePrevious)

## Usage

```tsx
function UsePrevious() {
    const [count, setCount] = useState(0);
    const [previous, toggleTrack] = usePrevious(count);


    return (<>
        <button onClick={() => setCount((count) => {
            const val = count + 1;
            if (val === 6) {
                toggleTrack(false);
            }
            if (val === 12) {
                toggleTrack(true);
            }
            if (val === 15) {
                toggleTrack(false);
            }
            return val;
        })}>
            increment
        </button>
        <button onClick={() => toggleTrack(false)}>
            no track
        </button>
        <button onClick={() => toggleTrack(true)}>
            track
        </button>
        <p>
            Count is {count}
        </p>
        <p>
            Previous is {previous === undefined ? 'undefined' : previous as number}
        </p>
    </>);
}

UsePrevious.displayName = "UsePrevious";

export { UsePrevious };
```

> The component has:
> - _counter useState variable_.
> - _previous variable_  returned by usePreviousHook, linked to _counter_ value and _toggleTracking_ function.
> - button _increment_ that executes function to update _counter value_. It executes _toggleTracking_ respectivelly to _disable/renable_ tracking when value to update is _6/12_. When value to update is _15_ it executes _toggleTracking_ to disable tracking with _15_ as last value.
> - button _no track_ that executes _toggleTracking_ to stop tracking.
> - button _track_ that executes _toggleTracking_ to restart tracking.
> 
> When increment button set _6_ as value, previous value stop tracking with _5_ as last value because no value was passed to _toggleTracking_. Same thing happens when increment set _12_ as value, the tracking restart from _12_. When increment set _15_ as value, last value tracked is _15_because it was passed to _toggleTracking_ as value to disable tracking.


## API

```tsx
usePrevious<T = unknown>(variable: T): [T|undefined, (enable: boolean) => void]
```


> ### Params
>
> - __variable__: _T_  
variable whose value is to be tracked.
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _T|undefined_  
>     - _(enable:boolean)=>void_  
>