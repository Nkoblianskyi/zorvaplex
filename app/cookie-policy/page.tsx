export default function CookiePolicyPage() {
  return (
    <div className="container py-8 sm:py-12 px-4 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">Cookie Policy</h1>

      <div className="prose prose-sm sm:prose-base max-w-none space-y-6 sm:space-y-8">
        <div className="bg-white/10 border border-blue-200/50 rounded-lg p-4 sm:p-6">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            This Cookie Policy explains how ZorvaPlex Inc. ("we," "our," or "us") uses cookies and similar technologies
            when you visit our free social gaming platform.
          </p>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">1. What Are Cookies?</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a
            website. They help websites remember information about your visit, such as your preferences and settings,
            which can make your next visit easier and the site more useful to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">2. How We Use Cookies</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
            We use cookies for several purposes to enhance your experience on ZorvaPlex:
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/10 border border-green-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Essential Cookies</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">
                These cookies are necessary for the platform to function properly:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                <li>Age verification status (remembering that you confirmed you're 18+)</li>
                <li>Session management and security</li>
                <li>Platform functionality and navigation</li>
              </ul>
            </div>

            <div className="bg-white/10 border border-blue-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Functional Cookies</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">
                These cookies enhance your experience by remembering your preferences:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                <li>Game settings and preferences</li>
                <li>Theme preferences (dark/light mode)</li>
                <li>Language preferences</li>
                <li>Local game scores and statistics</li>
              </ul>
            </div>

            <div className="bg-white/10 border border-purple-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Analytics Cookies</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">
                These cookies help us understand how visitors use our platform:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                <li>Number of visitors and page views</li>
                <li>How visitors navigate through the platform</li>
                <li>Which features are most popular</li>
                <li>Performance and error tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">3. Types of Cookies We Use</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300/50 text-sm sm:text-base">
              <thead>
                <tr className="bg-white/10">
                  <th className="border border-gray-300/50 px-3 sm:px-4 py-2 text-left font-semibold text-foreground">
                    Cookie Type
                  </th>
                  <th className="border border-gray-300/50 px-3 sm:px-4 py-2 text-left font-semibold text-foreground">
                    Purpose
                  </th>
                  <th className="border border-gray-300/50 px-3 sm:px-4 py-2 text-left font-semibold text-foreground">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">Session Cookies</td>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">
                    Essential platform functionality
                  </td>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">
                    Until browser is closed
                  </td>
                </tr>
                <tr className="bg-white/10">
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">
                    Persistent Cookies
                  </td>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">
                    Remember preferences and settings
                  </td>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">Up to 1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">Local Storage</td>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">
                    Game scores and progress
                  </td>
                  <td className="border border-gray-300/50 px-3 sm:px-4 py-2 text-muted-foreground">
                    Until manually cleared
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">4. Third-Party Cookies</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
            We may use third-party services that set their own cookies. These may include:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>
              <strong className="text-foreground">Analytics Services:</strong> To understand platform usage and improve
              user experience
            </li>
            <li>
              <strong className="text-foreground">Content Delivery Networks:</strong> To ensure fast and reliable
              platform performance
            </li>
            <li>
              <strong className="text-foreground">Security Services:</strong> To protect against spam and abuse
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
            5. Managing Your Cookie Preferences
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Browser Settings</h3>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies individually or all at once</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies from being set</li>
                <li>Set cookies to be deleted when you close your browser</li>
              </ul>
            </div>

            <div className="bg-white/10 border border-yellow-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Important Note</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Please note that disabling certain cookies may affect the functionality of ZorvaPlex. Essential cookies
                are necessary for the platform to work properly, including age verification and game functionality.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
            6. Browser-Specific Instructions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 border border-gray-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Chrome</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Settings → Privacy and Security → Cookies and other site data
              </p>
            </div>
            <div className="bg-white/10 border border-gray-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Firefox</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Options → Privacy & Security → Cookies and Site Data
              </p>
            </div>
            <div className="bg-white/10 border border-gray-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Safari</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Preferences → Privacy → Manage Website Data</p>
            </div>
            <div className="bg-white/10 border border-gray-200/50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Edge</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Settings → Cookies and site permissions → Cookies and site data
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">7. Updates to This Policy</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie
            Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">8. Contact Us</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="bg-white/10 border border-gray-200/50 rounded-lg p-4 sm:p-6">
            <p className="text-sm sm:text-base text-muted-foreground">
              <strong className="text-foreground">ZorvaPlex Inc.</strong>
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">31 Sussex Dr, Ottawa, ON, K1N 6Z2</p>
            <p className="text-sm sm:text-base text-muted-foreground">Email: write@zorvaplex.com</p>
            <p className="text-sm sm:text-base text-muted-foreground">Phone: +1 613 185 9012</p>
          </div>
        </section>

        <div className="bg-white/10 border border-green-200/50 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
          <p className="text-sm sm:text-base text-muted-foreground">
            <strong className="text-foreground">Remember:</strong> ZorvaPlex is a free social platform exclusively for
            entertainment purposes. No real money is involved, no prizes or cash rewards are offered. All gameplay is
            entirely virtual and holds no financial value.
          </p>
        </div>
      </div>
    </div>
  )
}
