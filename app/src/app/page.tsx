const Home = () => {

  return (
    <div className="h-full flex flex-col gap-4 overflow-auto">
      <div className="grid md:grid-cols-8 gap-4">
        <div className="md:col-span-2 border border-slate-200 bg-slate-100 shadow-sm rounded-lg h-56">
          <div className="p-4">
            Overal statistics
          </div>
        </div>
        <div className="md:col-span-6 border border-slate-200 bg-slate-100 shadow-sm rounded-lg h-56">aa</div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border border-slate-200 bg-slate-100 shadow-sm rounded-lg h-56">aa</div>
        <div className="border border-slate-200 bg-slate-100 shadow-sm rounded-lg h-56">aa</div>
        <div className="border border-slate-200 bg-slate-100 shadow-sm rounded-lg h-56">aa</div>
      </div>
      <div className="border border-slate-200 bg-slate-100 shadow-sm rounded-lg h-80">aa</div>
    </div>
  );
}

export default Home;