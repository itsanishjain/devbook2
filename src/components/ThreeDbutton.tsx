import { Loader } from "./Loader";

export default function ThreeDbutton({
  text,
  onClick,
  isLoading,
}: {
  text: string;
  onClick: any;
  isLoading: boolean;
}) {
  return (
    <div className="flex space-x-4">
      <button
        className={"mt-4 group/button rounded-lg bg-[#222222] text-black"}
        onClick={onClick}
      >
        <span
          className={
            "block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-warning px-16 py-4 text-md font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0"
          }
        >
          {isLoading ? <Loader /> : text}
        </span>
      </button>
    </div>
  );
}
