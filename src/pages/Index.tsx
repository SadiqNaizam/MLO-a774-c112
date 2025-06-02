import React from 'react';
import SidebarNav from '../components/Dashboard/SidebarNav';
import TopHeader from '../components/Dashboard/TopHeader';
import ContentFeed from '../components/Dashboard/ContentFeed';
import StoriesSidebar from '../components/Dashboard/StoriesSidebar';
import SuggestedGroups from '../components/Dashboard/SuggestedGroups';

/**
 * UserDashboardPage component
 * 
 * This page represents the main user dashboard, assembling various components 
 * into a three-column layout with a fixed header.
 * - Left Sidebar: Navigation (SidebarNav)
 * - Main Content: News Feed (ContentFeed)
 * - Right Sidebar: Stories and Suggested Groups (StoriesSidebar, SuggestedGroups)
 * - Top: Header (TopHeader)
 */
const UserDashboardPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      {/* TopHeader is fixed and manages its own layout (h-14, z-index, etc.) */}
      <TopHeader />

      {/* Container for the three-column layout below the header */}
      <div className="flex flex-1 h-full">
        {/* Left Sidebar */}
        {/* Fixed position, starts below the header (top-14) */}
        {/* Height is 100vh minus header height (3.5rem) */}
        {/* Width is w-60 (15rem) */}
        {/* bg-sidebar and px-4 as per layout requirements */}
        <aside className="fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-60 bg-sidebar border-r border-border px-4">
          {/* SidebarNav component handles its own internal padding (py-4) and scrolling */}
          <SidebarNav />
        </aside>

        {/* Main Content Area */}
        {/* Occupies space between left and right sidebars, below the header */}
        {/* Margins (ml-60, mr-64) to avoid overlap with fixed sidebars */}
        {/* Padding-top (pt-14) to account for fixed header */}
        {/* Full viewport height and overflow-y-auto for independent scrolling */}
        <div className="ml-60 mr-64 pt-14 h-screen overflow-y-auto flex-1">
          {/* Inner container for main content with p-4, as per layout requirements */}
          <main className="p-4">
            {/* ContentFeed component manages its own max-width and internal layout */}
            <ContentFeed />
          </main>
        </div>

        {/* Right Sidebar */}
        {/* Fixed position, starts below the header (top-14) */}
        {/* Height is 100vh minus header height (3.5rem) */}
        {/* Width is w-64 (16rem) */}
        {/* bg-surface, px-4, and overflow-y-auto as per layout requirements */}
        <aside className="fixed top-14 right-0 h-[calc(100vh-3.5rem)] w-64 bg-surface border-l border-border px-4 overflow-y-auto">
          {/* StoriesSidebar and SuggestedGroups handle their own internal padding (py-4) */}
          <StoriesSidebar />
          <SuggestedGroups />
        </aside>
      </div>
    </div>
  );
};

export default UserDashboardPage;
