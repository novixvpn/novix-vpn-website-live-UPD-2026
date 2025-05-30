import RegisterForm from "@/components/auth/register-form";
import Image from "next/image";

export const metadata = {
  title: "Create Account | NovixVPN",
  description: "Create your NovixVPN account to start secure browsing",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
