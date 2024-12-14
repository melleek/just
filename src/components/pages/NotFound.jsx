import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1 className="text-[120px] font-[700] flex flex-col items-center py-[80px] bg-custom">
        PAGE IS INVALID
        <Link to="/" className="text-[20px] font-[400]">
          please go to another page
        </Link>
      </h1>
    </div>
  );
}
