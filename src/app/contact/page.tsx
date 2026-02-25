"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { InstagramColorIcon, WhatsAppColorIcon } from "@/components/SocialIcons";
import { COMPANY_INFO } from "@/lib/constants";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ReviewFormData {
  name: string;
  email: string;
  rating: string;
  feedback: string;
}

const testimonials = [
  {
    name: "Rahul Sharma",
    rating: 5,
    feedback:
      "Amazing experience at Harishchandragad! The trek leaders were very experienced and made us feel safe throughout. Highly recommended!",
    destination: "Harishchandragad",
  },
  {
    name: "Priya Patel",
    rating: 5,
    feedback:
      "The Kalsubai trek was incredible. The sunrise view from the top was breathtaking. Great organization and friendly group.",
    destination: "Kalsubai",
  },
  {
    name: "Amit Deshmukh",
    rating: 4,
    feedback:
      "Loved the Pawna Lake camping experience. Perfect for a weekend getaway. The bonfire and music made it memorable.",
    destination: "Pawna Lake",
  },
  {
    name: "Sneha Kulkarni",
    rating: 5,
    feedback:
      "Corporate retreat with Off Route Adventure was the best team-building activity we've had. Everyone loved it!",
    destination: "Corporate Event",
  },
];

export default function ContactPage() {
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<"success" | "error" | null>(null);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<"success" | "error" | null>(null);
  const [selectedRating, setSelectedRating] = useState(0);

  const contactForm = useForm<ContactFormData>();
  const reviewForm = useForm<ReviewFormData>();

  const onContactSubmit = async (data: ContactFormData) => {
    setContactSubmitting(true);
    setContactStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setContactStatus("success");
        contactForm.reset();
      } else {
        setContactStatus("error");
      }
    } catch {
      setContactStatus("error");
    } finally {
      setContactSubmitting(false);
    }
  };

  const onReviewSubmit = async (data: ReviewFormData) => {
    setReviewSubmitting(true);
    setReviewStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: "New Review Submission",
          message: `Rating: ${data.rating}/5\n\nFeedback: ${data.feedback}`,
        }),
      });

      if (response.ok) {
        setReviewStatus("success");
        reviewForm.reset();
        setSelectedRating(0);
      } else {
        setReviewStatus("error");
      }
    } catch {
      setReviewStatus("error");
    } finally {
      setReviewSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              💬 We&apos;d Love to Hear From You
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Contact <span className="text-green-300">Us</span></h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Have questions? We&apos;re here to help. Reach out to us through any of
              the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                  Reach Out
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
                      <p className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">{COMPANY_INFO.email}</p>
                    </div>
                  </a>
                  <a href={`tel:+91${COMPANY_INFO.phone}`} className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Call Us</p>
                      <p className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">{COMPANY_INFO.phoneFormatted}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Location</p>
                      <p className="font-medium text-gray-900">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href={COMPANY_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform duration-200"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppColorIcon className="h-11 w-11 drop-shadow-sm" />
                    </a>
                    <a
                      href={COMPANY_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform duration-200"
                      aria-label="Instagram"
                    >
                      <InstagramColorIcon className="h-11 w-11 drop-shadow-sm" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      {...contactForm.register("name", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...contactForm.register("email", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      {...contactForm.register("phone")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      {...contactForm.register("subject", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...contactForm.register("message", { required: true })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {contactStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-800 text-sm">Message sent successfully!</span>
                    </div>
                  )}

                  {contactStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="text-red-800 text-sm">Failed to send. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all disabled:opacity-50 shadow-sm"
                  >
                    {contactSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              Traveler Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Travelers Say
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Read reviews from adventurers who have explored with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {testimonials.map((review, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl text-green-200 font-serif leading-none mb-2">&ldquo;</div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-200 fill-current"
                        }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{review.feedback}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-green-600 text-xs">{review.destination}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Share Your Experience
            </h3>
            <form onSubmit={reviewForm.handleSubmit(onReviewSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...reviewForm.register("name", { required: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...reviewForm.register("email", { required: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setSelectedRating(star);
                        reviewForm.setValue("rating", star.toString());
                      }}
                      className="p-1"
                    >
                      <Star
                        className={`h-8 w-8 ${star <= selectedRating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                          }`}
                      />
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  {...reviewForm.register("rating", { required: true })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback *
                </label>
                <textarea
                  {...reviewForm.register("feedback", { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your experience..."
                />
              </div>

              {reviewStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 text-sm">
                    Thank you for your review!
                  </span>
                </div>
              )}

              {reviewStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800 text-sm">
                    Failed to submit. Please try again.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={reviewSubmitting}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all disabled:opacity-50 shadow-sm"
              >
                {reviewSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
