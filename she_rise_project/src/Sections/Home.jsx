import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">    
     <Navbar/>
     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Welcome to SheRise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Your comprehensive platform for mentorship, business connections, and community engagement. Connect, learn,
            and grow with professionals from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className='bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transistion-colors font-semibold'>
                Get Started
                </button>
                <button className='border border-border px-8 py-3 rounded-lg hover:bg-accent transistion-colors font-semibold'>
                Learn More      
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             <a href="/mentor-connect" className="group">
            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">MentorConnect</h3>
              <p className="text-muted-foreground mb-4">
                Find experienced mentors to guide your career journey and help you achieve your professional goals.
              </p>
              <span className="text-primary font-medium group-hover:underline">Explore Mentors →</span>
            </div>
          </a>

          <a href="/business-connect" className="group">
            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">B</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                BusinessConnect
              </h3>
              <p className="text-muted-foreground mb-4">
                Network with entrepreneurs, investors, and business leaders to grow your business and explore
                opportunities.
              </p>
              <span className="text-primary font-medium group-hover:underline">Start Networking →</span>
            </div>
          </a>

          <a href="/community-forum" className="group">
            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">C</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">CommunityForum</h3>
              <p className="text-muted-foreground mb-4">
                Engage in meaningful discussions with like-minded professionals and share knowledge with the community.
              </p>
              <span className="text-primary font-medium group-hover:underline">Join Discussions →</span>
            </div>
          </a>
        </div>

        <div className="bg-card rounded-lg border border-border p-8 text-center">
          <h2 className="text-3xl font-semibold mb-8">Join Our Growing Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">850+</div>
              <div className="text-muted-foreground">Mentors Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Successful Connections</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}