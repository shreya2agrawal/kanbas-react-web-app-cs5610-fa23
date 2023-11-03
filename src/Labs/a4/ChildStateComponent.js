function ChildStateComponent({ counter, setCounter }) {
  return (
    <div>
      <h3>Counter Child {counter}</h3>
      <button className="btn btn-info" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button className="btn btn-info" onClick={() => setCounter(counter - 1)}>
        Dedrement
      </button>
    </div>
  );
}

export default ChildStateComponent;
