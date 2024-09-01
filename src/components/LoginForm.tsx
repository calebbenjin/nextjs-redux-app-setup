"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { ReloadIcon } from "@radix-ui/react-icons";

const LoginForm = () => {
  const { push } = useRouter();
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    push("/portal");

    // let newErrors = { email: "", password: "" };

    // if (!formData.email) {
    //   newErrors.email = "Email is required";
    // }
    // if (!formData.password) {
    //   newErrors.password = "Password is required";
    // }

    // setErrors(newErrors);

    // if (Object.values(newErrors).every((error) => !error)) {
    //   setLoading(true);
    //   try {
    //     const res = await axios.post(`/api/login`, formData);
    //     if (res?.status == 200) {
    //       if (res?.data?.data?.user?.attributes?.fully_onboarded) {
    //         push("/account");
    //       } else {
    //         push("/onboarding");
    //       }
    //     }
    //   } catch (error: any) {
    //     console.log(error?.response?.data?.message);
    //     toast.error(error?.response?.data?.message || "Invalid Credentials");
    //     setLoading(false);
    //   }
    // }
  };

  return (
    <section className="w-full flex items-center justify-center ">
      <div className="form-container lg:w-6/12 w-10/12 mx-auto">
        <h1 className="font-bold text-xl lg:text-4xl text-center mb-16 space-y-2">
          <br /> <span className="text-blue-500">Admin Portal</span>
        </h1>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email address
            </label>
            <Input
              type="email"
              placeholder="vinfarm@gmail.com"
              className="h-[50px] mt-1 px-6 bg-transparent outline-none border-gray-500"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <div className="relative flex items-center">
              <Input
                type={hide ? "password" : "text"}
                placeholder="********"
                className="h-[50px] mt-1 px-6 bg-transparent outline-none"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="eyes absolute right-6 cursor-pointer">
                {hide ? (
                  <FaEyeSlash
                    onClick={() => setHide(!hide)}
                    className="h-6 w-6 text-gray-400"
                  />
                ) : (
                  <FaEye
                    onClick={() => setHide(!hide)}
                    className="h-6 w-6 text-gray-400"
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <Link
              href="/forgot-password"
              className="text-[--primary] text-sm text-blue-600 ">
              Forgot your password?
            </Link>
          </div>
          <Button className=" mt-8 font-semibold bg-blue-500 hover:bg-blue-500 w-full h-[53px] text-white">
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Loading..." : "Log In"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
