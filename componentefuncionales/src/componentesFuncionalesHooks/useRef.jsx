import { useRef } from "react";

const UseRef = () => {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = "Chanchito feliz";
  };
  const focus = () => {
    console.log(ref.current.focus());
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>La lala</div>
    </div>
  );
};
export default UseRef;
