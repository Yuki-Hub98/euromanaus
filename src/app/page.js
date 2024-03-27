
"use client"
import {Button} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { TypewriterEffect } from "@/components/ui/animation/typewriter-effect";
export default function Home() {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

	const words = [
    {
      text: "Euromanaus",
      className: "text-[#edca62b4] dark:text-[#edca62b4]",
    },
  ];
	return (
		<>
			<div className="h-screen flex flex-col pl-2 bg-background-page">
				<div className="min-h-screen flex items-center justify-center bg-background-page py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-md w-full space-y-8">
						<div>
							<TypewriterEffect words={words}/>
						</div>
						<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
							<input type="hidden" name="remember" value="true" />
							<div className="rounded-md shadow-sm -space-y-px">
								<div>
									<label htmlFor="email-address" className="sr-only">
										Email address
									</label>
									<input
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-background-table placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#edca62b4] focus:border-[#edca62b4] focus:z-10 sm:text-sm"
										placeholder="Email address"
										value={email}
										onChange={handleEmailChange}
									/>
								</div>
								<div>
									<label htmlFor="password" className="sr-only">
										Password
									</label>
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-background-table placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#edca62b4] focus:border-[#edca62b4] focus:z-10 sm:text-sm"
										placeholder="Password"
										value={password}
										onChange={handlePasswordChange}
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-[#edca62b4] accent-[#edca62b4] focus:ring-[#edca62b4] border-background-table rounded"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-background-table"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-[#edca62b4] hover:background-table"
									>
										Forgot your password?
									</a>
								</div>
							</div>
							<div>
							<Button className="group relative w-full flex justify-center py-2 px-4 bg-[#edca62b4] shadow-lg text-white shadow-indigo-500/20"><Link href={"/dashboard"}>Navegar dashboard</Link></Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}