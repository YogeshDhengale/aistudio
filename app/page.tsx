import Container from "@/components/container";
import AnimatedInputUI from "@/components/homeComponents/animated-input-ui";
import HomeHeader from "@/components/homeComponents/home-header";
import LlmCard from "@/components/homeComponents/llm-card";
import ToolSidebar from "@/components/tool-sidebar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <Container>
        <HomeHeader />
        <div className="flex-1 flex px-5 pb-2">
          <div className="w-full flex @container flex-col gap-3 items-center justify-end md:justify-start">
            <div className="pt-[calc(50vh-270px)] flex-1 md:flex-0 flex items-center justify-center">
              <h1 className="bg-linear-90 from-0% from-[#002c70] to-[#076eff] to-100% bg-clip-text text-transparent text-4xl mb-3 max-w-lg text-center">
                Welcome to AI Studio
              </h1>
            </div>
            <AnimatedInputUI />
            <div className="pt-2 max-w-3xl w-full">
              <div className="flex flex-col w-full @container/cq overflow-hidden">
                <p className="text-sm text-muted-foreground font-medium mb-2">
                  What&apos;s new
                </p>
                <section
                  className="grid grid-cols-[repeat(4,1fr)] md:grid-cols-2 justify-start overflow-auto gap-3 @[max-width:550px]/cq:grid-cols-4 w-full"
                  style={{ scrollbarWidth: "none" }}
                >
                  <LlmCard
                    img={
                      "https://www.gstatic.com/aistudio/zero-state/text_soundswave.png"
                    }
                    isNew
                    subtitle="Generate high quality text to speech with Gemini"
                    title="Native Speech Generation"
                  />
                  <LlmCard
                    isNew
                    title="Live audio-to-audio dialog"
                    subtitle="New Try Gemini's natural, real-time dialog with audio and video inputs"
                    img={
                      "https://www.gstatic.com/aistudio/zero-state/blue_blob.png"
                    }
                  />
                  <LlmCard
                    title="Native image generation"
                    subtitle="Interleaved text-and-image generation with the new Gemini 2.0 Flash"
                    img={
                      "https://www.gstatic.com/aistudio/zero-state/horse_in_chat_opt_62x62.png"
                    }
                  />
                  <LlmCard
                    title="Explore and co-develop apps"
                    subtitle="See Gemini in action with interactive, open source examples"
                    img={
                      "https://www.gstatic.com/aistudio/zero-state/promo_chat_applets.png"
                    }
                  />
                </section>
              </div>
            </div>
            <div className="flex gap-3 md:hidden w-full px-2 overflow-auto mt-3" style={{ scrollbarWidth: "none" }}>
                <Badge variant="outline" className="rounded-full text-muted-foreground text-xs px-2 py-1">Solve a problem using Python</Badge>
                <Badge variant="outline" className="rounded-full text-muted-foreground text-xs px-2 py-1">Create a scavenger hunt.</Badge>
                <Badge variant="outline" className="rounded-full text-muted-foreground text-xs px-2 py-1">Generate a confusion matrix in Python</Badge>
            </div>
          </div>
        </div>
      </Container>
      <ToolSidebar />
    </>
  );
}
