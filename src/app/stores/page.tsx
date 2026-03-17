import { ContentPageView } from "@/components/content-page-view";
import { contentPages } from "@/data/content/siteContent";

export default function StoresPage() {
  return <ContentPageView page={contentPages.stores} leadSource="Stores page" />;
}
