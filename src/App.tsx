import Layout from "./layout";

function App() {
  return (
    <Layout>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <h1>Hello</h1>
        </div>
      </div>
    </Layout>
  );
}

export default App;
