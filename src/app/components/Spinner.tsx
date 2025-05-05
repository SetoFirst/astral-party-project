import PulseLoader from "react-spinners/PulseLoader";

const Spinner = () => {
  return (
    <div className="spinners">
      <PulseLoader
        color="#3170b1"
        loading
        margin={25}
        size={100}
        speedMultiplier={0.5}
      />
    </div>
  );
};

export default Spinner;
