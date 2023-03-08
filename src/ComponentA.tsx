import useStorage from "./useStorage";

const config = {
  key: "thing one",
  value: { foo: "boo", bar: "bee" },
};

function ComponentA() {
  const [storage, setStorage] = useStorage(config);
  return (
    <div className="ComponentA">
      <p>ComponentA</p>
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

export default ComponentA;
