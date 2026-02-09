import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import { toast } from "react-toastify";

import { Eye, EyeOff } from 'lucide-react';

import axiosInstance from "../services/axios";

const SignUpPage = () => {

    const history = useHistory();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    const turkishPhoneRegex = /^(\+90|0)?5\d{9}$/;
    const taxNoRegex = /^T\d{4}V\d{6}$/;
    const ibanRegex = /^TR\d{24}$/;

    const [roles, setRoles] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        axiosInstance.get("/roles")
        .then((response) => setRoles(response.data))
        .catch(() => setError("root", { message: "Roles could not be loaded." }));
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isValid },
        setError,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            role_id: 2,
            terms: false,
        },
    });

    const isDisabled = isSubmitting;

    const selectedRole = watch("role_id");
    const isTermsAccepted = watch("terms");
    const isStored = Number(selectedRole) === 3;

    const getPasswordStrength = (password = '') => {
        let strengthScore = 0;
        if (password.length >= 8) strengthScore++;
        if (/[a-z]/.test(password)) strengthScore++;
        if (/[A-Z]/.test(password)) strengthScore++;
        if (/\d/.test(password)) strengthScore++;
        if (/[^A-Za-z\d]/.test(password)) strengthScore++;
        return strengthScore;
    };

    const passwordValue = watch("password");
    const strength = getPasswordStrength(passwordValue);

    const strengthMap = {
        0: {text: "", color: "bg-[#BDBDBD]" },
        1: {text: "Very weak", color: "bg-[#E74040]" },
        2: {text: "Weak", color: "bg-[#f9a60d]" },
        3: {text: "Medium", color: "bg-[#fee60b]" },
        4: {text: "Strong", color: "bg-[#23A6F0]" },
        5: {text: "Very strong", color: "bg-[#2DC071]" },
    };

    const onSubmit = async (data) => {
        try {
            let payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id,
            };

            if (isStored) {
                if (
                    !data.store_name ||
                    !data.store_phone ||
                    !data.tax_no ||
                    !data.bank_account
                ) {
                    toast.error("Please fill all store fields");
                    return;
                }
                
                payload.store = {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.tax_no,
                    bank_account: data.bank_account,
                };
            }

            await axiosInstance.post("/signup", payload);

            toast.success("You need to click link in email to activate your account!", { autoClose: 2000 });

            setTimeout(() => {
                history.push("/login");
            })

        } catch (err) {
            toast.error(
                err.response?.data?.message || "Signup failed"
            );
        }
    };

    return (
        <section className='min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#fafafa]'>

            <div className='flex items-center justify-center px-6'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full max-w-md space-y-5'
                >
                    <h2 className='text-3xl font-bold text-[#252B42] mb-8'>
                        Get Started Now
                    </h2>

                    <label className='label-text'>Name</label>
                    <input
                        placeholder="Name"
                        className='input-style'
                        disabled={isDisabled}
                        {...register("name", {
                            required: "Name is required",
                            minLength: { value: 3, message: "Min 3 characters"},
                        })} 
                    />
                    {errors.name && (
                        <p className='error-text'>{errors.name.message}</p>
                    )}

                    <label className='label-text'>Email</label>
                    <input
                        placeholder="Email"
                        className='input-style'
                        disabled={isDisabled}
                        {...register("email", {
                            required: "Email is required",
                        })} 
                    />
                    {errors.email && (
                        <p className='error-text'>{errors.email.message}</p>
                    )}

                    <label className='label-text'>Password</label>

                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            disabled={isDisabled}
                            className='input-style pr-10'
                            {...register("password", {
                                required: true,
                                pattern: {
                                    value: passwordRegex,
                                    message: "Password must be strong",
                                },
                            })} 
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373]"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {passwordValue && !errors.password && (
                        <div className='space-y-1'>
                            <div className='w-full h-2 bg-[#F6F6F6] rounded'>
                                <div
                                    className={`h-2 rounded transition-all ${strengthMap[strength].color}`}
                                    style={{ width: `${(strength / 5) * 100}%` }}
                                />
                            </div>
                            <p className='text-xs text-[#737373]'>
                                {strengthMap[strength].text}
                            </p>
                        </div>
                    )}

                    {errors.password && (
                        <p className='error-text'>{errors.password.message}</p>
                    )}

                    <div className='block text-sm font-medium mb-6'>
                        <label className='label-text'>Role</label>
                        <select
                            className='input-style'
                            disabled={isDisabled} 
                            {...register("role_id")}>
                            {roles.map(r => (
                                <option key={r.id} value={r.id}>{r.name}</option>
                            ))}
                        </select>
                    </div>

                    {isStored && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300'>
                            <div>
                                <label className='label-text'>Store Name</label>
                                <input
                                    placeholder="Store Name"
                                    disabled={isDisabled}
                                    className='input-style'
                                    {...register("store_name", {
                                        required: "Store name is required",
                                        minLength: { value: 3, message: "Min 3 characters" }
                                    })}
                                />
                                {errors.store_name && (
                                    <p className='error-text'>{errors.store_name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className='label-text'>Store Phone Number</label>
                                <input
                                    placeholder="Store Phone"
                                    disabled={isDisabled}
                                    className='input-style'
                                    {...register("store_phone", {
                                        required: "Store phone is required",
                                        pattern: {
                                        value: turkishPhoneRegex,
                                        message: "Invalid Turkish phone number"
                                        }
                                    })}
                                />
                                {errors.store_phone && (
                                    <p className='error-text'>{errors.store_phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label className='label-text'>Tax Number</label>
                                <input
                                    placeholder="Tax No"
                                    disabled={isDisabled}
                                    className='input-style'
                                    {...register("tax_no", {
                                        required: "Tax number is required",
                                        pattern: {
                                        value: taxNoRegex,
                                        message: "Tax number format must be TXXXXVXXXXXX"
                                        }
                                    })}
                                />
                                {errors.tax_no && (
                                    <p className='error-text'>{errors.tax_no.message}</p>
                                )}
                            </div>

                            <div>
                                <label className='label-text'>IBAN</label>
                                <input
                                    placeholder="IBAN"
                                    disabled={isDisabled}
                                    className='input-style'
                                    {...register("bank_account", {
                                        required: "Bank account is required",
                                        pattern: {
                                        value: ibanRegex,
                                        message: "Invalid IBAN"
                                        }
                                    })}
                                />
                                {errors.bank_account && (
                                    <p className='error-text'>{errors.bank_account.message}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {errors.root && <p>{errors.root.message}</p>}

                    <div className='flex items-start gap-2'>
                        <input
                            type='checkbox'
                            disabled={isDisabled}
                            {...register("terms", {
                                validate: v => v === true || "You must accept the terms"
                            })}
                            className='mt-1 accent-[#3E5F2C]'
                        />
                        <p className='text-sm text-[#737373]'>
                            I agree to the <span className='underline cursor-pointer text-[#236AF0]'>terms & policy conditions</span>
                        </p>
                    </div>

                    {errors.terms && (
                        <p className='error-text'>{errors.terms.message}</p>
                    )}

                    <button 
                        disabled={isSubmitting || !isValid || !isTermsAccepted}
                        className='w-full bg-[#3E5F2C] text-white py-3 rounded-lg font-semibold hover:bg-[#2F4A22] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                    >
                        {isSubmitting && (
                            <span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                        )}
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                    </button>
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

export default SignUpPage;