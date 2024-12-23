import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSocialSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Your Mom's Cookbook
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <button
              onClick={() => handleSocialSignIn('google')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Continue with Google
            </button>

            <button
              onClick={() => handleSocialSignIn('facebook')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Continue with Facebook
            </button>

            <button
              onClick={() => handleSocialSignIn('twitter')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-500"
            >
              Continue with Twitter
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div>
              <label htmlFor="phone-number" className="sr-only">
                Phone number
              </label>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              onClick={() => {
                // Handle phone number verification here
                console.log('Verify phone number:', phoneNumber);
              }}
            >
              Continue with Phone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
