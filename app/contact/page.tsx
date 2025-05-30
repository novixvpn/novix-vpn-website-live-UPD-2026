"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import Footer from "@/components/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
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
            "Thank you for contacting us. We'll get back to you shortly.",
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
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16 md:py-24">
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
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a question about Novix VPN? Need help with your account?
                  Our team is ready to assist you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-1">
                        For general inquiries:
                      </p>
                      <a
                        href="mailto:novixvpna@gmail.com"
                        className="text-primary hover:underline"
                      >
                        novixvpn@gmail.com
                      </a>
                      <p className="text-muted-foreground mt-2 mb-1">
                        For technical support:
                      </p>
                      <a
                        href="mailto:support@novixvpn.com"
                        className="text-primary hover:underline"
                      >
                        novixvpn@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Subject</Label>
                        <RadioGroup
                          value={formData.subject}
                          onValueChange={handleSubjectChange}
                          className="flex flex-col space-y-1"
                        >
                          {[
                            "General Inquiry",
                            "Technical Support",
                            "Billing Question",
                            "Feature Request",
                          ].map((label) => (
                            <div
                              key={label}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem value={label} id={label} />
                              <Label htmlFor={label}>{label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
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
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
