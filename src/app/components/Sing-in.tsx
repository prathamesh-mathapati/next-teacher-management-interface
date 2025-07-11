"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const demoUsers = [
  { role: "admin", email: "admin@gmail.com", password: "1234567890" },
  { role: "teacher", email: "teacher@gmail.com", password: "1234567890" },
  { role: "student", email: "student@gmail.com", password: "1234567890" },
  { role: "parent", email: "parent@gmail.com", password: "1234567890" },
];

const SingIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { email?: string; password?: string } = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as "email" | "password"] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    } else {
      setErrors({});
    }

    const matchedUser = demoUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      localStorage.setItem("rotel", matchedUser.role);
      router.push("/admin");
    } else {
      alert("Incorrect email and password");
    }
  };

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-8 rounded shadow"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </form>

      {/* Demo credentials section */}
      <div className="mt-8 max-w-md w-full bg-white p-6 rounded shadow text-sm text-gray-700">
        <h3 className="font-semibold mb-2 text-center">Demo Credentials</h3>
        <ul>
          {demoUsers.map(({ role, email, password }) => (
            <li key={email} className="mb-1">
              <strong>{role.charAt(0).toUpperCase() + role.slice(1)}:</strong>{" "}
              {email} / {password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingIn;
