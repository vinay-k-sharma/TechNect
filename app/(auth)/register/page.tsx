'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/utils/zod_schema';
import { z } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(registerSchema) });
  const router = useRouter();
  const { toast } = useToast();
  const onSubmit = async (data: TSignUpSchema) => {
    console.log(data);
    try {
      await axios.post('/api/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      router.push('/login');
      toast({
        title: 'Registerd Successfully, Welcome !',
        variant: 'default',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error Registering, try again',
        variant: 'default',
      });
    }
    reset();
  };

  type TSignUpSchema = z.infer<typeof registerSchema>;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-24 flex w-1/3 flex-col items-center justify-center border border-black"
      >
        <input
          type="text"
          placeholder="Enter Name"
          {...register('name')}
          className="border"
        />
        {errors.name && (
          <p className="text-red-500">{`${errors.name.message}`}</p>
        )}
        <input
          type="email"
          placeholder="Enter Email"
          {...register('email')}
          className="border"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          type="password"
          placeholder="Enter Password"
          className="border"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          type="password"
          placeholder="confirm_password"
          className="border"
          {...register('confirm_password')}
        />
        {errors.confirm_password && (
          <p className="text-red-500">{`${errors.confirm_password.message}`}</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
