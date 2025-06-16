// app/(your-folder)/delete-account/page.tsx
"use client";

import Image from "next/image";
import {
  Mail,
  Trash2,
  FileText,
  ShieldCheck,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Title Section */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            <Trash2 className="inline-block mr-2 text-red-500" size={32} />
            Delete Your Novix VPN Account
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your privacy is our top priority. If you’ve decided to leave, we’re
            here to make the process safe, simple, and stress-free.
          </p>
        </div>

        {/* Intro Image */}
        <div className="flex justify-center">
          <Image
            src="/image/How-to-delete-my-VPN-account.png"
            alt="Delete Account Illustration"
            width={800}
            height={600}
            className="w-full max-w-md h-auto rounded-lg shadow-sm"
            priority
          />
        </div>

        {/* Reasons */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <ShieldCheck className="text-green-600" />
            <CardTitle className="text-xl">Reasons to Delete</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>No judgement. Just support. You might be:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Exploring a different VPN service</li>
              <li>No longer in need of VPN protection</li>
              <li>Reducing your digital footprint</li>
            </ul>
            <p>Whatever the reason, we respect your decision.</p>
          </CardContent>
        </Card>

        {/* Step 1 */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <FileText className="text-blue-600" />
            <CardTitle className="text-xl">1. Prepare Account Info</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Email associated with your Novix VPN account</li>
              <li>Any proof of identity (e.g., login or transaction ID)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Mail className="text-purple-600" />
            <CardTitle className="text-xl">2. Send Us an Email</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4">
            <p>
              Email us at:{" "}
              <span className="font-medium text-foreground">
                <a
                  href="mailto:novixvpn@gmail.com"
                  className="text-primary hover:underline"
                >
                  novixvpn@gmail.com
                </a>
              </span>
            </p>
            <div className="bg-muted px-4 py-3 rounded-md text-xs font-mono">
              <p className="font-semibold">Subject:</p>
              <p>Request to Delete Account</p>
              <p className="font-semibold mt-2">Body:</p>
              <p>Hello Novix VPN Support Team,</p>
              <p>
                I want to permanently remove my Novix VPN account linked to this
                email address. Please let me know when my account and all data
                have been deleted from your system.
              </p>
              <p>Thanks.</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <LogOut className="text-red-600" />
            <CardTitle className="text-xl">
              3. Confirmation & Deletion
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>We may contact you to verify your identity</li>
              <li>Upon confirmation, all data will be permanently deleted</li>
              <li>You’ll receive a confirmation email once complete</li>
            </ul>
          </CardContent>
        </Card>

        {/* Aftermath */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Trash2 className="text-gray-600" />
            <CardTitle className="text-xl">What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Your account and personal data will be deleted</li>
              <li>Active subscriptions and services will be canceled</li>
              <li>
                We recommend canceling auto-renewals with your payment provider
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Help */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <HelpCircle className="text-yellow-500" />
            <CardTitle className="text-xl">Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>We’re always here. Contact us at:</p>
            <p className="font-medium text-foreground">
              📩{" "}
              <a
                href="mailto:novixvpn@gmail.com"
                className="text-primary hover:underline"
              >
                novixvpn@gmail.com
              </a>
            </p>
            <Separator className="my-4" />
            <p className="text-center italic text-muted-foreground">
              Your privacy. Your control. Your choice.
              <br />
              Thank you for using Novix VPN.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
