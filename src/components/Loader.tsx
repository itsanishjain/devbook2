import { LoaderIcon } from "react-hot-toast";

export function Loader() {
  return (
    <div className="animate-spin">
      <LoaderIcon style={{ width: "16px", height: "16px" }} />
    </div>
  );
}
