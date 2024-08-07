'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/utils/zod_schema';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
const Login = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.replace('/');
    }
  }, [session, router]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({ resolver: zodResolver(loginSchema) });
  const onSubmit = async (data: TSignInSchema) => {
    console.log(data);
    const res = await signIn('credentials', {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    if (res?.error) {
      console.log('Invalid email or password');
      if (res?.url) router.replace('/');
    } else {
      console.log('success');
    }
  };

  if (session?.status === 'loading') {
    return <h1>Loading...</h1>;
    reset();
  }

  type TSignInSchema = z.infer<typeof loginSchema>;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input type="email" placeholder="Enter Email" {...register('email')} />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          type="password"
          placeholder="Enter Password"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
        <button
          onClick={() => {
            signIn('github');
          }}
        >
          Sign in with github
        </button>
      </form>
    </>
  );
};

export default Login;
