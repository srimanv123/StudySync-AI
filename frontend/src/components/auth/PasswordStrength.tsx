import React, { useMemo } from 'react';
import { Check, X } from 'lucide-react';

interface PasswordStrengthProps {
  password: string;
}

function calculateStrength(password: string): {
  strength: 'weak' | 'fair' | 'good' | 'strong';
  score: number;
  checks: {
    hasMinLength: boolean;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSpecialChar: boolean;
  };
} {
  const checks = {
    hasMinLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const checksPassed = Object.values(checks).filter(Boolean).length;

  let strength: 'weak' | 'fair' | 'good' | 'strong' = 'weak';
  if (checksPassed >= 4) strength = 'strong';
  else if (checksPassed === 3) strength = 'good';
  else if (checksPassed === 2) strength = 'fair';

  return {
    strength,
    score: checksPassed,
    checks,
  };
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const { strength, score, checks } = useMemo(
    () => calculateStrength(password),
    [password]
  );

  const colors = {
    weak: 'bg-red-200',
    fair: 'bg-yellow-200',
    good: 'bg-blue-200',
    strong: 'bg-green-200',
  };

  const strengthTexts = {
    weak: 'Weak',
    fair: 'Fair',
    good: 'Good',
    strong: 'Strong',
  };

  if (!password) return null;

  return (
    <div className="space-y-3 pt-2">
      {/* Strength bar */}
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i < score ? colors[strength] : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Strength label */}
      <p className="text-xs font-medium text-gray-600">
        Password strength: <span className={`text-${strength === 'weak' ? 'red' : strength === 'fair' ? 'yellow' : strength === 'good' ? 'blue' : 'green'}-600`}>
          {strengthTexts[strength]}
        </span>
      </p>

      {/* Requirements checklist */}
      <div className="space-y-2 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          {checks.hasMinLength ? (
            <Check size={14} className="text-green-600" />
          ) : (
            <X size={14} className="text-gray-300" />
          )}
          <span>At least 8 characters</span>
        </div>
        <div className="flex items-center gap-2">
          {checks.hasUppercase ? (
            <Check size={14} className="text-green-600" />
          ) : (
            <X size={14} className="text-gray-300" />
          )}
          <span>One uppercase letter</span>
        </div>
        <div className="flex items-center gap-2">
          {checks.hasLowercase ? (
            <Check size={14} className="text-green-600" />
          ) : (
            <X size={14} className="text-gray-300" />
          )}
          <span>One lowercase letter</span>
        </div>
        <div className="flex items-center gap-2">
          {checks.hasNumbers ? (
            <Check size={14} className="text-green-600" />
          ) : (
            <X size={14} className="text-gray-300" />
          )}
          <span>One number</span>
        </div>
        <div className="flex items-center gap-2">
          {checks.hasSpecialChar ? (
            <Check size={14} className="text-green-600" />
          ) : (
            <X size={14} className="text-gray-300" />
          )}
          <span>One special character</span>
        </div>
      </div>
    </div>
  );
}
