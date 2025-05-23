export default function PrivacyPolicyPage() {
  return (
    <div className="container py-8 sm:py-12 px-4 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">Privacy Policy</h1>

      <div className="prose prose-sm sm:prose-base max-w-none space-y-6 sm:space-y-8">
        <div className="bg-white/10 border border-blue-200/50 rounded-lg p-4 sm:p-6">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            This Privacy Policy explains how ZorvaPlex Inc. ("we," "our," or "us") collects, uses, and protects your
            information when you use our free social gaming platform.
          </p>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">1. Information We Collect</h2>

          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">1.1 Information You Provide</h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>Contact information when you reach out to us (name, email address)</li>
            <li>Age verification confirmation (that you are 18 years or older)</li>
            <li>Any feedback or communications you send to us</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 mt-4 text-foreground">
            1.2 Automatically Collected Information
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>Device information (browser type, operating system)</li>
            <li>Usage data (pages visited, time spent on platform)</li>
            <li>IP address and general location information</li>
            <li>Game statistics and scores (stored locally on your device)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>To provide and maintain our free gaming platform</li>
            <li>To verify that users are 18 years or older</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To improve our platform and user experience</li>
            <li>To ensure platform security and prevent abuse</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">3. Information Sharing</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
            We do not sell, trade, or rent your personal information to third parties. We may share information only in
            the following circumstances:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>With your explicit consent</li>
            <li>To comply with legal requirements or court orders</li>
            <li>To protect our rights, property, or safety, or that of our users</li>
            <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">4. Data Security</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">5. Data Retention</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">6. Your Rights</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">You have the right to:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">7. Children's Privacy</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Our platform is intended for users 18 years and older. We do not knowingly collect personal information from
            individuals under 18. If we become aware that we have collected personal information from someone under 18,
            we will delete that information immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">8. International Users</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Our platform is operated from Canada. If you are accessing our platform from outside Canada, please be aware
            that your information may be transferred to, stored, and processed in Canada where our servers are located.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">9. Changes to This Policy</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">10. Contact Us</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us:
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

        <div className="bg-white/10 border border-yellow-200/50 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
          <p className="text-sm sm:text-base text-muted-foreground">
            <strong className="text-foreground">Important Reminder:</strong> ZorvaPlex is a free social platform
            exclusively for entertainment purposes. No real money is involved, no prizes or cash rewards are offered.
            All gameplay is entirely virtual and holds no financial value.
          </p>
        </div>
      </div>
    </div>
  )
}
