import LoginForm from "@/components/auth/login-form";
import Image from "next/image";

export const metadata = {
  title: "Sign In | NovixVPN",
  description: "Sign in to your NovixVPN account to access secure browsing",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
