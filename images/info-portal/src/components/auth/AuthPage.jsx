import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import logo1 from '../../assets/Logo_IM.jpg'

export function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={logo1} alt="IM Logo" className="h-20 w-auto rounded-lg shadow-lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            InformasjonsPortalen VG1
          </h1>
          <p className="text-blue-100">
            Åssiden videregående skole
          </p>
        </div>

        {/* Auth Forms */}
        {isLogin ? (
          <LoginForm 
            onLogin={onLogin}
            onSwitchToSignup={() => setIsLogin(false)}
          />
        ) : (
          <SignupForm 
            onSignup={onLogin}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-100 text-sm">
            &copy; 2025 Åssiden videregående skole
          </p>
        </div>
      </div>
    </div>
  )
}