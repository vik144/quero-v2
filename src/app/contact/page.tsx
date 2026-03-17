import { ContentPageView } from "@/components/content-page-view";
import { contentPages } from "@/data/content/siteContent";

export default function ContactPage() {
  return <ContentPageView page={contentPages.contact} leadSource="Contact page" />;
}
