import { Check, X } from "lucide-react";
import Image from "next/image";

export default function ComparisonTable() {
  const features = [
    {
      name: "Tailored Just for Android",
      competitors: [true, false, false, false, false],
    },
    {
      name: "WireGuard Protocol (Fast & Secure)",
      competitors: [true, true, true, true, false],
    },
    {
      name: "Flexible Pricing (Weekly, Monthly, Yearly)",
      competitors: [true, true, true, true, false],
    },
    {
      name: "Exclusive VIP Features (Yearly Plan)",
      competitors: [true, false, false, false, false],
    },
    {
      name: "Comprehensive Server List",
      competitors: [true, true, true, true, true],
    },
    {
      name: "Kill Switch (Free on All Plans)",
      competitors: [true, false, false, false, false],
    },
    {
      name: "Real-Time Speed Test",
      competitors: [true, false, false, false, false],
    },
    {
      name: "Easy Setup with Tutorial Video",
      competitors: [true, false, false, false, false],
    },
    {
      name: "IP Checker",
      competitors: [true, true, true, true, true],
    },
  ];

  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left"></th>
            <th className="p-4 text-center bg-primary/5 border-t border-l border-r border-border">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/novix-vpn.webp"
                  alt="Novix VPN Logo"
                  width={32}
                  height={32}
                  className="mb-2 rounded-md"
                />
                <span className="font-bold">Novix VPN</span>
              </div>
            </th>
            <th className="p-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/nord-vpn.webp"
                  width={32}
                  height={32}
                  alt="NordVPN"
                  className="mb-2"
                />
                <span className="font-bold">NordVPN</span>
              </div>
            </th>
            <th className="p-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/surfshark.webp"
                  width={32}
                  height={32}
                  alt="NordVPN"
                  className="mb-2"
                />
                <span className="font-bold">Surfshark</span>
              </div>
            </th>
            {/* <th className="p-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/Private-vpn.png"
                  width={32}
                  height={32}
                  alt="PrivateVPN"
                  className="mb-2"
                />
                <span className="font-bold">PrivateVPN</span>
              </div>
            </th> */}
            <th className="p-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/protonvpn.webp"
                  width={32}
                  height={32}
                  alt="ProtonVPN"
                  className="mb-2"
                />
                <span className="font-bold">ProtonVPN</span>
              </div>
            </th>
            <th className="p-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/express-vpn.webp"
                  width={32}
                  height={32}
                  alt="ProtonVPN"
                  className="mb-2"
                />
                <span className="font-bold">ExpressVPN</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
              <td className="p-4 font-medium">{feature.name}</td>
              <td className="p-4 text-center bg-primary/5 border-l border-r border-border">
                <Check className="h-5 w-5 text-green-500 mx-auto" />
              </td>
              {feature.competitors.slice(1).map((supported, i) => (
                <td key={i} className="p-4 text-center">
                  {supported ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
