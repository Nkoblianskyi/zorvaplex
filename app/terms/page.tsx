export default function TermsPage() {
  return (
    <div className="container py-8 sm:py-12 px-4 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">Terms of Use</h1>

      <div className="prose prose-sm sm:prose-base max-w-none space-y-6 sm:space-y-8">
        <div className="bg-white/10 border border-blue-200/50 rounded-lg p-4 sm:p-6">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            These Terms of Use ("Terms") govern your use of the ZorvaPlex platform operated by ZorvaPlex Inc. ("we,"
            "our," or "us"). By accessing or using our platform, you agree to be bound by these Terms.
          </p>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">1. Acceptance of Terms</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            By accessing and using ZorvaPlex, you accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">2. Platform Description</h2>
          <div className="bg-white/10 border border-green-200/50 rounded-lg p-4 sm:p-6">
            <p className="text-sm sm:text-base text-muted-foreground mb-2">
              <strong className="text-foreground">
                ZorvaPlex is a FREE social gaming platform designed exclusively for entertainment purposes.
              </strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
              <li>No real money is involved in any aspect of our platform</li>
              <li>No cash prizes, rewards, or winnings are offered</li>
              <li>All gameplay is entirely virtual and has no real-world value</li>
              <li>No deposits, payments, or purchases are required or accepted</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">3. Age Requirement</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            You must be 18 years of age or older to use this platform. By using ZorvaPlex, you represent and warrant
            that you are at least 18 years old. We reserve the right to verify your age and may terminate your access if
            you are found to be under 18.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">4. Acceptable Use</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
            You agree to use ZorvaPlex only for lawful purposes and in accordance with these Terms. You agree NOT to:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>Use the platform for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the platform's operation</li>
            <li>Use automated systems or bots to access the platform</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Upload or transmit malicious code or content</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">5. Virtual Content</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            All game elements, scores, achievements, and virtual items on ZorvaPlex have no real-world value and cannot
            be exchanged for money, goods, or services. Virtual content is provided solely for entertainment purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">6. Intellectual Property</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            The ZorvaPlex platform, including all content, features, and functionality, is owned by ZorvaPlex Inc. and
            is protected by copyright, trademark, and other intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">7. Privacy</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
            platform, to understand our practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">8. Disclaimers</h2>
          <div className="bg-white/10 border border-yellow-200/50 rounded-lg p-4 sm:p-6">
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              <strong className="text-foreground">IMPORTANT DISCLAIMERS:</strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
              <li>ZorvaPlex is provided "as is" without warranties of any kind</li>
              <li>We do not guarantee uninterrupted or error-free operation</li>
              <li>We are not responsible for any technical issues or data loss</li>
              <li>Use of the platform is at your own risk</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">9. Limitation of Liability</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            To the maximum extent permitted by law, ZorvaPlex Inc. shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
            or indirectly.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">10. Termination</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We may terminate or suspend your access to ZorvaPlex immediately, without prior notice or liability, for any
            reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">11. Responsible Gaming</h2>
          <div className="bg-white/10 border border-purple-200/50 rounded-lg p-4 sm:p-6">
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              While ZorvaPlex involves no real money, we encourage responsible gaming habits:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
              <li>Take regular breaks from gaming</li>
              <li>If gaming stops being fun, take a step back</li>
              <li>Seek support if you have concerns about gaming habits</li>
              <li>Visit support organizations like Gordon Moody, GamCare, or BeGambleAware for guidance</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">12. Governing Law</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            These Terms shall be governed by and construed in accordance with the laws of Canada and the Province of
            Ontario, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">13. Changes to Terms</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to
            provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">14. Contact Information</h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground">
            If you have any questions about these Terms, please contact us:
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
      </div>
    </div>
  )
}
