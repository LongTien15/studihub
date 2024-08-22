export default function Countdown() {
  return (
    <div className="flex items-center gap-4">
      <DigitBox number={12} />
      <Divider />
      <DigitBox number={35} />
      <Divider />
      <DigitBox number={58} />
    </div>
  );
}

const DigitBox = ({ number }: { number: Number }) => {
  return (
    <div
      className="text-text-2 gap-6 rounded-2xl p-[24px] text-3xl font-semibold"
      style={{
        background:
          'radial-gradient(50.01% 50.01% at 50% 45.62%, rgba(42, 66, 106, 0.3) 0%, rgba(17, 16, 16, 0.3) 100%)',
      }}
    >
      {number.toString()}
    </div>
  );
};

const Divider = () => {
  return <h1 className="text-5xl font-extrabold text-[#64748B]">:</h1>;
};
