"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Added Select components
import { toast } from "@/components/ui/use-toast";
import Footer from "@/components/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast({
          title: "Message Sent",
          description:
            "Thank you for contacting Trafford Publishing. We'll get back to you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        toast({
          title: "Failed to send message",
          description: data?.error || "Please try again later.",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-500 to-blue-400 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                We're here to help with any questions or concerns you may have.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="shadow-lg border-none rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-blue-600">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Need help with your VPN connection? Have questions about our
                    security features? We’re here to help you stay secure
                    online.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-3 mt-1">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          Email Support
                        </h3>
                        <p className="text-gray-600 mb-1">
                          <a
                            href="mailto:novixvpn@gmail.com"
                            className="text-blue-600 hover:underline"
                          >
                            novixvpn@gmail.com
                          </a>
                        </p>
                        <p className="text-gray-500 text-sm">
                          Response within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-3 mt-1">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-3-3v6m-9 3h18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          Help Center
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Comprehensive guides & FAQs
                        </p>
                        {/* <p className="text-gray-600 text-sm">
                          Setup tutorials and troubleshooting
                        </p> */}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {[
                        { text: "Zero-Log Policy", icon: "🔒" },
                        { text: "Servers Worldwide", icon: "🌍" },
                        { text: "10Gbps Servers", icon: "⚡" },
                        { text: "Military-Grade Encryption", icon: "🛡️" },
                      ].map((item) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-2 bg-blue-50 text-black px-4 py-2 rounded-full text-sm font-medium"
                        >
                          <span>{item.icon}</span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-600 text-[10px] flex items-center justify-center mt-5">
                      Address : Plot-33, Main Road, Section-10, Senpara Parbata
                      Mirpur - 1216 Bangladesh (BD)
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-none rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                  <p className="text-gray-500 mb-6">
                    We'll get back to you as soon as possible
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-2 border-[#CCE5FF] rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-2 border-[#CCE5FF]  rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </Label>
                      <Select
                        value={formData.subject}
                        onValueChange={handleSubjectChange}
                      >
                        <SelectTrigger className="border-2 border-[#CCE5FF]  rounded-lg focus:ring-2 focus:ring-blue-500">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "Technical Support",
                            "Billing & Account",
                            "Connection Issues",
                            "Feature Request",
                            "Security Concerns",
                            "Other",
                          ].map((label) => (
                            <SelectItem key={label} value={label}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-2 border-[#CCE5FF]  rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Secure Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
