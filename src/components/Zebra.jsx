// Zebra stripes like the ones on the salon's business card, drawn as SVG.
// `edge` says where the stripes hang from: 'top', 'bottom' or 'both'.
// The shapes come from a fixed seed, so they look the same on every visit.

const W = 1600;

function random(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// One tapered, slightly bent stripe hanging from y=0 down to `len`.
function stripe(x, w, len, bend) {
  const l = x - w / 2;
  const r = x + w / 2;
  const tip = x + bend;
  return `M${l},0 C${l + bend * 0.3},${len * 0.45} ${tip - w * 0.2},${len * 0.8} ${tip},${len} C${tip + w * 0.2},${len * 0.8} ${r + bend * 0.3},${len * 0.45} ${r},0 Z`;
}

function stripes(height, seed, flip) {
  const rnd = random(seed);
  const paths = [];
  for (let x = 6; x < W; x += 15 + rnd() * 16) {
    const w = 6 + rnd() * 11;
    const len = height * (0.35 + rnd() * 0.75);
    const bend = (rnd() - 0.5) * 34;
    paths.push(stripe(x, w, len, bend));
  }
  return <g transform={flip ? `translate(0 ${height}) scale(1 -1)` : undefined}>{paths.map((d, i) => <path key={i} d={d} />)}</g>;
}

export default function Zebra({ edge = 'both', height = 120, seed = 7, className = '' }) {
  return (
    <svg className={`zebra ${className}`} viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {(edge === 'top' || edge === 'both') && stripes(height, seed, false)}
      {(edge === 'bottom' || edge === 'both') && stripes(height, seed + 31, true)}
    </svg>
  );
}
