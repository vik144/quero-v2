import { ContentPageView } from "@/components/content-page-view";
import { contentPages } from "@/data/content/siteContent";

export default function AboutPage() {
  return <ContentPageView page={contentPages.about} leadSource="About page" />;
}
