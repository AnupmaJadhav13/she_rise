import Navbar from "../Components/Navbar";

export default function CommunityForum() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">CommunityForum</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engage in meaningful discussions with like-minded professionals and share knowledge with the community.
          </p>
        </div>
      </main>
    </div>
  )
}
