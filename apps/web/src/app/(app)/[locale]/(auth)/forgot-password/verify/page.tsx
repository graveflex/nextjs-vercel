import ResetPasswordForm from './ResetPasswordForm';
import { resetPassword } from './actions';

interface ResetPasswordProps {
  searchParams: Promise<{
    token?: string;
  }>;
}

async function ForgotPassword({ searchParams }: ResetPasswordProps) {
  const { token } = await searchParams;

  return (
    <>
      {/* Sign-in form */}
      <ResetPasswordForm resetPassword={resetPassword} token={token} />
    </>
  );
}

export default ForgotPassword;
