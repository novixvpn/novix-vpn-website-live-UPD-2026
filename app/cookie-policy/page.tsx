import Footer from "@/components/footer";

export default function CookiePolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Novix VPN Cookie Policy</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: May 31, 2025 
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
              <p>
                This Cookie Policy explains how and why Novix VPN uses cookies
                and similar technologies when you interact with our website or
                mobile application. This Cookie Policy applies to
                <span className="text-primary px-1">www.novixvpn.com.</span>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
              <p>
                A cookie is a small encrypted text file sent by a website to
                your browser when you visit it. It may contain a mix of letters
                and numbers. Cookies help the website remember things about your
                visit and send information back to the website when you visit
                again. Additionally, it helps us enhance your experience,
                perform analytics, and provide relevant advertisements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                What types of cookies do we use and how we utilize
              </h2>
              <p>
                We use different types of cookies to support the functionality,
                security, and performance of our service. Some cookies are
                essential to ensure the core features work properly, while
                others help us understand user behavior and improve our
                marketing efforts. Below are the specific types of cookies we
                currently use:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Essential (strictly necessary) cookies:</strong> We
                  use session cookies to manage your login session and keep you
                  authenticated while using our service. These are first-party
                  cookies that are essential for the secure operation of the
                  platform, allowing users to stay logged in and maintain access
                  to protected areas of the website or app. Without these
                  cookies, certain features and secure areas may not function
                  properly.
                </li>
                <li>
                  <strong>Analytics & Advertising cookies:</strong> We use
                  Facebook Pixel to track visitor interactions and behavior on
                  our website/app in order to better understand the
                  effectiveness of our advertising efforts. This helps us
                  deliver more relevant ads, build custom audiences for
                  remarketing, and optimize user engagement based on behavior
                  analytics.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p>
                You can manage or disable cookies through your browser settings
                at any time. Please note that disabling essential first-party
                cookies, such as session cookies, may affect your ability to
                access secure areas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Updates to This Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl  font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-400 text-sm">
                <strong>Company:</strong> CYBERLOOM IT TECHNOLOGIES
                <br />
                <strong>Address:</strong> Plot-33, Main Road, Section-10,
                Senpara Parbata Mirpur - 1216 Bangladesh (BD)
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:novixvpn@gmail.com"
                  className="text-primary hover:underline"
                >
                  novixvpn@gmail.com
                </a>
                <br />
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
