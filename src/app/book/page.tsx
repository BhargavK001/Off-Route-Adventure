"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle } from "lucide-react";
import { destinations } from "@/data/destinations";

interface BookingFormData {
  fullName: string;
  age: string;
  gender: string;
  idType: string;
  idNumber: string;
  phone: string;
  email: string;
  destination: string;
  numberOfPeople: string;
  travelMode: string;
  specialConditions: string[];
  declaration: boolean;
}

function BookingForm() {
  const searchParams = useSearchParams();
  const destinationParam = searchParams.get("destination") || "";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: {
      destination: destinationParam,
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age *
            </label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 5, message: "Minimum age is 5" },
                max: { value: 80, message: "Maximum age is 80" },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your age"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender *
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
            )}
          </div>

          {/* ID Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ID Type *
            </label>
            <select
              {...register("idType", { required: "ID type is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select ID type</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
              <option value="passport">Passport</option>
              <option value="driving">Driving License</option>
            </select>
            {errors.idType && (
              <p className="text-red-500 text-sm mt-1">{errors.idType.message}</p>
            )}
          </div>

          {/* ID Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ID Number *
            </label>
            <input
              type="text"
              {...register("idNumber", { required: "ID number is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your ID number"
            />
            {errors.idNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.idNumber.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Trip Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destination */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination *
            </label>
            <select
              {...register("destination", { required: "Please select a destination" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select destination</option>
              {destinations.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.name} - ₹{dest.price.toLocaleString()} ({dest.duration})
                </option>
              ))}
            </select>
            {errors.destination && (
              <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
            )}
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of People *
            </label>
            <input
              type="number"
              {...register("numberOfPeople", {
                required: "Number of people is required",
                min: { value: 1, message: "Minimum 1 person" },
                max: { value: 50, message: "Maximum 50 people" },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter number of people"
            />
            {errors.numberOfPeople && (
              <p className="text-red-500 text-sm mt-1">{errors.numberOfPeople.message}</p>
            )}
          </div>

          {/* Travel Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Travel Mode *
            </label>
            <select
              {...register("travelMode", { required: "Please select travel mode" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select travel mode</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="car">Car</option>
              <option value="flight">Flight</option>
              <option value="self">Self Arranged</option>
            </select>
            {errors.travelMode && (
              <p className="text-red-500 text-sm mt-1">{errors.travelMode.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Special Conditions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Special Conditions (if applicable)
        </h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="kids"
              {...register("specialConditions")}
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-gray-700">Traveling with Kids (below 12 years)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="senior"
              {...register("specialConditions")}
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-gray-700">Senior Citizens (above 60 years)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="disability"
              {...register("specialConditions")}
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-gray-700">
              Person with Disability (requires special assistance)
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="medical"
              {...register("specialConditions")}
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-gray-700">Medical Conditions (please inform leader)</span>
          </label>
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Declaration & Terms
        </h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-600 max-h-40 overflow-y-auto">
          <p className="mb-2">
            <strong>Disclaimer:</strong> Off Route Adventure organizes adventure
            activities that involve inherent risks. By booking with us, you acknowledge
            that you are participating at your own risk.
          </p>
          <p className="mb-2">
            <strong>Refund Policy:</strong> Cancellations made 7 days prior to the trip
            are eligible for a 50% refund. No refunds for cancellations within 7 days
            of the trip date.
          </p>
          <p className="mb-2">
            <strong>Safety:</strong> Participants must follow all safety guidelines
            provided by trek leaders. The organizers reserve the right to refuse
            participation if safety protocols are not followed.
          </p>
          <p>
            <strong>Personal Responsibility:</strong> Participants are responsible for
            their personal belongings, health, and fitness for the chosen activity.
          </p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("declaration", {
              required: "You must accept the declaration to proceed",
            })}
            className="w-5 h-5 text-green-600 rounded focus:ring-green-500 mt-1"
          />
          <span className="text-gray-700 text-sm">
            I have read and agree to the above declaration, terms and conditions,
            refund policy, and safety guidelines. I confirm that all the information
            provided is accurate and I am physically fit for the chosen activity.
          </span>
        </label>
        {errors.declaration && (
          <p className="text-red-500 text-sm mt-2">{errors.declaration.message}</p>
        )}
      </div>

      {/* Submit Status */}
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <div>
            <p className="font-medium text-green-800">Booking Request Submitted!</p>
            <p className="text-green-600 text-sm">
              We&apos;ve received your booking request. Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="h-6 w-6 text-red-600" />
          <div>
            <p className="font-medium text-red-800">Submission Failed</p>
            <p className="text-red-600 text-sm">
              There was an error submitting your booking. Please try again or contact us
              directly.
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
      </button>
    </form>
  );
}

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Adventure</h1>
            <p className="text-xl text-green-100">
              Fill in the details below to book your next adventure with us. Our team
              will contact you to confirm your booking.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
