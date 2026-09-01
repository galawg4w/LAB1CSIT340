function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Lawrence Lapig</h1>
        <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
      </header>
      <hr class="mt-8 border-slate-200"></hr>
      <section className="max-w-2xl mx-auto px-6 mb-10">
        <h2 className="text-xl font-semibold mb-3">About</h2>
        <p className="leading-relaxed text-slate-700">
          I grew and born in Ormoc City, Leyte. I chose IT in college because i got introduced to computers
          in a very young age. I like how computers work. 
        </p>
      </section>
      <section className="max-w-2xl mx-auto px-6 mb-10">
      <h2 class="text-xl font-semibold mb-3">Details</h2>
      <p class="leading-relaxed text-slate-700">
        Course: BS Information Technology
        <br></br>
        Year level: Third year
        <br></br>
        Hometown: Ormoc City, Leyte
      </p>
    </section>
    <section className="max-w-2xl mx-auto px-6 mb-10">
      <h2 className="text-xl font-semibold mb-3">Things I like</h2>
      <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Love sleeping in the weekends</li>
        <li>Eating foods</li>
        <li>My family</li>
      </ul>
    </section>
    <section className="max-w-2xl mx-auto px-6 mb-10">
      <h2 className="text-xl font-semibold mb-3">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        lawrenceisaac.lapig@cit.edu
        <br></br>
        @lawlaw on most things
      </p>
    </section>
    <section class="max-w-2xl mx-auto px-6 pb-16">
    <hr class="mb-6 border-slate-200"></hr>
    <p class="text-sm text-slate-500">Made for CSIT340.</p>
    </section>
    </>
  );
}

export default App;