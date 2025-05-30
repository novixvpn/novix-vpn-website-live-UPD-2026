import {
  Check,
  Shield,
  HeartHandshake,
  Lock,
  MessageCircleMore,
  ShieldBan,
  ShieldAlert,
} from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
        About NovixVPN
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Your digital freedom starts with Novix.
      </p>

      <article className="space-y-12">
        {/* Privacy Philosophy */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            We Believe Privacy is a Fundamental Right
          </h2>
          <p className="text-gray-700 text-lg   leading-relaxed">
            At <strong>NovixVPN</strong>, we don't just believe in online
            privacy —<strong>we champion it</strong> as a basic human right. In
            a world where data is currency and surveillance is normalized, we
            stand as your unwavering guardian of digital freedom.
          </p>
          <p className="text-gray-700 text-lg   leading-relaxed mt-3">
            We envision a future where anyone can explore, communicate, and
            connect online without fear of being watched, tracked, or exploited.
            This isn't just our business model —{" "}
            <strong>it's our moral mission</strong>.
          </p>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg   leading-relaxed">
            <strong>Empowering digital freedom</strong> for everyone,
            everywhere. NovixVPN exists to restore the open internet — a place
            for free expression, privacy, and exploration. In a time when
            governments and corporations commodify your personal data, we give
            you back control over your identity.
          </p>
        </div>

        {/* Unique Features */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            What Sets NovixVPN Apart
          </h2>
          <ul className="  space-y-6">
            <li className="flex items-start space-x-3">
              <Check className="text-primary text-2xl" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  True Zero-Logs Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We don’t track, store, or monitor your activity — ever. Our
                  infrastructure is designed so your data never exists on our
                  servers. Your actions remain yours, period.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Shield className="text-primary text-2xl" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Privacy by Design, Not Marketing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From the first line of code, our systems are built to keep
                  your data private — even from us. This is privacy engineered,
                  not promised in a brochure.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Shield className="text-primary text-2xl" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Built for the Privacy-Conscious
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a journalist, activist, or simply someone who
                  values their privacy, NovixVPN delivers{" "}
                  <strong>enterprise-level security</strong> with simplicity for
                  all.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Core Values
          </h2>
          <ul className="list-disc list-inside   space-y-2 text-gray-700 text-lg">
            <li>
              <strong>Privacy First:</strong> Every decision we make passes
              through one filter: "Does this enhance our users' privacy?" If the
              answer isn't an unequivocal yes, we don't proceed. Your privacy
              isn't negotiable.
            </li>
            <li>
              <strong>Radical Transparency:</strong> You deserve to know exactly
              how we protect you. We maintain complete transparency about our
              infrastructure, policies, and practices. No hidden terms, no fine
              print surprises just honest, straightforward protection.
            </li>
            <li>
              <strong>User Empowerment:</strong> We don't just provide a
              service; we equip you with the tools and knowledge to take control
              of your digital life. Your data, your rules, your freedom.
            </li>
            <li>
              <strong>Continuous Innovation:</strong> The privacy landscape
              evolves rapidly, and so do we. We stay ahead of emerging threats
              through constant innovation, ensuring your protection evolves with
              the digital world.
            </li>
          </ul>
        </div>

        {/* Why We Exist */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Why We Created NovixVPN
          </h2>
          <p className="text-gray-700 text-lg   leading-relaxed">
            NovixVPN was born from frustration with the current state of online
            privacy. Too many VPN providers make bold privacy promises while
            secretly harvesting user data for profit. We knew we could do better
            we knew we had to do better.
          </p>
          <p className="text-gray-700 text-lg   leading-relaxed mt-3">
            Our founding team consists of privacy advocates, cybersecurity
            experts, and software engineers united by a shared conviction: your
            personal data should remain personal. Having experienced the erosion
            of digital privacy firsthand, we're committed to providing our users
            with the same level of protection we demand for ourselves.
          </p>
          <p className="text-gray-700 text-lg   leading-relaxed mt-3">
            This isn't just another tech startup story. This is the story of
            digital activists who decided to build the solution they wished
            existed.
          </p>
        </div>

        {/* Our Promise to You */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Our Promise to You
          </h2>
          <p className="text-gray-700 text-lg   leading-relaxed pb-5">
            When you choose NovixVPN, you're not just selecting a VPN provider
            you're joining a community dedicated to digital rights and online
            freedom. Here's our unwavering commitment:
          </p>
          <div className="space-y-10">
            {/* Complete Privacy Protection */}
            <ul className="  space-y-4 text-gray-700 text-lg">
              <h3 className="text-lg font-semibold text-primary mb-6">
                Complete Privacy Protection
              </h3>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>
                  Zero logging of your online activities it's not our business
                  what you do online
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>
                  Advanced encryption that keeps your data secure from all
                  prying eyes
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>
                  Anonymous browsing that protects your identity and location
                </p>
              </li>
            </ul>
            {/* Continuous Excellence */}
            <ul className="  space-y-4 text-gray-700 text-lg">
              <h3 className="text-lg font-semibold text-primary mb-6">
                Continuous Excellence
              </h3>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>
                  Constant innovation to stay ahead of emerging privacy threats
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>
                  Transparent communication about our capabilities and
                  limitations
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>
                  Anonymous browsing that protects your identity and location
                </p>
              </li>
            </ul>
            {/* Genuine Support */}
            <ul className="  space-y-4 text-gray-700 text-lg">
              <h3 className="text-lg font-semibold text-primary mb-6">
                Genuine Support
              </h3>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>Responsive customer service from real privacy advocates</p>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>
                  Educational resources to help you maximize your digital
                  security
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-primary text-2xl" />
                <p>Clear, jargon-free explanations of how we protect you</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Looking Forward */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Looking Forward
          </h2>
          <p className="text-gray-700 text-lg   leading-relaxed">
            The fight for digital privacy is far from over. As surveillance
            capabilities expand and data monetization intensifies, the need for
            genuine privacy protection grows stronger every day.
          </p>
          <p className="text-gray-700 text-lg   leading-relaxed mt-3">
            For us, NovixVPN represents more than a business venture it's our
            contribution to building a safer, more private internet for
            everyone. We're committed to evolving with the digital landscape
            while never compromising on our core principle: your privacy comes
            first, always.
          </p>
          <p className="text-gray-700 text-lg   leading-relaxed mt-3">
            The internet was created to connect and empower humanity. We're here
            to ensure it fulfills that promise while respecting your right to
            privacy.
          </p>
          <p className="text-gray-700 font-bold text-lg text-center leading-relaxed mt-8">
            Join us in reclaiming your digital freedom. Your journey to true
            online privacy starts here.
          </p>
          <p className="text-gray-700 mt-12 italic text-lg text-center leading-relaxed">
            Ready to experience genuine online privacy? Begin your journey with
            NovixVPN today.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Start Your Privacy Journey with NovixVPN
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Ready to take back control of your digital life?
          </p>
          <a
            href="/download"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/85 transition"
          >
            Join NovixVPN Today
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
