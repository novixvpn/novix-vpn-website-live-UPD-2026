import { Check, X } from "lucide-react";
import Image from "next/image";

export default function ComparisonTable() {
  const features = [
    { name: "4K streaming support", competitors: [true, true, true, true] },
    { name: "AES 256-bit encryption", competitors: [true, true, true, true] },
    { name: "Kill switch", competitors: [true, true, true, true] },
    { name: "DNS & IP leak protection", competitors: [true, true, true, true] },
    {
      name: "Ultra-fast & secure Rust architecture",
      competitors: [true, false, false, false],
    },
    {
      name: "Free data scanner tool",
      competitors: [true, false, false, false],
    },
    {
      name: "Free premium password manager",
      competitors: [true, true, false, false],
    },
    {
      name: "Free eSIM data included",
      competitors: [true, false, false, false],
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
                  src="/novix-vpn.png"
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
                  src="/nord-vpn.png"
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
                  src="/Private-vpn.png"
                  width={32}
                  height={32}
                  alt="PrivateVPN"
                  className="mb-2"
                />
                <span className="font-bold">PrivateVPN</span>
              </div>
            </th>
            <th className="p-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/protonvpn.png"
                  width={32}
                  height={32}
                  alt="ProtonVPN"
                  className="mb-2"
                />
                <span className="font-bold">ProtonVPN</span>
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
          <tr className="bg-primary/5">
            <td colSpan={5} className="p-4 text-center font-bold">
              <span>
                Novix VPN offers the most comprehensive protection and features
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
