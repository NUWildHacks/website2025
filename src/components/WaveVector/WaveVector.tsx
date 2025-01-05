import "./WaveVector.scss";

interface IWaveVector {
  color: string;
  waviness: 0 | 1 | 2 | 3;
  flip?: boolean;
  otherColor?: string;
}

export const WaveVector: React.FC<IWaveVector> = ({
  color,
  waviness,
  flip = false,
  otherColor = "#00000000",
}) => {
  let bodyColor = { fill: color };
  let outerColor = { fill: otherColor };

  let waveZero = (
    <path
      d="M0,100h1000v-20.92h0c-226.65-32.3-344.51-51.74-731.25-19.85L0,79.08v20.92Z"
      style={bodyColor}
    />
  );
  let waveOne = (
    <path
      d="M0,100h1000v-21.14h0C742.62,0,262.14,0,0,78.86h0v21.14Z"
      style={bodyColor}
    />
  );
  let waveTwo = (
    <path
      d="M0,100h1000v-62.62h0c-158.83-28.7-113.16-28.7-509.82,19.94C201.72,92.7,272.85,23.56,0,23.56h0v76.44Z"
      style={bodyColor}
    />
  );
  let waveThree = (
    <path
      d="M0,100h1000v-62.62h0c-250.54,69.26-244.8,40.85-485.56-6.35C229.65-24.8,267.27,118.01,0,23.56h0v76.44Z"
      style={bodyColor}
    />
  );

  let waves = [waveZero, waveOne, waveTwo, waveThree];

  return (
    <div className="wave_vector__wrapper">
      <svg
        className={`${flip && "upside_down"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
      >
        <rect x="0" y="0" width="1000" height="90" style={outerColor} />
        {waves[waviness]}
      </svg>
    </div>
  );
};

export default WaveVector;
