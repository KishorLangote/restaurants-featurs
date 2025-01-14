import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main className="container mt-3">
      <h1 className="mb-3">Featured Restaurants</h1>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_640.jpg"
          alt="Teste of Japan"
          className="img-fluid rounded"
        />
        <h2>Taste of Japan</h2>
        <p>Japanian | Rating; 4.7</p>
        <p>123 Ela Street, Springfield,IL</p>
      </section>

      <section>
        <img
          src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_640.jpg"
          alt="Foody Village"
          className="img-fluid rounded"
        />
        <h2>Foody Village</h2>
        <p>Indian | Rating: 4.6</p>
        <p>789 Capitol Avenue, Austin</p>
      </section>
    </main>
  );
};

export default App;
