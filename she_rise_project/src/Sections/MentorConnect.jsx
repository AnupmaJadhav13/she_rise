import Navbar from "../Components/Navbar";

const MentorConnect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">MentorConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find experienced mentors to guide your career journey and help you achieve your professional goals.
          </p>
        </div>
      </main>
    </div>
  )
}

export default MentorConnect
