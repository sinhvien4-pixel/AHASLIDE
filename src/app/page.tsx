"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import HiddenGap from "@/components/sections/HiddenGap";
import KnowledgeHub from "@/components/sections/KnowledgeHub";
import MeasurableEngagement from "@/components/sections/MeasurableEngagement";
import ROIDemoRoom from "@/components/sections/ROIDemoRoom";
import ExpertValidation from "@/components/sections/ExpertValidation";
import SuccessStories from "@/components/sections/SuccessStories";
import DownloadCenter from "@/components/sections/DownloadCenter";
import CommunityProof from "@/components/sections/CommunityProof";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import ExploreModal from "@/components/modals/ExploreModal";
import BookingModal from "@/components/modals/BookingModal";
import DownloadModal from "@/components/modals/DownloadModal";
import CommunityModal from "@/components/modals/CommunityModal";
import ContactModal from "@/components/modals/ContactModal";
import type { DownloadResource } from "@/types";

export default function Home() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [knowledgeUnlocked, setKnowledgeUnlocked] = useState(false);
  const [activeResource, setActiveResource] = useState<DownloadResource | null>(null);

  const openExplore = () => setExploreOpen(true);
  const openBooking = () => setBookingOpen(true);
  const openCommunity = () => setCommunityOpen(true);
  const openContact = () => setContactOpen(true);

  const openDownload = (resource: DownloadResource) => {
    setActiveResource(resource);
    setDownloadOpen(true);
  };

  const handleExploreSuccess = () => {
    setKnowledgeUnlocked(true);
  };

  return (
    <main className="bg-[#FFF8FC]">
      <Navigation
        onExplore={openExplore}
        onBookDemo={openBooking}
        onContact={openContact}
      />

      <Hero onExplore={openExplore} onBookDemo={openBooking} />
      <HiddenGap />
      <KnowledgeHub isUnlocked={knowledgeUnlocked} onUnlock={openExplore} />
      <MeasurableEngagement />
      <ROIDemoRoom onBookDemo={openBooking} />
      <ExpertValidation />
      <SuccessStories />
      <DownloadCenter onDownload={openDownload} />
      <CommunityProof onJoin={openCommunity} />
      <FinalCTA
        onBookDemo={openBooking}
        onDownload={() => openDownload({
          id: "engagement-report",
          title: "Báo cáo Engagement Đo lường được 2024",
          description: "Hướng dẫn toàn diện về đo lường Engagement đào tạo.",
          type: "Báo cáo PDF",
          size: "4.2 MB",
        })}
      />

      <Footer onContact={openContact} />

      {/* Modals */}
      <ExploreModal
        open={exploreOpen}
        onClose={() => setExploreOpen(false)}
        onSuccess={handleExploreSuccess}
      />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
      <DownloadModal
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        resource={activeResource}
      />
      <CommunityModal
        open={communityOpen}
        onClose={() => setCommunityOpen(false)}
      />
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
