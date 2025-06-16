import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
        <CardContent className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Invoice</h1>
              <p className="text-sm text-gray-600 mt-1">
                Thank you for your subscription to NovixVPN
              </p>
            </div>
            <div className="text-right">
              <Image
                src="/novix-logo.webp"
                alt="Novix VPN Logo"
                width={180}
                height={58}
                className="rounded-md"
                draggable="false"
              />
              <p className="text-sm text-gray-600">
                CYBERLOOM IT TECHNOLOGIES
                <br />
                Plot-33, Main Road, Section-10, Senpara Parbata
                <br />
                Mirpur - 1216 Bangladesh (BD)
                <br />
                novixvpn@gmail.com
              </p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Invoice Details
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Invoice Date: <span className="font-medium">June 3, 2025</span>
              </p>
              <p className="text-sm text-gray-600">
                Invoice ID:{" "}
                <span className="font-medium">#INV-20250603-001</span>
              </p>
            </div>
          </div>

          <Separator className="my-6" />

          {/* User and Subscription Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Billed To</h2>
              <p className="text-sm text-gray-600 mt-2">
                Name: <span className="font-medium">John Doe</span>
                <br />
                Email: <span className="font-medium">john@example.com</span>
                <br />
                Address:{" "}
                <span className="font-medium">
                  456 User Lane, New York, NY 10001
                </span>
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Subscription Details
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Plan:{" "}
                <span className="font-medium">Premium VPN Subscription</span>
                <br />
                Subscription Date:{" "}
                <span className="font-medium">June 1, 2025</span>
                <br />
                Expiry Date: <span className="font-medium">June 30, 2025</span>
                <br />
                Bonus Period:{" "}
                <span className="font-medium">July 1 - July 7, 2025</span>
              </p>
            </div>
          </div>

          {/* Charges Table */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Billing Summary
            </h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm text-gray-600">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">
                      Description
                    </th>
                    <th className="py-3 px-4 text-right font-semibold">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 px-4">
                      Premium VPN Subscription (Monthly)
                    </td>
                    <td className="py-3 px-4 text-right">$9.99</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Tax (8%)</td>
                    <td className="py-3 px-4 text-right">$0.80</td>
                  </tr>
                  <tr className="border-t bg-gray-50 font-semibold">
                    <td className="py-3 px-4">Total</td>
                    <td className="py-3 px-4 text-right">$10.79</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Payment Terms */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Payment Terms
            </h2>
            <p className="text-sm text-gray-600">
              Payment is due within 7 days of the invoice date. Please make
              payments to:
              <br />
              Bank: NovixVPN Inc.
              <br />
              Account: 1234-5678-9012-3456
              <br />
              Routing: 987654321
              <br />
              Or pay online at:{" "}
              <a
                href="https://novixvpn.com/pay"
                className="text-blue-600 hover:underline"
              >
                novixvpn.com/pay
              </a>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600">
            <p>
              If you have any questions about this invoice, please contact us at{" "}
              <a
                href="mailto:novixvpn@gmail.com"
                className="text-blue-600 hover:underline"
              >
                novixvpn@gmail.com
              </a>
            </p>
            <p className="mt-2">Thank you for choosing NovixVPN!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
