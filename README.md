# Use storage

A React hook similar to `React.useState` that stores state in storage. State can be accessed anywhere in the application without the need for wrapping your application and or components in a provider.

## Install

```bash
npm install --save @garthmcrae/use-storage
```

## Usage

```jsx
import useStorage from "./useStorage";

const config = {
  key: "STORAGE_NAME",
  value: { foo: "boo", bar: "far" },
};

function Component() {
  const [storage, setStorage] = useStorage(config);
  return (
    <div className="Component">
      <h2>Component</h2>
      <button
        onClick={function () {
          setStorage({ ...storage, foo: "baz" });
        }}
      >
        Set {storage.foo} to baz
      </button>
    </div>
  );
}

export default Component;
```

## Dependencies

- [**react**](https://www.npmjs.com/package/react)
