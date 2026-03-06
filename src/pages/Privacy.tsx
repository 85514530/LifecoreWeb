import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  const handleBack = () => {
    // Attempt to go back in history, or fallback to home if direct visit
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto relative shadow-sm">
      {/* Sticky Mobile Header */}
      <header className="sticky top-0 z-50 flex items-center h-14 px-4 bg-background/80 backdrop-blur-md border-b border-border">
        <button
          onClick={handleBack}
          className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-semibold text-base ml-2">Privacy Policy</span>
      </header>

      {/* Content */}
      <main className="flex-1 px-5 py-6 overflow-y-auto">
        <article className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">
            Last Updated: February 27, 2026
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">1. Introduction</h2>
          <p>
            Welcome to Lifecore. This Privacy Policy explains how Hong Kong Lifecore Technology Co., Limited ("we," "us," or "our") collects, uses, and shares information about you when you use our enterprise software platform and mobile application, Lifecore (the "Platform").
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">2. Information We Collect</h2>
          <p>We collect information to provide better services to all our users.</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Account Information:</strong> When you register for an account, we may collect your name, email address, and phone number.</li>
            <li><strong>Device and Performance Data:</strong> We collect diagnostic and performance information, including crash logs and device identifiers, to maintain the stability and quality of the App.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">3. How We Use Your Information</h2>
          <p>We use the collected data for various purposes:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>To provide and maintain the App.</li>
            <li>To notify you about changes to our App.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our App.</li>
            <li>To monitor the usage of the App and detect, prevent, and address technical issues.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">4. Data Storage and Transfer</h2>
          <p>
            Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. Our primary business address is UNIT 617, 6/F KING CTR 5-9 KA HING RD KWAI CHUNG HONG KONG.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">5. Your Data Protection Rights (GDPR/CCPA)</h2>
          <p>Depending on your location (especially in the European Union), you have certain data protection rights:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us at <a href="mailto:cardlife.hk@gmail.com" className="text-primary underline">cardlife.hk@gmail.com</a>.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">6. Children's Privacy</h2>
          <p>
            Our App does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 mb-10">
            <li><strong>By email:</strong> <a href="mailto:cardlife.hk@gmail.com" className="text-primary underline">cardlife.hk@gmail.com</a></li>
            <li><strong>By phone:</strong> <span className="opacity-40">+852 95341938</span></li>
            <li><strong>By visiting our registered office:</strong> UNIT 617, 6/F KING CTR 5-9 KA HING RD KWAI CHUNG HONG KONG</li>
          </ul>
        </article>
      </main>
    </div>
  );
}
