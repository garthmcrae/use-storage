import useStorage from "./useStorage";

const config = {
  key: "thing two",
  value: { foo: "foo" },
};

function ComponentC() {
  const [storage, setStorage] = useStorage(config);
  return (
    <div className="ComponentC">
      <p>ComponentC</p>
      <button
        onClick={function () {
          setStorage({ foo: "boo" });
        }}
      >
        Set {storage.foo} to boo
      </button>
      <button
        onClick={function () {
          setStorage({ foo: "fee" });
        }}
      >
        Set {storage.foo} to fee
      </button>
    </div>
  );
}

export default ComponentC;
