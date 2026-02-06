import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link} from "react-router-dom";
import { toast } from 'react-toastify';
import Gravatar from 'react-gravatar';

import { loginUser } from "../store/client/clientThunks";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const emailValue = watch("email");

    const onSubmit = async (data) => {
        try {
            await dispatch(
                loginUser(
                    { email: data.email, password: data.password },
                    data.rememberMe
                )
            );

            toast.success("Welcome back!");

            const redirectTo = location.state?.from || "/";

            history.push(redirectTo);
        } catch (error) {
            const message = 
                typeof error === "string"
                    ? error
                    : "Login failed";

            toast.error(message);
        }
    };

    return (
        <section className='min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#FAFAFA]'>
            <div className='flex items-center justify-center px-6'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md space-y-5"
                >
                    <h2 className='text-3xl font-bold text-[#252B42]'>
                        Welcome back!
                    </h2>

                    <p className='text-sm text-[#737373] mb-6'>
                        Enter your credentials to access your account
                    </p>

                    <label className='label-text'>Email Address</label>
                    <input
                        placeholder="Enter your email"
                        className='input-style'
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email address"
                            },
                        })}
                    />
                    {errors.email && (
                        <p className='error-text'>{errors.email.message}</p>
                    )}

                    <label className='label-text flex justify-between'>
                        Password
                        <span className='text-xs text-[#236AF0] cursor-pointer'>
                            Forgot Password?
                        </span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className='input-style'
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && (
                        <p className='error-text'>{errors.password.message}</p>
                    )}

                    <div className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            {...register("rememberMe")}
                        />
                        <span className='text-sm text-[#737373]'>
                            Remember me for 30 days
                        </span>
                    </div>

                    <button
                        disabled={isSubmitting}
                        className='w-full bg-[#3E5F2C] text-white py-3 rounded-lg font-semibold hover:bg-[#2F4A22] transition disabled:opacity-50'
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>

                    {emailValue && (
                        <div className='flex items-center justify-center gap-2 pt-4'>
                            <Gravatar
                                email={emailValue}
                                size={32}
                                className='rounded-full'
                            />
                            <span className='text-sm text-[#737373]'>
                                {emailValue}
                            </span>
                        </div>
                    )}

                    <p className='text-sm text-center text-[#737373] pt-4'>
                        Don't have an account?{" "}
                        <Link
                            to='/signup'
                            className='text-[#236AF0] font-medium'
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>

            <div className='hidden lg:block relative'>
                <img
                    src='/images/signup_bg.png'
                    alt="signup leaves"
                    className='absolute inset-0 w-full h-full object-cover'
                />
            </div>
        </section>
    );
};

export default LoginPage;