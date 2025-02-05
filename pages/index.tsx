import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">FinCEN 314(a) Solutions</h1>
        
        <ol className="list-decimal space-y-8 text-sm sm:text-base">
          <li>
            <h2 className="font-bold mb-2">314(a) Compliance Monitoring System</h2>
            <p className="mb-4">Concept: Develop a web-based platform that automates the process of querying and responding to FinCEN 314(a) information requests. The system could integrate directly with a financial institution's transaction monitoring systems to flag suspicious individuals or entities based on FinCEN's queries.</p>
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Automated matching of customer records with FinCEN's 314(a) lists.</li>
              <li>Real-time alerts for any matches found.</li>
              <li>Pre-built templates for reporting back to FinCEN in case of matches.</li>
              <li>Audit trail for all actions taken during the 314(a) inquiry process.</li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold mb-2">FinCEN 314(a) Training Simulator</h2>
            <p className="mb-4">Concept: Develop a training platform for compliance officers that simulates the FinCEN 314(a) inquiry and reporting process. This could serve as an educational tool for staff within financial institutions.</p>
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Realistic simulations of handling 314(a) requests.</li>
              <li>Timed exercises to simulate urgency.</li>
              <li>Scoreboard and feedback based on compliance accuracy.</li>
              <li>Role-playing features that simulate internal and external communications.</li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold mb-2">AML Data Aggregator with 314(a) Alerts</h2>
            <p className="mb-4">Concept: Build an API-driven aggregator tool that combines multiple external data sources and internal transaction monitoring data to generate suspicious activity alerts related to Section 314(a) inquiries.</p>
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Centralized dashboard for monitoring financial compliance risks.</li>
              <li>Cross-check against FinCEN 314(a) requests.</li>
              <li>Data export features for internal compliance reporting.</li>
              <li>Automated alerts to compliance officers.</li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold mb-2">FinCEN 314(a) Data Visualization</h2>
            <p className="mb-4">Concept: A dashboard tool that visually presents the compliance team with insights into 314(a) requests, response timelines, and potential exposure based on customer data.</p>
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Interactive graphs showing the number of requests over time.</li>
              <li>Visualization of customer or entity exposure to 314(a) requests.</li>
              <li>Timeline visualization to track responses and escalate overdue items.</li>
              <li>Exportable reports for audit and compliance.</li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold mb-2">Mobile FinCEN 314(a) Notification App</h2>
            <p className="mb-4">Concept: Develop a mobile app that alerts compliance officers in real-time about new FinCEN 314(a) inquiries and provides tools for responding on the go.</p>
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Real-time push notifications for new inquiries.</li>
              <li>Access to the institution's full customer database for cross-checking.</li>
              <li>Workflow for submitting responses directly from the mobile app.</li>
              <li>Secure login with MFA to ensure regulatory compliance.</li>
            </ul>
          </li>
        </ol>

        <div className="mt-8">
          <h2 className="font-bold mb-4">Useful Links for Financial Regulations and Compliance:</h2>
          <ul className="list-none space-y-4">
            <li>
              <a href="https://www.fincen.gov/314a" className="text-blue-600 hover:underline">FinCEN 314(a) Information Sharing Program</a>
              <p className="text-sm text-gray-600">Provides an overview and details of FinCEN's 314(a) program.</p>
            </li>
            <li>
              <a href="https://home.treasury.gov/policy-issues/office-of-foreign-assets-control-sanctions-programs" className="text-blue-600 hover:underline">Office of Foreign Assets Control (OFAC)</a>
              <p className="text-sm text-gray-600">Useful for cross-referencing entities from 314(a) requests with OFAC lists.</p>
            </li>
            <li>
              <a href="https://www.fincen.gov" className="text-blue-600 hover:underline">Financial Crimes Enforcement Network (FinCEN)</a>
              <p className="text-sm text-gray-600">Access to more information about financial crimes and compliance programs.</p>
            </li>
          </ul>
        </div>
      </main>
      
      // ... existing footer code ...
    </div>
  );
}