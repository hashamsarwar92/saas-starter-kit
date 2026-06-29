import { AlertCircle, CheckCircle } from "lucide-react";

type FormAlertProps = {
  message: string | null;
  type?: "error" | "success";
};

export default function FormAlert({
  message,
  type = "error",
}: FormAlertProps) {
  if (!message) return null;

  const isError = type === "error";

  return (
    <div
      className={`p-4 rounded-lg mb-6 flex items-center gap-2 ${
        isError
          ? "bg-red-50 text-red-700"
          : "bg-green-50 text-green-700"
      }`}
    >
      {isError ? (
        <AlertCircle className="h-5 w-5 flex-shrink-0" />
      ) : (
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
      )}

      <p>{message}</p>
    </div>
  );
}