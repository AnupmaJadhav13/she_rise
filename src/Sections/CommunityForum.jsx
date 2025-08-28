export default function CommunityForum() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-indigo-200">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Community Forum</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engage in meaningful discussions with like-minded professionals and share knowledge with the community.
          </p>
        </div>

        {/* Search + Create New Post */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full sm:w-2/3 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            + New Discussion
          </button>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {["General", "Technology", "Startups", "Personal Growth"].map((cat) => (
            <div key={cat} className="p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer text-center">
              <h3 className="font-semibold">{cat}</h3>
            </div>
          ))}
        </div>

        {/* Recent Discussions */}
        <div className="space-y-4">
          {[
            { title: "How do you stay productive while working remote?", author: "Anita", replies: 5 },
            { title: "Best resources to learn DSA?", author: "Rohit", replies: 12 },
            { title: "Pitch Deck Tips for Startups?", author: "Priya", replies: 3 },
          ].map((post, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">Posted by {post.author} · {post.replies} replies</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
