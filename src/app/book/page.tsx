"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  CheckCircle,
  AlertCircle,
  Shield,
  Users,
  Star,
  Phone,
  ArrowRight,
  MapPin,
  Loader2,
} from "lucide-react";
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

/* ── Shared field style ───────────────────────── */
const inputCls =
  "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow duration-200";

const labelCls = "block text-xs font-semibold text-gray-500 uppercase tracking-[0.1em] mb-2";

/* ── Section header ───────────────────────────── */
function SectionHeader({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <span className="text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] shrink-0">
        {index}
      </span>
      <span className="flex-1 h-px bg-gray-100" />
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-[0.12em] shrink-0">
        {title}
      </h2>
    </div>
  );
}

/* ── Trust sidebar ────────────────────────────── */
function TrustSidebar() {
  return (
    <div className="lg:sticky lg:top-24 space-y-6">
      {/* Why book card */}
      <div
        className="rounded-2xl p-7"
        style={{ background: "#0a1a0a" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-green-500" />
          <span className="text-green-400 text-[10px] font-semibold uppercase tracking-[0.2em]">
            Why Book With Us
          </span>
        </div>
        <ul className="space-y-5">
          {[
            {
              Icon: Shield,
              title: "Safety Certified",
              sub: "All leaders first-aid trained",
            },
            {
              Icon: Users,
              title: "Expert Guided",
              sub: "Years of terrain experience",
            },
            {
              Icon: Star,
              title: "4.8 Rated",
              sub: "500+ happy trekkers",
            },
            {
              Icon: MapPin,
              title: "16+ Destinations",
              sub: "Sahyadri & beyond",
            },
          ].map(({ Icon, title, sub }) => (
            <li key={title} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-green-900/60 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact card */}
      <div className="rounded-2xl border border-gray-100 p-6 bg-white">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="h-4 w-4 text-green-600" />
          <span className="text-xs font-bold text-gray-900 uppercase tracking-[0.12em]">
            Need Help?
          </span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Our team is available to help you pick the right trek and answer any
          questions before you book.
        </p>
        <a
          href="https://wa.me/918421632688"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
        >
          Chat on WhatsApp
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Refund note */}
      <div className="rounded-xl bg-amber-50 border border-amber-100 p-5">
        <p className="text-amber-800 text-xs font-semibold uppercase tracking-[0.1em] mb-1">
          Refund Policy
        </p>
        <p className="text-amber-700 text-sm leading-relaxed">
          50% refund for cancellations 7+ days before your trek date. No
          refunds within 7 days.
        </p>
      </div>
    </div>
  );
}

/* ── Booking form ─────────────────────────────── */
function BookingForm() {
  const searchParams = useSearchParams();
  const destinationParam = searchParams.get("destination") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: { destination: destinationParam },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

      {/* ── 01 Personal Information ── */}
      <div>
        <SectionHeader index="01" title="Personal Information" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div>
            <label className={labelCls}>Full Name *</label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className={inputCls}
              placeholder="Your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>Age *</label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 5, message: "Minimum age is 5" },
                max: { value: 80, message: "Maximum age is 80" },
              })}
              className={inputCls}
              placeholder="Your age"
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1.5">{errors.age.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>Gender *</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className={inputCls}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1.5">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>ID Type *</label>
            <select
              {...register("idType", { required: "ID type is required" })}
              className={inputCls}
            >
              <option value="">Select ID type</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
              <option value="passport">Passport</option>
              <option value="driving">Driving License</option>
            </select>
            {errors.idType && (
              <p className="text-red-500 text-xs mt-1.5">{errors.idType.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>ID Number *</label>
            <input
              type="text"
              {...register("idNumber", { required: "ID number is required" })}
              className={inputCls}
              placeholder="Enter ID number"
            />
            {errors.idNumber && (
              <p className="text-red-500 text-xs mt-1.5">{errors.idNumber.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>Phone Number *</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className={inputCls}
              placeholder="10-digit mobile number"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className={labelCls}>Email Address *</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email address",
                },
              })}
              className={inputCls}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── 02 Trip Details ── */}
      <div>
        <SectionHeader index="02" title="Trip Details" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div className="sm:col-span-2">
            <label className={labelCls}>Destination *</label>
            <select
              {...register("destination", {
                required: "Please select a destination",
              })}
              className={inputCls}
            >
              <option value="">Select a destination</option>
              {destinations.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.name} — ₹{dest.price.toLocaleString()} ({dest.duration})
                </option>
              ))}
            </select>
            {errors.destination && (
              <p className="text-red-500 text-xs mt-1.5">{errors.destination.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>Number of People *</label>
            <input
              type="number"
              {...register("numberOfPeople", {
                required: "Number of people is required",
                min: { value: 1, message: "Minimum 1 person" },
                max: { value: 50, message: "Maximum 50 people" },
              })}
              className={inputCls}
              placeholder="1 – 50"
            />
            {errors.numberOfPeople && (
              <p className="text-red-500 text-xs mt-1.5">
                {errors.numberOfPeople.message}
              </p>
            )}
          </div>

          <div>
            <label className={labelCls}>Preferred Travel Mode *</label>
            <select
              {...register("travelMode", {
                required: "Please select travel mode",
              })}
              className={inputCls}
            >
              <option value="">Select travel mode</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="car">Car</option>
              <option value="flight">Flight</option>
              <option value="self">Self Arranged</option>
            </select>
            {errors.travelMode && (
              <p className="text-red-500 text-xs mt-1.5">{errors.travelMode.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── 03 Special Conditions ── */}
      <div>
        <SectionHeader index="03" title="Special Conditions" />
        <p className="text-xs text-gray-400 mb-5 -mt-4">
          Select all that apply. Our leaders will be informed in advance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { value: "kids", label: "Traveling with Kids (below 12 years)" },
            { value: "senior", label: "Senior Citizens (above 60 years)" },
            {
              value: "disability",
              label: "Person with Disability — requires assistance",
            },
            {
              value: "medical",
              label: "Medical Conditions — please inform leader",
            },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="flex items-start gap-3 cursor-pointer group p-4 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-200"
            >
              <input
                type="checkbox"
                value={value}
                {...register("specialConditions")}
                className="w-4 h-4 mt-0.5 text-green-600 rounded border-gray-300 focus:ring-green-500 shrink-0"
              />
              <span className="text-sm text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* ── 04 Declaration ── */}
      <div>
        <SectionHeader index="04" title="Declaration & Terms" />
        <div className="bg-gray-50 rounded-xl p-5 mb-5 border border-gray-100">
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed max-h-36 overflow-y-auto pr-2">
            <p>
              <strong className="text-gray-800">Disclaimer:</strong> Off Route
              Adventure organizes adventure activities that involve inherent
              risks. By booking with us, you acknowledge that you are
              participating at your own risk.
            </p>
            <p>
              <strong className="text-gray-800">Refund Policy:</strong>{" "}
              Cancellations made 7 days prior to the trip are eligible for a 50%
              refund. No refunds for cancellations within 7 days of the trip
              date.
            </p>
            <p>
              <strong className="text-gray-800">Safety:</strong> Participants
              must follow all safety guidelines provided by trek leaders. The
              organizers reserve the right to refuse participation if safety
              protocols are not followed.
            </p>
            <p>
              <strong className="text-gray-800">Personal Responsibility:</strong>{" "}
              Participants are responsible for their personal belongings, health,
              and fitness for the chosen activity.
            </p>
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("declaration", {
              required: "You must accept the declaration to proceed",
            })}
            className="w-4 h-4 mt-1 text-green-600 rounded border-gray-300 focus:ring-green-500 shrink-0"
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            I have read and agree to the declaration, terms, refund policy, and
            safety guidelines. I confirm all information is accurate and I am
            physically fit for the chosen activity.
          </span>
        </label>
        {errors.declaration && (
          <p className="text-red-500 text-xs mt-2">{errors.declaration.message}</p>
        )}
      </div>

      {/* ── Status messages ── */}
      {submitStatus === "success" && (
        <div className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-xl p-5">
          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-900 text-sm">
              Booking Request Submitted
            </p>
            <p className="text-green-700 text-sm mt-0.5">
              Our team will contact you shortly to confirm your booking.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5">
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900 text-sm">
              Submission Failed
            </p>
            <p className="text-red-700 text-sm mt-0.5">
              There was an error submitting your booking. Please try again or
              contact us directly.
            </p>
          </div>
        </div>
      )}

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-green-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Booking Request
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

/* ── Page ───────────────────────────────────────── */
export default function BookPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/manali.webp"
            alt="Manali Adventure"
            className="w-full h-full object-cover opacity-80 grayscale-[30%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(10,26,10,0.7) 0%, rgba(10,26,10,0.95) 100%)"
            }}
          />
        </div>

        {/* Topo texture */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none text-green-900 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="topo-book"
              x="0"
              y="0"
              width="320"
              height="240"
              patternUnits="userSpaceOnUse"
            >
              <ellipse cx="160" cy="120" rx="140" ry="90" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <ellipse cx="160" cy="120" rx="105" ry="65" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <ellipse cx="160" cy="120" rx="72" ry="42" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <ellipse cx="160" cy="120" rx="42" ry="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <ellipse cx="160" cy="120" rx="18" ry="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-book)" />
        </svg>

        {/* Ghost text */}
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 leading-none font-black tracking-tighter text-green-900 select-none pointer-events-none hidden md:block"
          style={{ fontSize: "clamp(100px, 18vw, 260px)", opacity: 0.15 }}
        >
          BOOK
        </span>

        {/* Radial glow */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(21,128,61,0.2) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-green-500" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.2em]">
                Off Route Adventure — Booking
              </span>
            </div>
            <h1
              className="font-black text-white leading-[0.92] tracking-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Book Your
              <br />
              <span className="text-green-400">Adventure.</span>
            </h1>
            <p className="text-green-200/70 text-base md:text-lg leading-relaxed max-w-lg">
              Fill in the details below and our team will reach out to confirm
              your trek, answer questions, and get you ready for the trail.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="py-16 md:py-24" style={{ background: "#f7f3ec" }}>
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 xl:gap-16 max-w-6xl mx-auto items-start">

            {/* Form panel */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-16 text-gray-400 text-sm gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading form...
                  </div>
                }
              >
                <BookingForm />
              </Suspense>
            </div>

            {/* Trust sidebar */}
            <TrustSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
