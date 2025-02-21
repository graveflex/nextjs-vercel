import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import { sendPasswordResetEmail } from '@mono/web/lib/auth/config';
import Link from 'next/link';

import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPassword } from './actions';

async function ForgotPassword() {
  return (
    <>
      {/* Sign-in form */}
      <ForgotPasswordForm forgotPassword={forgotPassword} />
    </>
  );
}

export default ForgotPassword;
