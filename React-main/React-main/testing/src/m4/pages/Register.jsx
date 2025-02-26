import React from 'react';
import Label from '../Component/Label';
import Input from '../Component/input';
import Button from '../Component/Button';
const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          Register
        </h2>
        <p className="text-gray-600 mb-6">
          Bergabunglah dengan kami dengan mendaftarkan akun baru
        </p>
        <form className="space-y-4">
          {/* Username Field */}
          <div className="mb-4">
           <Label>Usernamel</Label>
            <Input>password0</Input>
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <Label>Email</Label>
            <Input>password1</Input>
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <Label>Password</Label>
            <Input>password2</Input>
          </div>
          {/* Confirm Password Field */}
          <div className="mb-4">
            <Label>Confirm Password</Label>
            <Input>password3</Input>
          </div>
          {/* Register Button */}
          <Button>Register</Button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Sudah punya akun?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
