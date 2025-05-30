export default function AndroidVPNInfo() {
  return (
    <div className="w-full bg-gray-50 rounded-lg p-10 my-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
        {/* Left column: Heading */}
        <div className="md:w-1/2 flex items-center justify-start">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            What does a VPN do on Android?
          </h2>
        </div>

        {/* Right column: Paragraph */}
        <div className="md:w-1/2">
          <p className="text-gray-600 leading-relaxed">
            A VPN for Android hides your IP address, secures your data, and
            protects your online behavior on any Android phone or tablet by
            building a secure tunnel between the VPN server and your phone. A
            VPN keeps your connection safe, and helps you get around
            geographical limits whether you're using public Wi-Fi, streaming or
            surfing discreetly.
          </p>
        </div>
      </div>
    </div>
  );
}
