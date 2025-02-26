import React from 'react';
import Label from '../Component2/Label';
import Input from '../Component2/input';
import Button from '../Component2/Button';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          Login
        </h2>
        <p className="text-gray-600 mb-6">
          selamat datang di website kami
        </p>
        <form className="space-y-4">
          {/* Username Field */}
          <div className="mb-4">
            <Label>Username</Label>
          <Input type="text" id="username"
          placeholder={"Enter your name "}/>
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <Label>Password</Label>
         <Input type="password" id="password"
         placeholder="Enter your name "/>
          </div>
          {/* Login Button */}
          <Button type="submit">Login</Button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            belum punya akun?{' '}
            <a href="/register" className="text-blue-600 font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
