import './TwoToneBg.css';

const TwoToneBg = ({ bg1, bg2, ratio, height, width }) => {
  const bg2Ratio = 100 - parseFloat(ratio) + "%";
  return (
    <div className="two-tone-bg" style={{ height, width }}>
        <div style={{ backgroundColor: bg1, width: ratio }} />
        <div style={{ backgroundColor: bg2, width: bg2Ratio }} />
      </div>
  );
};

export default TwoToneBg;