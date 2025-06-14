import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Download, Files, Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const curlCommand = `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \\
  -H 'Content-Type: application/json' \\
  -X POST \\
  -d '{
  "contents": [
    {
      "parts": [
        {
          "text": "Explain how AI works in a few words"
        }
      ]
    }
  ]
}'`;

  return (
    <Container>
      <div className="px-5 pt-2 w-full bg-background sticky top-0">
        <div className="flex items-center gap-2 py-3 border-b border-border">
          <div className="mx-3 flex-1">
            <h1 className="text-2xl text-primary font-medium">API Keys</h1>
          </div>
          <div>
            <Button size="lg" variant="primary" className="rounded-full">
              <Plus /> Create API Key
            </Button>
          </div>
        </div>
      </div>
      <div className="px-5 pt-4">
        <h3 className="text-base text-muted-foreground font-medium">
          Quickly test the Gemini API
        </h3>
      </div>
      <div className="pt-8 pb-4 px-5">
        <Link
          href="https://ai.google.dev/gemini-api/docs/quickstart?lang=python"
          target="_blank"
          className="text-sm text-[#076eff] dark:text-[#87a9ff] font-medium"
        >
          API quickstart guide
        </Link>
        <div className="w-full mt-4 rounded-xl bg-[#edeef1] dark:bg-[#242629] overflow-hidden">
          <div>
            {/* Code block */}
            <pre className="overflow-x-auto p-4 rounded-lg font-mono text-sm leading-relaxed whitespace-pre-wrap text-primary">
              <code>{curlCommand}</code>
            </pre>

            <footer className="flex gap-4 items-center bg-[#edf2fa] dark:bg-[#393939] px-2">
              <div className="flex gap-1">
                <Button variant="ghost" className="size-10 p-2 rounded-full">
                  <Files />
                </Button>
                <Button variant="ghost" className="size-10 p-2 rounded-full">
                  <Download />
                </Button>
              </div>
              <span className="text-xs text-primary">
                Use code{" "}
                <a href="#" className="text-[#076eff] dark:text-[#87a9ff]">
                  with caution
                </a>
                .
              </span>
            </footer>
          </div>
        </div>
        <div>
          <p className="my-4 text-sm font-medium text-neutral-800 dark:text-white">
            Your API keys are listed below. You can also view and manage your
            project and API keys in Google Cloud.
          </p>
          <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#edf2fa] dark:bg-[#393939] border-b border-gray-200">
                  <th className="text-left font-medium text-gray-700 py-4 px-6 text-sm">
                    Project number
                  </th>
                  <th className="text-left font-medium text-gray-700 py-4 px-6 text-sm">
                    Project name
                  </th>
                  <th className="text-left font-medium text-gray-700 py-4 px-6 text-sm">
                    API key
                  </th>
                  <th className="text-left font-medium text-gray-700 py-4 px-6 text-sm">
                    Created
                  </th>
                  <th className="text-left font-medium text-gray-700 py-4 px-6 text-sm">
                    Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-16 text-gray-500 text-sm"
                  >
                    Create an API key to see your projects
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="my-4 text-sm font-medium text-neutral-800 dark:text-white">
            Remember to use API keys securely. Don&apos;t share or embed them in
            public code. Use of Gemini API from a billing-enabled project is
            subject to{" "}
            <a href="#" className="text-[#076eff] dark:text-[#87a9ff]">
              pay-as-you-go pricing
            </a>
            .
          </p>
        </div>
        {/* <Table */}
      </div>
    </Container>
  );
}
