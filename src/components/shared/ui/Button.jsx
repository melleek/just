export function Button({ title, className }) {
  return (
    <button
      className={`text-[#fff] text-[16px] rounded-[90px] py-[21px] px-[62px] shadow-custom ${className}`}
    >
      {title}
    </button>
  );
}
