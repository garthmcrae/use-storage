import useStorage from "./useStorage";

const config = {
  key: "thing one",
  value: { foo: "boo", bar: "bee" },
};

function ComponentB() {
  const [storage, setStorage] = useStorage(config);
  return (
    <div className="ComponentB">
      <p>ComponentB</p>
      <button
        onClick={function () {
          setStorage({ ...storage, foo: "bee" });
        }}
      >
        Set {storage.foo} to bee
      </button>
    </div>
  );
}

export default ComponentB;
