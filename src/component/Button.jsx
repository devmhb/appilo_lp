export const PriBtn = ({ text, normal }) => {
  return (
    <>
      {normal ? (
        <button className="relative bg-[#131923] text-white py-3 px-6 rounded-[2rem] font-bold">
          {text}
        </button>
      ) : (
        <button className="pribtn text-base w-fit">{text}</button>
      )}
    </>
  );
};

export const SecBtn = ({ text }) => {
  return <button className="secbtn">{text}</button>;
};
